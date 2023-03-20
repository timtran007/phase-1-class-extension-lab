// Your code here

class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((previousValue, currentValue) => {
            return previousValue + currentValue
        })
    }
}

class Triangle extends Polygon{
    get isValid(){
        let a = this.sides[0]
        let b = this.sides[1]
        let c = this.sides[2]
        if(a + b > c && a + c > b && b + c > a){
            return true
        } else{
            return false
        }
    }
}

class Square extends Polygon{
    get area() {
        return this.sides[0] * this.sides[1]
    }

    get isValid(){
        if(this.sides[0] === this.sides[1] && this.sides[0] === this.sides[2] && this.sides[0] === this.sides[3]){
            return true
        } else{
            return false
        }
    }
}