// Ejemplo antes de aplicar ISP
interface Worker {
  work();
  eat();
  sleep();
}

class Employee implements Worker {
  work() {
    // Realizar trabajo de oficina
  }

  eat() {
    // Tomar un descanso para comer
  }

  sleep() {
    // Irse a casa y dormir
  }
}

class Robot implements Worker {
  work() {
    // Realizar trabajo mecánico
  }

  eat() {
    throw new Error("Los robots no necesitan comer");
  }

  sleep() {
    throw new Error("Los robots no necesitan dormir");
  }
}

// Ejemplo después de aplicar ISP
interface Workable {
  work();
}

interface Feedable {
  eat();
}

interface Sleepable {
  sleep();
}

class Employee implements Workable, Feedable, Sleepable {
  work() {
    // Realizar trabajo de oficina
  }

  eat() {
    // Tomar un descanso para comer
  }

  sleep() {
    // Irse a casa y dormir
  }
}

class Robot implements Workable {
  work() {
    // Realizar trabajo mecánico
  }
}