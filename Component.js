class Component {
    name = ""
    parent
    started = false
    // get transform(){
    //     return this.parent.components[0]
    // }
    get transform() {
        return this.parent.components[0]
    }
}

window.Component = Component;