package com.stepmate.shared

data class Error(
    val code: Int,
    val message: String
) {
    constructor(errorType: ErrorType) : this(errorType.code, errorType.message)
}
