class Text extends Component {
    name = "Text"

    fillStyle

    string 

    font

    constructor(string, fillStyle="white", font="20px Arial"){
        super()
        this.fillStyle = fillStyle
        this.string = string
        this.font = font
    }

    draw(ctx){
        ctx.fillStyle = this.fillStyle
        ctx.font = this.font
        ctx.fillText(this.string, this.transform.x, this.transform.y)
    }
}

window.Text = Text