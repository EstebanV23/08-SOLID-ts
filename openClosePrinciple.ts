interface Figura {
  area(): number
}

class Cuadrado implements Figura{
  width: number
  heigth: number
  area () {
    return this.width * this.heigth
  }
}

class Triangulo implements Figura{
  width: number
  heigth: number
  area () {
    return this.width * this.heigth / 2
  }
}

class AreaCalculator {
  computeArea(shapes: Figura[]) {
    let area:number = 0
    for (let shape of shapes) {
      area += shape.area()
    }
    return area
  }
}