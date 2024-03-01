class myButton extends HTMLElement {

    constructor () {
        super()
        this.attachShadow({mode: 'open'})
        
    }
    
    static get observedAttributes () {
        return ['title', 'description', 'value','inStock','image']
    }


    connectedCallback() {
    render () 
    this.shadowRoot.innerHTML
   
    }

    disconnectedCallback () {
    
    }

    attributeChangedCallback (Propname, oldValue, newValue) {
        console.log('Attribute ' + name + ' changed to ' + newValue)
    }


}

customElements.define('card-button', myButton)

export default myButton
