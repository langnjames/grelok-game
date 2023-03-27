class Vector2 {
    x = 0
    y = 0

    static zero = new Vector2()
    static one = new Vector2(1,1)
    static right = new Vector2(1, 0)
    static left = new Vector2(-1, 0)
    static up = new Vector2(0,1)
    static down = new Vector2(0, -1)

    constructor(x = 0, y = 0){
        this.x = x
        this.y = y
    }
}

window.Vector2 = Vector2