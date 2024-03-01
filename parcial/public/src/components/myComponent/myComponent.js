
class myComponent extends HTMLElement {

    constructor () {
        super()
        this.attachShadow({mode: 'open'})
        
    }
    
    static get observedAttributes () {
        return ['title', 'description', 'value','inStock','image']
    }

    


    connectedCallback() {
    this.render () 
    this.shadowRoot.innerHTML= `
    <section>
    <img src=${this.image}>
    <h1>${this.title}</h1>
    <p>${this.description}</p>
    <p>${this.value}</p>
    <p>${this.inStock} || No Stock</p>
    </section>
    `
   
    }

    disconnectedCallback () {
    
    }

    attributeChangedCallback (Propname, oldValue, newValue) {
        this[Propname = newValue];
        
    }


}

customElements.define('app-component', myComponent)

export default myComponent
