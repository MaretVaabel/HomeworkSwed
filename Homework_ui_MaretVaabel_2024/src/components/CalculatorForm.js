const template = document.createElement('template')
template.innerHTML = `
<style>
 :host { } 

.wrapper {
  display: grid;
  grid-template-columns: 60% 40%;
  margin: 30px;  
  justify-items: center;
}

@media (max-width: 899px) { 
  .wrapper {
    grid-template-columns: 1fr;
  }
}
 
.formContainer {
  display: grid;
  grid-gap: 10px;
  padding-top: 40px;
  border-right: 1px solid  #fff1cd;
  width: 100%;
  justify-items: center;
  margin: 0 20px 0 0;
}

@media (max-width: 899px) { 
  .formContainer {
    border-right: none;
    padding-bottom: 20px;
    margin: 0 20px;
    border-bottom: 1px solid  #fff1cd;
    justify-items: start;
  }
}

.inputContainer {
  display: grid;
  grid-template-columns: 30% 70%;
  width: 400px;
  align-items: center;
}  
@media (max-width: 599px) { 
  .inputContainer {
   width: 100%;
  }
}
.inputField {
  padding: 4px 6px;
  border: solid #bcd8db 1px;
  border-radius: 3px;
  width: max-content;
  background: #fdf6ee;
  height: 40px; 
  color: #72605e;
  
}

.label {
  padding-right: 10px;
  color: #999;
  font-size: 14px;
}
.label:nth-child(odd) {
  justify-self: right;
}

.minMax{
  grid-column-start: 2;
  display: flex;
  justify-content: space-between;
}
.rangeContainer{
  width: 100%;
  position: relative;
}
.rangeValue{
  position: absolute;
  top: -50%;
  color: #ff5f00;
}

.rangeValue span{
  font-size: 20px;
  display: block;
  transform: translate(-50%, 0);
  font-weight: 300;
  
}
.rangeValue span:before{
  content: "€";
  position: absolute;
  right: 0;
  margin-right: -20px;
  color:  #ff5f00;
  font-weight: 300;
}
.rangeField {
  -webkit-appearance: none;
  -moz-appearance: none;
  margin: 20px 0 12px;
  width: 100%;
}

.rangeField::-webkit-slider-runnable-track {
  width: 100%;
  height: 13px;
  cursor: pointer;
  animate: 0.2s;
  background: #f9ded3;
  border-radius: 25px;
}
.rangeField::-webkit-slider-thumb {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: #ff5f00;
  box-shadow: 0 0 4px 0 #ff5f00;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -10px;
}
.rangeField:focus::-webkit-slider-runnable-track {
  border: 1px solid  #ff5f00;
}

.rangeField::-moz-range-track {
  width: 100%;
  height: 13px;
  cursor: pointer;
  animate: 0.2s;
  background: #f9ded3;
  border-radius: 25px;
}

.rangeField::-moz-range-thumb {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: #ff5f00;
  box-shadow: 0 0 4px 0 #ff5f00;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -10px;
}
.rangeField:focus::-moz-range-track {
  border: 1px solid  #ff5f00;
}

.sumContainer{
  display: grid;
  padding: 10px;
  width: 100%;
  grid-gap: 10px;
  height: max-content;
}

.valueContainer{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0 10px 10px;
  border-bottom: 1px solid  #fff1cd;
}
.monthlyValue {
   color: #ff5f00;
   font-size: 24px;
   line-height: 1.5;
   font-weight: 300;
}

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

.primaryButton {
  justify-self: end;
  height: max-content; 
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

</style>
<form class="wrapper" name="calculatorForm" id="calculatorForm" novalidate>
<div class="formContainer" >
  <div class="inputContainer">
    <label class="label" for="loan">Loan size</label>
    <div class="rangeContainer">
      <div class="rangeValue" id="rangeV"></div>
      <input class="rangeField" id="range" type="range" min="32000" max="320000" value="32000" step="100">
    </div>
    <div class="minMax">
      <span class="label">32000 €</span>
      <span class="label">320000 €</span>
    </div>
  </div>
  <div class="inputContainer">
    <label class="label" for="period">Period</label>
    <select class="inputField" name="period" id="period">
      <option value="30">30 years</option>
      <option value="25">25 years</option>
      <option value="20">20 years</option>
      <option value="15">15 years</option>
      <option value="10">10 years</option>
      <option value="5">5 years</option>
    </select>
  </div>
  <div class="inputContainer">
    <label class="label" for="interest">Interest</label>
    <select class="inputField" name="interest" id="interest">
     <option value="6.5">6.5 %</option>
      <option value="4.5">4.5 %</option>
      <option value="3.6">3.6 %</option>
    </select>
  </div>

</div>
<div class="sumContainer">
  <div class="valueContainer">
    <label class="label" for="monthly">Monthly payment</label>
    <div>
      <span class="monthlyValue" id="monthlyValue"></span>
      <span class="label"s>EUR</span>
    </div>
  </div>
  <button class="primaryButton" type="submit">Apply</button>
</div>
</form>
`

class CalculatorForm extends HTMLElement {
  constructor() {
    super()
    this.root = this.attachShadow({ mode: 'open' })
    const clone = template.content.cloneNode(true)
    this.root.append(clone)

    const range = this.root.getElementById('range'),
      rangeV = this.root.getElementById('rangeV'),
      setValue = () => {
        const newValue = Number(
            ((range.value - range.min) * 100) / (range.max - range.min)
          ),
          newPosition = 10 - newValue * 0.2
        rangeV.innerHTML = `<span>${range.value}</span>`
        rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`
      }
    range.addEventListener('input', setValue)

    const form = this.root.getElementById('calculatorForm')
    form.addEventListener('input', () =>
      this.debounce(this.handleOnValueCalculate(), 300)
    )
    this.handleOnValueCalculate()

    form.addEventListener('submit', (event) => {
      event.preventDefault()
      const data = new FormData(form)
      // Send data some where

      alert('Form submit successful')
      form.reset()

      return false
    })
  }

  handleOnValueCalculate() {
    const range = this.root.querySelector('#range')
    const period = this.root.querySelector('#period')
    const interest = this.root.querySelector('#interest')
    const monthlyValue = this.root.querySelector('#monthlyValue')

    const r = interest.value / 12 / 100
    const n = period.value * 12
    const PV = range.value

    const value = (r * PV) / (1 - (1 + r) ** -n)

    monthlyValue.innerHTML = value.toFixed(2)
  }

  debounce(func, timeout = 300) {
    let timer
    return (...args) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        func.apply(this, args)
      }, timeout)
    }
  }
}
customElements.define('calculator-form', CalculatorForm)
