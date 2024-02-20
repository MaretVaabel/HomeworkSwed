const template = document.createElement('template')
template.innerHTML = `
   <style>
      :host{
        display: grid; 
        grid-gap: 20px;
      }
      .root {
        background: #fff;
        padding: 10px 20px;
        overflow: scroll; 
        display: grid;
      }
      p {
        font-size: 16px;
        padding: 5px 0;
        font-weight: 600;
        letter-spacing: 0.5px;
      }

      table {
        width: 100%
      }

      thead tr {
        background: #dbf8ed;
        border: none
      }
    th, td {
      font-size: 12px;
      padding: 10px;
      text-align: right;
      font-weight: 300;
    }
     th:first-child, td:first-child {
      text-align: left;
    }

    td {
      border-bottom: 1 px solid #fff1cd;
      
     }
    td span {
      margin-left: 5px;
    }

    tfoot td {
      font-weight: bold;
    }

   tfoot td:last-child  {
      font-size: 20px;
      font-weight: 300;
    }
    tfoot span {
      font-size: 12px;
    }
    .container {
      background: #fff;
      padding: 10px 20px;
      display: flex;
    }
    @media (max-width: 599px) { 
      .container {
        display: grid;
      }
    }
   .colorContainer{
     display: grid;
     margin: 5px;
     background: #fdf6ee;
     padding-bottom: 20px;
    }

    h4 {
      padding: 15px 10px;
      margin: 0;
      color: #fff;
      border-top: none !important;
    }
    .triangle {
      margin-left: 20px;
      width: 0; 
      height: 0; 
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      background: transparent !important;
    }
    
   .blue {
      background: #5b8ad6;
      border-top: 15px solid #5b8ad6;
    }
   .yellow {
      background: #f9ce22;
      border-top: 15px solid  #f9ce22;
    }
    .purple {
      background: #c5569a;
      border-top: 15px solid #c5569a;
    }
    p, a {
      padding: 5px 10px;
      margin: 0;
      font-size: 14px;
      font-weight: 300;
    }
    .bold {
      font-weight: bold;
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
    .list::before {
      display: inline-block;		
      width: 8px; 		
      height: 15px; 	
      border-radius: 0 100px 100px 0;
      background-color:  #c5569a;
      margin-right: 10px;
      content:' ';
    }

    </style>

    <div class="root">
      <p>Your Swedbank overview</p>
   
      <table>
   <thead>
    <tr>
        <th>Account</th>
        <th>Balance</th>
        <th>Credit</th>
        <th>Reserved</th>
        <th>Available</th>
    </tr>
     </thead>
      <tbody>
    <tr>
        <td><a href="">Siim Tamm</a><span>EE752200221057734534</span></td>
        <td>3 342 000.00</td>
        <td>20.00</td>
        <td>725.00</td>
        <td>900.56 <span>EUR</span></td>
   </tr>
   <tr>
        <td><a href="">Marju Lepik</a><span>EE752200221057734534</span></td>
        <td>50.90</td>
        <td>2 000.00</td>
        <td></td>
        <td>3 000.00 <span>EUR</span></td>
   </tr>
      <tr>
        <td><a href="">Liina Roosipõld</a><span>EE752200221057734534</span></td>
        <td>12 041.00</td>
        <td>20.00</td>
        <td></td>
        <td>1300.12 <span>EUR</span></td>
   </tr>
     </tbody>
  <tfoot>
     <tr>
        <td>Total:</td>
        <td>5456.56</td>
        <td>456.56</td>
        <td></td>
        <td>456.56<span>EUR</span></td>
   </tr>
  </tfoot>

</table>
</div>
<div class="container">
  <div class="colorContainer">
    <h4 class="blue">Open</h4>
     <span class="triangle blue"></span>
    <p class="bold">One of the core values of Swedbank</p>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
  </div>
  <div class="colorContainer">
    <h4 class="yellow">Caring</h4>
    <span class="triangle yellow"></span>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
    <a href="" class="readMore">Read more</a>
  </div>
  <div class="colorContainer">
    <h4 class="purple">Simple</h4>
    <span class="triangle purple"></span>
    <p class="list">One of the core values of Swedbank</p>
    <p class="list">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
  </div>
</div> 
   
`

class Home extends HTMLElement {
  constructor() {
    super()
    this.root = this.attachShadow({ mode: 'open' })
    const clone = template.content.cloneNode(true)
    this.root.append(clone)
  }
}

customElements.define('home-page', Home)
