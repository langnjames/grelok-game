/**
 * Game object class. Game Objects are containters for components
 * Game objects are not abstract and can be invoked and created freely
 */
class GameObject {
    /** Game object name */
    name = ""
    /** List of components inside of the game object */
    components = []
    /** Value that denotes the starting of the game object */
    started = false
    /** Holds value for whether or not the value will be destroyed */
    markedForDestroy = false
    /** Holds value for perserving the game object when scene is changed */
    markedDoDestroyOnLoad = false

    /**
     * Constructor for the creating a new component.
     * Assigns name and add transform component to game object
     * @param {String} name name of the new game object
     */
    constructor(name) {
        this.name = name
        this.addComponent(new Transform());
    }

    /** Gets the transform for this particular game object */
    get transform() {
        return this.components[0]
    }
    /** Sets the transform for this particular game object */
    set transform(t) {
        if (!t instanceof Transform) {
            throw "Tried to set transform to a non-transform reference"
        }
        this.components[0] = t;
    }

    /**
     * Adds a component to the game and assigns the game object as its parent
     * @param {Component} component component that will be added to the game object
     * @returns the game object
     */
    addComponent(component) {
        this.components.push(component);
        component.parent = this
        return this
    }
    /**
     * Search game objects within the scene to find the object with specified name
     * @param {String} name name that is being searched for
     * @returns first game object with that name
     */
    static getObjectByName(name) {
        return SceneManager.getActiveScene().gameObjects.find(gameObject => gameObject.name == name)
    }

    /**
     * Search game objects within the scene to find the objects with specified name
     * @param {String} name name that is being searched for
     * @returns all game objects with the specified name, otherwise empty
     */
    static getObjectsByName(name) {
        return SceneManager.getActiveScene().gameObjects.filter(gameObject => gameObject.name == name)
    }
    /**
     * Searches for a game object by name
     * @param {String} name name that is being searched for
     * @returns first game object with that name
     */
    static find(name) {
        return GameObject.getObjectByName(name)
    }

    /**
     * Finds the first component with the specified name
     * @param {String} name name of the component
     * @returns the game object that is parent to the component attempted to be found
     */
    getComponent(name) {
        return this.components.find(c => c.name == name)
    }

    /**
     * Sets the flag on the game object to be destroyed
     * game object is destroyed in engine on next pass
     */
    destroy(){
        this.markedForDestroy = true
    }

    /**
     * Sets the flag on the game object to be persistent through the next scene
     * Makes sure that game object is not destroyed on the next pass
     */
    doNotDestroyOnLoad(){
        this.markedDoDestroyOnLoad = true

    }
    

    /**
     * Adds a new game object to the scene
     * @param {GameObject} gameObject the game object being used
     */
    static instantiate(gameObject){
        SceneManager.getActiveScene().gameObjects.push(gameObject)
        if(gameObject.start && !gameObject.started){
            gameObject.started = true
            gameObject.start()
        }
    }
}

/* Adds GameObject to the global namespace */
window.GameObject = GameObject