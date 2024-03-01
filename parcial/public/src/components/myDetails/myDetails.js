class myComponent extends HTMLElement {

    constructor () {
        super()
        this.attachShadow({mode: 'open'})
        
    }
    
    static get observedAttributes () {
        return ['materials', 'sizesAvailable', 'brand','origin']
    }


    connectedCallback() {
    render () 
    this.shadowRoot.innerHTML= `
    <section>
   <h3>Materials:</h3>
    <h4>${this.materials}</h4>
    <p>Sizes available:</p>
    <p>${this.sizesAvailable}</p>
    <p>Brand</p>
    <p>${this.brand}</p>
    <p>Origin:</p>
    <p>${this.origin}</p>
    
  
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
