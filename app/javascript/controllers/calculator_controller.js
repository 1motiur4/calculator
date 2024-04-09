import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
  }

  print_1() {
    const screenElement = this.element.querySelector("#calculator-screen")
    screenElement.innerHTML += "1"
  }

  number() {
    const num = this.element
    console.log(num)
  }
}
