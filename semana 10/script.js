//Modulo 1
class Operaciones{
    constructor(num1, num2){
        this._num1 = num1;
        this._num2 = num2
    }
}

//Modulo 2
class Suma extends Operaciones{
    constructor(num1, num2){
        super(num1, num2)
    }

    sumar(){
        total = num1 + num2;
        console.log(`La suma es ${total}`);
    }
}

//Modulo 3
class Resta extends Operaciones{
    constructor(num1, num2){
        super(num1, num2)
    }

    Resta(){
        total = num1 - num2;
        console.log(`La suma es ${total}`);
    }
}

let operacion1 = new Suma();
operacion1.sumar(new Operaciones(1, 7));

let operacion2 = new Suma();
operacion2.Resta(new Operaciones(9, 7))