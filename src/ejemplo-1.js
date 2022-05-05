//librerias de terceros
import { LitElement, html, css } from 'lit';

import { juanito } from "./funciones.js";


class ClaseEjemplo1 extends LitElement {

  static get styles() {
    return [
      css`
      
      .estilo{
        color: red;


      }
      
      
      `
    ]



  }



  render() {

    

    return html`

    <h1 class="estilo">hola</h1>
    <input/>
    <button  @click=${this.omar} >presionar</button>

    `;

  }

  omar() {

    console.log(juanito("pedro"));

  }


}
customElements.define('ejemplo-1', ClaseEjemplo1);