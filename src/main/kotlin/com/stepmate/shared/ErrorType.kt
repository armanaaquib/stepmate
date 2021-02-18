package com.stepmate.shared

enum class ErrorType(val code: Int, val message: String) {
    INTERNAL_SERVER_ERROR(1000, "Internal server error")
}
