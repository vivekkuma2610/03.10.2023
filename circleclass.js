class Circle {
    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }
    getRadius() 
    {
        return this.radius;
    }
    setRadius(radius) 
    {
        this.radius = radius;
    }
    getColor() 
    {
        return this.color;
    }
    setColor(color)
    {
        this.color = color;
    }
    getArea()
    {
        return Math.PI * this.radius * this.radius;
    }
    getCircumference()
    {
        return 2 * Math.PI * this.radius;
    }
    toString()
    {
        return `Circle - Radius: ${this.radius}, Color: ${this.color}`;
    }
}

const circle1 = new Circle();
console.log(circle1.toString()); 
const circle2 = new Circle(2.5);
console.log(circle2.toString()); 
const circle3 = new Circle(3.0, "blue");
console.log(circle3.toString()); 
console.log("Area:", circle3.getArea()); 
console.log("Circumference:", circle3.getCircumference());