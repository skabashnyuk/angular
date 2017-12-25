class MyClass {
    constructor(name, weather){
        this.name = name;
        this._weather = weather;
    }

    set weather(value){
        this._weather = value;
    }
    get weather(){
        return `Today is ${this._weather}`
    }

    printMessage (){
        console.log(`Hello ${this.name} .`);
        console.log(this.weather);
    }
}
let myData = new  MyClass("Adam", "sunny");
myData.printMessage();