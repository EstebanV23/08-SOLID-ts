class Square {
  side: number
  constructor(side:number) {
    this.side = side;
  }

  setSide(side) {
    this.side = side;
  }

  getArea() {
    return this.side * this.side;
  }
}

class Rectangle {
  height: number
  width: number
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

function increaseRectangleWidth(rectangle) {
  rectangle.setWidth(rectangle.width + 1);
}

const rectangle = new Rectangle(5, 10);
const square = new Square(5);

increaseRectangleWidth(rectangle);
console.log(rectangle.getArea()); // Output: 60

square.setSide(square.side + 1);
console.log(square.getArea()); // Output: 36
