#  ----------- fontend-builder --------------
FROM node:12 AS frontend-builder

WORKDIR /usr/src/app

# First: only copy definition of dependencies and install them --> docker can cache this step
COPY frontend/package.json frontend/yarn.lock ./
RUN yarn

# Second: copy whole frontend and build it
COPY frontend ./
RUN yarn build


#  ----------- builder --------------
FROM gradle:jdk11 AS builder

ENV SERVICE='stepmate'

RUN mkdir -p /home/gradle/${SERVICE}
WORKDIR /home/gradle/${SERVICE}

# First: only copy definition of dependencies and install them --> docker can cache this step
COPY settings.gradle.kts build.gradle.kts ./
RUN gradle clean build -x test || return 0

COPY ./ ./
COPY --from=frontend-builder "/usr/src/app/build" "/home/gradle/${SERVICE}/src/main/resources/static"

# switch to gradle user, because embedded postgres does not work as root
# RUN chown -R gradle /home/gradle
# USER gradle

RUN gradle clean build -x test --stacktrace


#  ----------- service --------------
FROM amazoncorretto:11

ENV SERVICE='stepmate'

COPY --from=builder /home/gradle/${SERVICE}/build/libs/${SERVICE}.jar /${SERVICE}/

WORKDIR /${SERVICE}
ENTRYPOINT ["java","-jar","stepmate.jar"]

EXPOSE 8000
