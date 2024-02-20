const template = document.createElement('template')
template.innerHTML = `
  <style>
    :host {
      display: grid;    
      background-color: #fff;
    }

    .topColor {
      height: 10px;
      background: linear-gradient(90deg, rgba(255,95,0,1) 52%, rgba(249,206,34,1) 100%);
    }

    .topHeader {
      display: grid;
      grid-template-columns: auto max-content;
      justify-content: space-between;
      align-items: center;
      margin: 5px 20px;
    }
    
    .logo {
      width: 117px;
      height: auto;
    }
  
    .navigation {
      display: grid;
      width: 100%;
      grid-template-columns: repeat(2, 1fr);
      justify-items: center;
      z-index: 4;
      position: relative;
    }
    @media (max-width: 599px) { 
      .navigation {
        display: none;
        grid-template-columns: 1fr;
      }
    }

    .menu {
      font-size: 18px;
    }  
    .open {
      display: grid;
    }

    .button {
      border: none;
      background-color: #fff;
      appearance: none;
      cursor: pointer;
      text-decoration: none;
      display: grid;
      align-items: center;
      justify-items: center;
      font-weight: 300;
      font-size: 15px;
      padding: 5px;
      width: 100%;
      border-top: 2px solid #fff1cd;
    }
    @media (max-width: 599px) { 
      .button {
        justify-items: start;
        padding: 10px 20px;
      }
    }
    

    .button:first-child {
      border-right: 2px solid #fff1cd;
      
      @media (max-width: 599px) { 
        border-right: none
      }
    }

    .button:hover,
    .button:focus {
      color:#ff5f00;
      border-top: 2px solid #ff5f00;
      background: #fff1cd;
    }
     
    .button:hover .img , .button:focus .img {
        filter: invert(55%) sepia(69%) saturate(6374%) hue-rotate(5deg) brightness(108%) contrast(101%);
    }

    
    @media (max-width: 599px) { 
      .img {
        display: none
      }
    }
  
    .active .img {
      filter: invert(55%) sepia(69%) saturate(6374%) hue-rotate(5deg) brightness(108%) contrast(101%);
    }

    .active {
      color:#ff5f00;
    }   

    .overlay {
      content: '';
      position: absolute;
      visibility: hidden;
      background: rgba(81, 43, 43, 0.6);
      left: 0;
      right: 0;
      top: 90px;
      bottom: 0;
      z-index: 1;
      height: 100%;
      
      @media (max-width: 599px) { 
          top: 123px;
      }
    }

    .burgerMenu {
      cursor: pointer;
      display: none;
      flex-direction: column;
      justify-content: space-between;
      height: 16px;
      width: 16px;
    }

    @media (max-width: 599px) {
      .burgerMenu {
        display: flex;
      }
    }
        
    .bar {
      height: 3px;
      width: 100%;
      background-color: black;
      transition: all 100ms ease-in-out;
    }

    .x:nth-of-type(1) {
      transition: all 100ms ease-in-out;
      transform: rotate(45deg);
      transform-origin: top left;
      width: 20px;
    }

    .x:nth-of-type(2) {
      transition: all 100ms ease-in-out;
      transform-origin: center;
      width: 0;
    }

    .x:nth-of-type(3) {
      transition: all 100ms ease-in-out;
      transform: rotate(-45deg);
      transform-origin: bottom left;
      width: 20px;
    }
  </style>
  <header>
    <div class="topColor"></div>
    <div class="topHeader">
      <img class="logo" src="../Assets/swedbank_logo.png" alt="swedbank_logo" />
      <a class="burgerMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </a>
    </div>
    <div class="navigation">
      <button class="button active" id="home">
        <img class="img" src="../Assets/home.svg" alt="home" />
        <span class="menu">Home</span>
      </button>
      <button class="button" id="banking">
        <img class="img" src="../Assets/wallet.svg" alt="wallet" />
        <span class="menu">Everyday banking</span>
      </button>
    </div>
    <div class="overlay"></div>
  </header>
    `

class HeaderComponent extends HTMLElement {
  constructor() {
    super()
    this.root = this.attachShadow({ mode: 'open' })
    const clone = template.content.cloneNode(true)
    this.root.append(clone)

    const buttons = this.root.querySelectorAll('button')
    const overlay = this.root.querySelector('.overlay')

    buttons.forEach((btn) => {
      btn.addEventListener('mouseover', function () {
        overlay.style.visibility = 'visible'
      })
      btn.addEventListener('mouseout', function () {
        overlay.style.visibility = 'hidden'
      })

      btn.addEventListener('click', () => {
        const id = btn.getAttribute('id')
        const action =
          this.action && typeof window[this.action] === 'function'
            ? window[this.action]
            : this.defaultActionForBigBangButton
        action(id)
        const oldActive = this.root.querySelector('.active')
        oldActive.classList.remove('active')
        btn.classList.toggle('active')
      })
    })

    const navToggle = this.root.querySelector('.burgerMenu')
    const bars = this.root.querySelectorAll('.bar')
    const navigation = this.root.querySelector('.navigation')

    navToggle.addEventListener('click', () => {
      bars.forEach((bar) => bar.classList.toggle('x'))
      navigation.classList.toggle('open')
    })
  }

  static get observedAttributes() {
    return ['action']
  }
  get action() {
    return this.getAttribute('action')
  }
  set action(value) {
    this.setAttribute('action', value)
  }
}

customElements.define('page-header', HeaderComponent)
