import { LitElement, html, css } from 'lit';

class TaskList extends LitElement{

    static properties ={

        
    };
    static style = css`
    //aquí van los estilos
    `;

    constructor(){
        super();
        

    }

    render() {
         return html`
         <p class="holi">Task Pending</p>
                    
        
        
     `
    }









}
customElements.define('pending-task', TaskList); 