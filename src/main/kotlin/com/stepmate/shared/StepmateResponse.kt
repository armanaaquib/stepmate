package com.stepmate.shared

import com.fasterxml.jackson.annotation.JsonInclude

@JsonInclude(JsonInclude.Include.NON_NULL)
data class StepmateResponse<T>(
    val data: T? = null,
    val errors: List<Error>? = null
)
