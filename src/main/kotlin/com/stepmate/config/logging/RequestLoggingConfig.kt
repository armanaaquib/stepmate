package com.stepmate.logging

import mu.KLogging
import mu.withLoggingContext
import org.springframework.context.annotation.Configuration
import org.springframework.web.filter.OncePerRequestFilter
import javax.servlet.FilterChain
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

@Configuration
class RequestLoggingConfig : OncePerRequestFilter() {

    companion object : KLogging()

    override fun doFilterInternal(
        request: HttpServletRequest, response: HttpServletResponse, filterChain: FilterChain
    ) {

        try {
            withLoggingContext("url" to request.requestURI, "method" to request.method) {
                logger.info("Request started")
            }
            filterChain.doFilter(request, response)
        } finally {
            withLoggingContext(
                "url" to request.requestURI,
                "method" to request.method,
                "status" to response.status.toString()
            ) {
                logger.info("Request completed")
            }
        }
    }
}
