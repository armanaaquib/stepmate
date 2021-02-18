package com.stepmate.shared

import com.fasterxml.jackson.annotation.JsonInclude

@JsonInclude(JsonInclude.Include.NON_NULL)
data class StepmateResponse(
    val data: Any? = null,
    val errors: List<Error>? = null
)
