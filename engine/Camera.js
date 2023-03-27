class Camera extends Component{
    name = "Camera"

    fillStyle

    constructor(fillStyle = "white"){
        super()
        this.fillStyle = fillStyle
    }

    draw(ctx) { 
        ctx.fillStyle = this.fillStyle

        ctx.fillStyle(0, 0, ctx.canvas.width, ctx.canvas.height)
    }
}