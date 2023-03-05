class GameObject{
    name = ""
    components = []
    started = false

    constructor(name){
        this.name = name
        this.addComponent(new Transform());
    }

    get transform(){
        return this.components[0]
    }

    addComponent(component){
        this.components.push(component);
        component.parent = this
        return this
    }

    static getObjectByName(name){
        return SceneManager.getActiveScene().gameObjects.find(gameObject=>gameObject.name == name)
    }

    static find(name){
        return GameObject.getObjectByName(name)
    }

    getComponent(name){
        return this.components.find(c=>c.name == name)
    }
}

window.GameObject = GameObject