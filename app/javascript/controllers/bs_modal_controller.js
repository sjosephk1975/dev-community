import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="bs-modal"
export default class extends Controller {
  connect() {
    this.modal = new bootstrap.Modal(this.element, {
      keyboard: false
    })
    this.modal.show()
  }

  disconnent() {
    this.modal.hide()
  }
  submitEnd(event) {
    this.modal.hide()
  }
}
