import { LitElement,html, css } from 'lit';
import '@material/mwc-checkbox/mwc-checkbox.js';


class EventEjemplo1 extends LitElement{
static properties ={
    checked:{},

};
static style = css`
//aquì van los estilos
mwc-checkbox{
    color:purple;
}
         
`;

constructor(){
    super();
    this.checked = false;
    this.name = 'I am the checklist';

        }

render(){
    return html` 
    <p> ${this.name}</p>
    <mwc-checkbox   ?disabled=${!this.checked}> </mwc-checkbox>

    
     `
    }



    setChecked(event){
        this.checked = event.target.checked;
    }
}
customElements.define('event-1', EventEjemplo1);