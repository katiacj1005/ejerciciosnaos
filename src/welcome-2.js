import { LitElement, html, css} from 'lit';


class claseWelcome extends LitElement { 
    /* Las propiedades reactivas son propiedades que pueden desencadenar el ciclo de actualización reactiva cuando se modifican, volver a representar el componente y, 
    opcionalmente, leerse o escribirse en los atributos. */
    static properties = {
        names : {type: 'string',}, 

    };
     constructor(){
         super();
         this.names = "starting";
     }
     render() {
         return html `
         <h1> Holiii, ${this.names}</h1>`;
     }
}
customElements.define('welcome-2', claseWelcome);