package com.stepmate

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class StepmateApplication

fun main(args: Array<String>) {
	runApplication<StepmateApplication>(*args)
}
