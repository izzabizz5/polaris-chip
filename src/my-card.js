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
    this.picture = null;
    this.link = "#";
    this.button="";
    this.description = "";
    this.fancy = false;
    
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
        border: 8px outset #a68a64;
        margin: 64px;
        padding: 16px;
        max-width: 400px;
        width: auto;
        border-radius: 6px;
        background-color: #a4ac86;
        text-decoration-style:none;
      }
      :host([fancy]) {
      background-color: pink;
      border: 2px solid fuchsia;
      box-shadow: 10px 5px 5px red;
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
      max-width: 75%;
      max-height: 50%;
      width: 100%;
      margin: auto;
      border: 6px outset #a68a64;
      border-radius: 6px;
    }

    a {
      display: flex;
      justify-content: center;
    }
    
    button {
      text-align: center;
      padding: 6px;
      background-color: #a68a64;
      color: #132a13;
      border-color: #a4ac86;
      border-radius: 6px;
      border-width: 6px;
      font-family: verdana;
    }

    button:focus,
    button:hover {
      color: #132a13;
      background-color: #a4ac86;
      border-color: #a68a64;
    }
    details summary {
    text-align: left;
    font-size: 20px;
    padding: 8px 0;
    }

    details[open] summary {
    font-weight: bold;
    }

    details div {
    border: 6px outset #a68a64;
    border-radius: 6px;
    text-align: left;
    padding: 8px;
    padding-bottom: 2px;
    height: 70px;
    overflow: auto;
    }
    `;
  }

  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
      <div>
        <h1>${this.title}</h1>
        <p>${this.blurb}</p>
        <details ?open="${this.fancy}" @toggle="${this.openChanged}">
        <summary>Description</summary>
        <div>
          <slot>${this.description}</slot>
        </div>
        </details>
        <img src="${this.picture}" alt="${this.title}">
        <a href="${this.link}">${this.text} 
            <button>${this.button}</button>
        </a> 
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
      button: { type: String},   
      description: { type:String },
      fancy: { type:Boolean, reflect : true }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
