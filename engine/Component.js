/**
 * Component Class
 * Components are the final containter inside of scenes and game objects
 * this means that components hold majority of functional code
 * We should use this class abstractly by extending the class each time the class is used
 */
class Component {
    /** Name of the component   */  
    name = ""
    /**
     * The parent will be the Game Object that holds the particular component instantiated
     * As long as components are added using the addComponent() function, it will work as intended
     */
    parent
    /**
     * This value is used by the engine. It makes sure to start all unstarted components
     */
    started = false

    /**
     * This is an array that holds components inside, and those components listen for events
     * these events are from the component using the functions below
     */
    listeners = []

    /**
     * Add a component that acts as a listener to this component
     * the component in the parameter should use a function called handleUpdate(component, eventName)
     * @param {Component} listener 
     */
    addListener(listener){
        this.listeners.push(listener);
    }

    /**
     * This calls handleUpdate on all listeners
     * If a listener has been created, then it will be given a reference
     * to the listener, add the eventName given and then call handleUpdate
     * for components that have the handleUpdate method in their body
     * @param {String} eventName 
     */
    updateListeners(eventName){
        for(let listener of this.listeners){
            if(listener.handleUpdate){
                listener.handleUpdate(this, eventName)
            }
        }
    }

    /**
     * In Unity, transform is read-only and this retrieves the transform component
     * on the parent game object
     * ()
     */
    get transform() {
        return this.parent.components[0]
    }
}

/** This adds component to the global namespace to be called in different areas */
window.Component = Component;