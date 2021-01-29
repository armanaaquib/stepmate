package com.stepmate

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class StepMateApplication

fun main(args: Array<String>) {
	runApplication<StepMateApplication>(*args)
}
