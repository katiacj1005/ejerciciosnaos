//librerias de terceros
import { LitElement, html, css } from 'lit'
import '@material/mwc-textfield/mwc-textfield';
import '@material/mwc-button/mwc-button';

class ClaseEjemplo1 extends LitElement {

  static get styles() {
    return [
      css`//Son los estilos

#password {
    --mdc-theme-primary: pink;
  }
  #email{
    --mdc-theme-primary: aqua;
  }
  #button{
    --mdc-theme-primary: pink;
  }
      `
    ]
  }
  static properties = {
    email: {type: String},
    password: {type: String},
  };

  constructor() {
    super();
    
  }

  //Esto se va a pintar en pantalla y renderizar(si es el caso)
  render() {
    return html`
    <h1 class="estilo">hi login whit lit</h1>
    <mwc-textfield id="email"  label="email" @input=${this.eventEmail} ></mwc-textfield>
    <mwc-textfield  id="password" label="password" @input=${this.eventPassword} ></mwc-textfield>
    <mwc-button id="button" @click=${this.eventButton} outlined label="Login"></mwc-button>
    `
  }

  eventEmail(e){ 
    this.email = e.currentTarget.value;
    // console.log(e.currentTarget.value);
  }
  eventPassword(e){
  this.password = e.currentTarget.value;
  // console.log(e.currentTarget.value);
  }
  eventButton(e){
    //console.log(e);
    console.log(this.email, this.password);


    //data(this.password, thi.email)
  }
  




  
}
customElements.define('ejemplo-1', ClaseEjemplo1);