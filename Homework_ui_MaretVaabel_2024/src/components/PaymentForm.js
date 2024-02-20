const template = document.createElement('template')
template.innerHTML = `
<style>
 :host { }

 button {
  border: none;
  appearance: none;
  background: inherit;
  cursor: pointer;
  text-decoration: none;
  display: grid;
  align-items: center;
  justify-items: center;
  font-weight: 400;
  padding: 10px 20px;
}
.actionButtons {
  display: grid;
  justify-content: end;
  grid-gap: 10px;
  grid-template-columns: max-content max-content;
  padding: 20px;
}
@media (max-width: 599px) { 
  .actionButtons {
    grid-template-columns: 1fr;
  }
}

.primaryButton {
  background: #ff5f00;
  color: #fff;
  font-size: 20px;
  border-radius: 3px;
}
.primaryButton:hover,
.primaryButton:active,
.primaryButton:focus {
  background: #fb4f00;
}

.secondaryButton {
  background: #31a3ae;
  color: #fff;
  font-size: 20px;
  border-radius: 3px;
}
.secondaryButton:hover,
.secondaryButton:active,
.secondaryButton:focus {
    background: #257886;
}

.formContainer {
  display: grid;
  justify-items: center;
  grid-gap: 10px;
  margin: 50px 20px;  
}
.inputContainer {
  display: grid;
  grid-template-columns: 30% 70%;
  width: 500px;
  align-items: center;
} 

@media (max-width: 599px) { 
  .inputContainer {
    align-items: start;
    grid-template-columns: 1fr;
    width: 100%;
    grid-gap: 10px;
  }
}

.inputField {
  padding: 4px;
  border: solid #bcd8db 1px;
  border-radius: 3px;
} 

.error {
  border: 1px solid red;
}

.error:focus {
  border: 1px solid red;
}
    
.label {
  padding-right: 10px;
  color: #999;
  font-size: 14px;
}
.label:nth-child(odd) {
  justify-self: right;
}
@media (max-width: 599px) { 
  .label:nth-child(odd) {
    justify-self: left;
  }
}

input {
  cursor: auto;
  background-color: #fff;
  height: 30px; 
}

select {
  background: #fdf6ee;
  height: 40px; 
  color: #72605e;
}

.inputSelect {
  display: grid;
  grid-template-columns: auto 90px;
  grid-gap: 10px;
}

.errorMessage {
  grid-column-start: 2;
  font-size: 12px;
  color: red;
}
@media (max-width: 599px) { 
  .errorMessage {
    grid-column-start: 1;
  }
}

</style>

<form name="paymentForm" id="paymentForm" novalidate>
<div class="formContainer" >
  <div class="inputContainer">
    <label class="label" for="account">Account</label>
    <select class="inputField" name="account">
      <option value="account 1">Account name 1</option>
      <option value="account 2">Account name 2</option>
    </select>
  </div>
  <div class="inputContainer payment">
    <label class="label" for="payment">Saved payments</label>
    <select class="inputField" name="payment" id="payment" required>
      <option value="" disabled selected>Select a saved payment</option>
      <option value="payment 1">Payment name 1</option>
      <option value="payment 2">Payment name 2</option>
      <option value="payment 3">Payment name 3</option>
    </select>
  </div>
  <div class="inputContainer amount">
    <label class="label" for="amount">Amount</label>
    <div class="inputSelect">
      <input class="inputField" type="text" name="amount" id="amount" required pattern="[0-9]+" />
      <select class="inputField" name="currency" required>
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
      </select>
    </div>
  </div>
  <div class="inputContainer">
    <label class="label" for="description">Description</label>
    <input class="inputField" type="text" name="description" />
  </div>
</div>
  <div class="actionButtons">
    <button class="secondaryButton" type="button" id="saveButton">Save</button>
    <button class="primaryButton" type="submit">Pay</button>
 </div>
</form>
`

class PaymentForm extends HTMLElement {
  constructor() {
    super()
    this.root = this.attachShadow({ mode: 'open' })
    const clone = template.content.cloneNode(true)
    this.root.append(clone)

    const payment = this.root.querySelector('#payment')
    const amount = this.root.querySelector('#amount')
    amount.addEventListener('blur', (e) => this.validate(e.target))

    const saveButtons = this.root.querySelector('#saveButton')
    saveButtons.addEventListener('click', (e) => {
      e.preventDefault()
      this.handleSave(form)
    })

    const form = this.root.getElementById('paymentForm')
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      const amountError = this.validate(amount)
      const paymentError = this.validate(payment)

      if (!amountError && !paymentError) {
        this.handleSubmit(form)
      }
      return false
    })
  }

  validate(field) {
    const errorMsg = this.root.querySelector(`.${field.id}`)
    const existingErrorMsg = this.root.querySelector(
      `.errorMessage.${field.id}`
    )
    const regex = new RegExp(field.pattern, 'i')

    if (field.value == '' && field.required) {
      field.classList.add('error')
      existingErrorMsg && existingErrorMsg.remove()
      errorMsg.insertAdjacentHTML(
        'beforeend',
        `<span class="errorMessage ${field.id}">It is required</span>`
      )
      return true
    } else if (!!field.pattern && !regex.test(field.value)) {
      field.classList.add('error')
      existingErrorMsg && existingErrorMsg.remove()
      errorMsg.insertAdjacentHTML(
        'beforeend',
        `<span class="errorMessage ${field.id}">Account accepts only numbers</span>`
      )
      return true
    } else if (existingErrorMsg) {
      field.classList.remove('error')
      existingErrorMsg.remove()
      return false
    } else {
      return false
    }
  }

  handleSubmit(form) {
    const data = new FormData(form)
    // Send data some where
    alert('Form submit successful')
    form.reset()
  }

  handleSave(form) {
    const data = new FormData(form)
    // Save data some where
    alert('Form save successful')
    form.reset()
  }
}

customElements.define('payment-form', PaymentForm)
