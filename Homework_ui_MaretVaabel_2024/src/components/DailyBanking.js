const template = document.createElement('template')
template.innerHTML = `
<style>
:host {
  display: grid;
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

.buttonsContainer {
  display: grid;
  grid-template-columns: max-content max-content;
}
.navButton {
  font-size: 15px;
  background:#fdf6ee;
}

.navButton:hover,
.navButton:focus {
    background: #fff;
}

.activeNav {
  background: #fff;
}

.container {
  background: #fff;
  width: 100%;
  margin-bottom: 20px;
}

.infoContainer {
  background:#fdf6ee;
  display: flex;
  padding: 10px;
  margin: 20px;
}
@media (max-width: 599px) {
  .infoContainer{
     display: grid;
  }
}

.textContainer{
  display: grid;
  align-items: center;
}

h4 {
  padding: 20px 0 0 10px;
  margin: 0;
}
p, a {
  padding: 0 10px;
  margin: 0;
  font-size: 14px;
  font-weight: 300;
}
.ballContainer {
  display: grid; 
  padding: 20px;
  justify-items: center;
}
.ball {
  align-self: end;
  display: grid;
  justify-items: center;
  align-items:center;
  background: #f9ce22;
  border-radius: 50%;
  height: 200px;
  width: 200px;
}
.triangle {
  width: 0; 
  height: 0; 
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  background: transparent !important;
  border-top: 15px solid  #f9ce22;
}

.buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media (max-width: 599px) {
  .buttons {
    display: grid;
    padding: 10px;
   
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
  .primaryButton {
    width: 100%;
  }
}
.readMore {
  color: #257886;
  appearance: none;
  text-decoration: none;
}

.readMore:hover,
.readMore:active,
.readMore:focus {
  border: 1px solid #257886;
}
.readMore::before {
  display: inline-block;		
  width: 0; 		
  height: 0; 	
  border-top: solid transparent;
  border-bottom: solid transparent;
  border-left: solid #257886;
  border-width:	5px;
  content:' ';
  margin-right:	5px;
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

<div class="buttonsContainer">
    <button class="navButton activeNav" id="payment">Payment</button>
    <button class="navButton" id="calculator">Calculator</button>
</div>
<div class="container">
  <payment-form></payment-form>
</div>

<div class="container">
  <div class="infoContainer">
    <div class="ballContainer">
      <div class="ball">Hollo world!</div>
      <div class="triangle"></div>
    </div>
  
    <div class="textContainer">
      <h4>Welcome to Swedbank</h4>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <div class="buttons">
        <a class="readMore" href="" alt="read more">Read more</a>
        <button class="primaryButton">GO</button>
      </div>
    </div>
  </div>
</div>
`

class DailyBanking extends HTMLElement {
  constructor() {
    super()
    this.root = this.attachShadow({ mode: 'open' })
    const clone = template.content.cloneNode(true)
    this.root.append(clone)

    const navButtons = this.root.querySelectorAll('.navButton')
    const container = this.root.querySelector('.container')

    navButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const oldActive = this.root.querySelector('.activeNav')
        oldActive.classList.remove('activeNav')
        const oldForm = this.root.querySelector(`${oldActive.id}-form`)
        oldForm.remove()
        btn.classList.toggle('activeNav')
        container.insertAdjacentHTML(
          'beforeend',
          `<${btn.id}-form></${btn.id}-form>`
        )
      })
    })
  }
}
customElements.define('daily-banking', DailyBanking)
