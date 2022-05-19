//librerias de terceros
import { LitElement, html, css } from 'lit';
import "./ejemplo-1";

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

    <ejemplo-1> </ejemplo-1>
    
    `;

  }


}

customElements.define('my-app', ClaseMyApp);