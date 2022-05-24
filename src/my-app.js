//librerias de terceros
import { LitElement, html, css } from 'lit';
import "./ejemplo-1";
import "./event-1";
import "./pending-tasks";

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

    <ejemplo-1 @evento-isabel=${this.evento}  > </ejemplo-1>
    <event-1></event-1>
    <pending-task></pending-task>
    `;

  }

  evento(e) {
    console.log(e.detail);


  }


}

customElements.define('my-app', ClaseMyApp);