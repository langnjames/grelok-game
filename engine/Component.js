/**
 * Component Class
 * Components are the final containter inside of scenes and game objects
 * this means that components hold majority of functional code
 * We should use this class abstractly by extending the class each time the class is used
 */
class Component {
    // Name of the component   
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
     * 
     */
    addListener(listener){
        this.listeners.push(listener);
    }

    updateListeners(eventName){
        for(let listener of this.listeners){
            if(listener.handleUpdate){
                listener.handleUpdate(this, eventName)
            }
        }
    }


    get transform() {
        return this.parent.components[0]
    }
}

window.Component = Component;