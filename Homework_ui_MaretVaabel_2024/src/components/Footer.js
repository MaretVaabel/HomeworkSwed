const footerData = {
  contact: {
    tel: '6 310 310',
    email: 'info@swedbank.ee',
    company: 'SWEDBANK OÜ',
    address: 'Liivalaia 8, 15040 Tallinn',
    swift: 'SWIFT kood/BIC: HABAEE2X',
    regNum: 'Reg. number 10060701',
  },
  allLinks: [
    {
      title: 'Quicklinks',
      links: [
        { name: 'Calculators', href: '#' },
        { name: 'Prices', href: '#' },
        { name: 'Terms of service', href: '#' },
        { name: 'Privacy and security', href: '#' },
      ],
    },
    {
      title: 'Join Swedbank',
      links: [
        { name: 'Client programs', href: '#' },
        { name: 'Business customers', href: '#' },
        { name: 'Jobs', href: '#' },
        { name: 'Internships', href: '#' },
      ],
    },
    {
      title: 'Products',
      links: [
        { name: 'Everyday banking', href: '#' },
        { name: 'Loans', href: '#' },
        { name: 'Insurance', href: '#' },
        { name: 'Cards', href: '#' },
        { name: 'Stocks', href: '#' },
      ],
    },
  ],
  info: 'Olete finantsteenuseid pakkuvate ettevõtete (Swedbank AS, Swedbank Liising AS, Swedbank P&C Insurance AS, Swedbank Life Insurance SE ja Swedbank Investeerimisfondid AS) kodulehel. Enne mis tahes lepingu sõlmimist tutvuge vastava teenuse tingimustega ning vajaduse korral konsulteerige asjatundjaga. Swedbank AS ei osuta krediidinõustamisteenust krediidiandjate- ja vahendajate seaduse mõistes. Laenu võtmise otsuse langetab laenusaaja, kes hindab panga poolt esitatud teabe ja hoiatuste põhjal pakutava laenutoote ja lepingutingimuste sobivust oma isikliku laenuhuvi, -vajaduse ja finantsolukorraga ja ta vastutab lepingu sõlmimisega kaasnevate tagajärgede eest.',
}

