import { Name, WeatherLocation } from "./modules/NameAndWeather";
import {Name as OtherName} from "./modules/DuplocateName"

let name = new Name("Adam", "Freeman");
let loc = new WeatherLocation("raining","London");
let other = new OtherName()

console.log(name.nameMessage);
console.log(loc.wetherMessage);
console.log(other.message);