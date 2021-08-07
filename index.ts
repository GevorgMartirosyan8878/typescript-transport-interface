interface Transport {
    engine: string;
    enginePower: number;
    wheels: number;
}

class Car implements Transport {
    engine: string;
    enginePower: number;
    wheels: number;

    constructor(engine: string, enginePower: number, wheels: number) {
        this.engine = engine;
        this.enginePower = enginePower;
        this.wheels = wheels
    }
}

class Bicycle implements Transport {
    engine: string;
    enginePower: number;
    wheels: number;

    constructor(engine: string, enginePower: number, wheels: number) {
        this.engine = engine;
        this.enginePower = enginePower;
        this.wheels = wheels
    }
}


let bmw = new Car('hybrid', 132, 4);

let bicycle = new Bicycle('manual', 0, 2)

// car
console.log(`Engine: ${bmw.engine}`)
console.log(`Engine power: ${bmw.enginePower}`)
console.log(`Wheels: ${bmw.wheels}`)

//bicycle
console.log(`Engine: ${bicycle.engine}`)
console.log(`Engine power: ${bicycle.enginePower}`)
console.log(`Wheels: ${bicycle.wheels}`)