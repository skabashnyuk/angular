export class Name {
    constructor(private first: string, private second: string) { }
    get nameMessage() {
        return `Hello ${this.first} ${this.second}`;
    }
}
export class WeatherLocation {
    constructor(private weather: string, private city: string) {
        this.weather = weather;
        this.city = city;
    }

    get wetherMessage() {
        return `It is ${this.weather} in ${this.city}`;
    }
}
