// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import GameFrameworkController from "./game_framework_controller.js"
application.register("game-framework", GameFrameworkController)

import HelloController from "./hello_controller.js"
application.register("hello", HelloController)

import LoadingController from "./loading_controller.js"
application.register("loading", LoadingController)

import LoadingTypedJsController from "./loading_typed_js_controller.js"
application.register("loading-typed-js", LoadingTypedJsController)

import SweetAlertController from "./sweet_alert_controller.js"
application.register("sweet-alert", SweetAlertController)

import TestFightController from "./test_fight_controller.js"
application.register("test-fight", TestFightController)

import TypedJsController from "./typed_js_controller.js"
application.register("typed-js", TypedJsController)