const template = document.createElement('template')
template.innerHTML = `
<style>
 :host {
 }
.footer {
  border-top: 5px solid #ff5f00;
  background-color: #f9ded3; 
}

.footerContainer {
   display: grid;
   grid-template-columns: max-content auto;
   grid-gap: 20px;
   max-width: 1200px;
   margin: 0 auto;
   padding: 20px;
}
@media (max-width: 599px) {
  .footerContainer {
     grid-template-columns: 1fr;
  }
}

h4 {
  font-size: 20px;
  font-weight: 300;
  margin: 5px 0;
} 

.contacts {
  display: grid;
}

.phone {
  margin: 5px 0 10px;
  font-size: 36px;
  color: #ff5f00;
  font-weight: bold;
}

.email {
  color: #31a3ae;
  font-size: 13px;
  padding: 10px 0;
} 
.email:hover,
.email:active,
.email:focus {
  color: #257886;
}

.contactSpan {
  font-size: 13px;
  padding: 3px;
  color: #72605e;
}


.socialLinksContainer {
  display: flex;
  margin: 15px 0;
}

.socialLink {
  appearance: none;
  margin-right: 10px;
  border: 1px solid transparent;
}
.socialLink:hover,
.socialLink:active,
.socialLink:focus {
  border: 1px solid #257886;
}


.links {
  display: flex;
  width: 100%;
  justify-content: space-around;
}

@media (max-width: 599px) {
  .links {
    justify-content: start;
    flex-direction: column;
    border-bottom: 1px solid #d4b8a3;

  }
  .container {
    border-top: 1px solid #d4b8a3;
    padding: 5px 0;
    overflow: hidden;
    height: 30px
  }
  .icon {
    display: grid !important;
  }
  .title {
    display: flex;
    justify-content: space-between;
 }
}

.open {
  height: max-content;
}

.open .icon {
  transform: rotate(180deg);
}

.icon {
  display: none;
}

.list {
  margin: 0 10px;
  padding: 0;
  list-style: none;
}


.list .listItem::before {
  display: inline-block;		
  width: 0; 		
  height: 0; 	
  border-top: solid transparent;
  border-bottom: solid transparent;
  border-left: solid #72605e;	
  border-width:	5px;
  content:' ';
  margin-right:	5px;
}
.listItem {
  padding: 5px 0;
}
  
.listLink {
  font-size: 15px;
  padding: 3px;
  color: #72605e;
  text-decoration: none;
} 
.listLink:hover,
.listLink:active,
.listLink:focus {
  text-decoration: underline;
}

.info {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-size: 13px;
  text-align: center;
  color: #72605e;
}

</style>

<footer class="footer">
  <div class="footerContainer">
    <div>
      <div class="contacts"></div>
      <div class="socialLinksContainer">
        <a class="socialLink" href="https://www.facebook.com/SwedbankEestis" target="_blank">
          <img class="icon" alt="facebook" src="../Assets/social_media_icons/facebook.svg" />
        </a>
        <a class="socialLink" href="https://www.instagram.com/swedbankeestis/" target="_blank">
          <img class="icon" alt="instagram" src="../Assets/social_media_icons/instagram.svg"/>
        </a>
        <a class="socialLink" href="https://www.youtube.com/channel/UCtkFPufr4LOHpSmy399zQIw" target="_blank">
          <img class="icon" alt="youtube" src="../Assets/social_media_icons/youtube.svg" />
        </a>
        <a class="socialLink" href="https://twitter.com/SwedbankLatvia" target="_blank">
          <img class="icon" alt="twitter" src="../Assets/social_media_icons/twitter.svg" />
        </a>
        <a class="socialLink" href="#tab3" target="_blank">
          <img class="icon" alt="skype" src="../Assets/social_media_icons/skype.svg" />
        </a>
      </div>
    </div>
    <div class="links"></div>
  </div>
</footer>
`

class Footer extends HTMLElement {
  constructor() {
    super()
    this.root = this.attachShadow({ mode: 'open' })
    const clone = template.content.cloneNode(true)
    this.root.append(clone)
  }
  displayFooter() {
    const contactSection = this.root.querySelector('.contacts')
    const linkSection = this.root.querySelector('.links')
    const infoSection = this.root.querySelector('.footer')
    const { contact, allLinks, info } = footerData

    const displayContacts = `
              <h4>Contacts</h4>
              <p class="phone">${contact.tel}</p>
              <a class="email" href="mailto:${contact.email}" rel="noopener noreferrer" target="_blank">${contact.email}</a>
              <span class="contactSpan">${contact.company}</span>
              <span class="contactSpan">${contact.address}</span>
              <span class="contactSpan">${contact.swift}</span>
              <span class="contactSpan">${contact.regNum}</span>
            `

    const displayLinks = allLinks.map(({ title, links }) => {
      const list = links.map(
        ({ name, href }, i) =>
          `<li class="listItem" key=${i}><a class="listLink" href=${href} target="_blank">${name}</a></li>`
      )

      return `<div class="container">
                <div class="title">
                <h4>${title}</h4>
                <img class="icon" src="../Assets/arrow_down.svg" alt="arrow" />
                </div>
                <ul class="list">
                  ${list.join('')}
                </ul>
              </div>
              `
    })

    contactSection.innerHTML = displayContacts
    linkSection.innerHTML = displayLinks.join('')
    infoSection.insertAdjacentHTML('afterend', `<p class="info">${info}</p>`)
  }

  connectedCallback() {
    document.addEventListener('DOMContentLoaded', () => {
      this.displayFooter()

      const linkContainer = this.root.querySelectorAll('.links .container')
      linkContainer.forEach((btn) => {
        btn.addEventListener('click', () => {
          btn.classList.toggle('open')
        })
      })
    })
  }
}
customElements.define('page-footer', Footer)
