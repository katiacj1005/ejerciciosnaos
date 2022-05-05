//librerias de terceros
import { LitElement, html, css } from 'lit';
import "./ejemplo-1";
import "./welcome-2";

class ClaseMyApp extends LitElement {

  static get styles() {
    return [
      css`
      
      //aquí van los estilos
      `
    ]



  }



  render() {

    

    return html`

    <ejemplo-1></ejemplo-1>
    <welcome-2 names="xxc"  ></welcome-2>

    `;

  }


}

customElements.define('my-app', ClaseMyApp);