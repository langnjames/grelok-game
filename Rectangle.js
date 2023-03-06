class Rectangle extends Component {
    name = "Rectangle"
    fillStyle = "white"

    draw(ctx){
        ctx.fillStyle = this.fillStyle

        //Draw the rectangle
        ctx.beginPath()
        ctx.rect(this.transform.x, this.transform.y, this.transform.sx, this.transform.sy)  
        ctx.fill()
    }
}

window.Rectangle = Rectangle