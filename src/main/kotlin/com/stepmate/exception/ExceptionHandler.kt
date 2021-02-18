package com.stepmate.exception

import com.stepmate.shared.Error
import com.stepmate.shared.ErrorType
import com.stepmate.shared.StepmateResponse
import mu.KLogging
import org.springframework.core.NestedExceptionUtils
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler

@ControllerAdvice
class ExceptionHandler : ResponseEntityExceptionHandler() {

    companion object : KLogging()

    @ExceptionHandler(Exception::class)
    fun internalServerErrorHandler(exception: Exception): ResponseEntity<StepmateResponse> {
        val mostSpecificCause = NestedExceptionUtils.getMostSpecificCause(exception)

        logger.error(ErrorType.INTERNAL_SERVER_ERROR.message, mostSpecificCause)

        val errors = listOf(
            Error(
                ErrorType.INTERNAL_SERVER_ERROR.code,
                mostSpecificCause.message ?: ErrorType.INTERNAL_SERVER_ERROR.message
            )
        )
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
            .body(StepmateResponse(errors = errors))
    }
}
