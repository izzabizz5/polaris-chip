import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.card = "";
    this.title = "";
    this.blurb = "";
    this.picture = "#";
    this.link = "#";
    this.button="";
    
  }

  static get styles() {
    return css`
      :host {
        display: block;
        border: 8px outset #a68a64;
        margin: 64px;
        padding: 16px;
        max-width: 400px;
        width: auto;
        border-radius: 6px;
        background-color: #a4ac86;
        text-decoration-style:none;
      }
    h1 {
      font-family: verdana;
      text-align: center;
      color: #132a13;
    }
    p {
      padding: 8px;
      background-color: #a68a64;
      color: #132a13;
      font-family: verdana;
      text-align: center;
      font-family: verdana;
    }

    img {
      height: 250px;
      max-width: 370px;
      width: 100%;
      margin: auto;
      border: 6px outset #a68a64;
      border-radius: 6px;
    }

    .button{
      text-align: center;
      padding: 6px;
      margin: 6px 0px 0px 0px;
    }

    #btn {
      background-color: #a68a64;
      color: #132a13;
      padding: 8px 64px;
      border-color: #a4ac86;
      border-radius: 6px;
      border-width: 6px;
      font-family: verdana;
    }

    #btn:hover {
      color: #132a13;
      background-color: #a4ac86;
      border-color: #a68a64;
    }
    @media (min-width: 500px) and (max-width: 800px) {
      button {
        display: inline-block;
      }
    }
    @media (max-width: 500px) {
      div {
        max-width: 400px;
        width: auto;
      }
      img {
        height: 75%;
        width: 75%;
      }
      p, #btn {
        font-size: 16px;
      }
    }
    `;
  }

  render() {
    return html`
      <div>
        <h1>${this.title}</h1>
        <p>${this.blurb}</p>
        <img src="${this.picture}" alt="${this.title}">
        <div class="button">
          <a href="${this.link}">${this.text} 
            <button id="btn">${this.button}</button>
          </a> 
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      card: { type: String },
      title: { type: String },
      blurb: { type: String },
      picture: { type: String},
      link: { type: String},  
      button: { type: String}    
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
