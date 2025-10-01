// Turn these variables into objects

const player1Name = "Richie McCaw";
const player1YearDrafted = 2001;
const player1Hometown = "Oamaru";
const player1Position = "Openside Flanker";

const player2Name = "Dan Carter";
const player2YearDrafted = 2003;
const player2Hometown = "Leeston";
const player2Position = "Fly-half";

const player3Name = "Kieran Read";
const player3YearDrafted = 2008;
const player3Hometown = "Papakura";
const player3Position = "Number 8";

const player4Name = "Jonah Lomu";
const player4YearDrafted = 1994;
const player4Hometown = "Auckland";
const player4Position = "Wing";

const player5Name = "Beauden Barrett";
const player5YearDrafted = 2012;
const player5Hometown = "New Plymouth";
const player5Position = "Fly-half / Fullback";

let car1Name = "Ferrari SF90 Stradale";
let car1HorsePower = 986;
let car1Price = 625000;
let car1Country = "Italy";
let car1YearReleased = 2020;

let car2Name = "Lamborghini Aventador SVJ";
let car2HorsePower = 759;
let car2Price = 517770;
let car2Country = "Italy";
let car2YearReleased = 2019;

let car3Name = "Bugatti Chiron Super Sport";
let car3HorsePower = 1578;
let car3Price = 3900000;
let car3Country = "France";
let car3YearReleased = 2021;

let car4Name = "McLaren 720S";
let car4HorsePower = 710;
let car4Price = 299000;
let car4Country = "United Kingdom";
let car4YearReleased = 2017;

let car5Name = "Porsche 911 GT2 RS";
let car5HorsePower = 690;
let car5Price = 293200;
let car5Country = "Germany";
let car5YearReleased = 2018;

// Turn the above variables into objects like this:
const player1 = {
    Name: "Richie McCaw",
    YearDrafted: 2001,
    Hometown: "Oamaru",
    Position: "Openside Flanker"
};
const player2 = {
    Name: "Dan Carter",
    YearDrafted: 2003,
    Hometown: "Leeston",
    Position: "Fly-half"
};
const player3 = {
    Name: "Kieran Read",
    YearDrafted: 2008,
    Hometown: "Papakura",
    Position: "Number 8"
};
const player4 = {
    Name: "Jonah Lomu",
    YearDrafted: 1994,
    Hometown: "Auckland",
    Position: "Wing"
};
const player5 = {
    Name: "Beauden Barrett",
    YearDrafted: 2012,
    Hometown: "New Plymouth",
    Position: "Fly-half / Fullback"
};
const car1 = {
    Name: "Ferrari SF90 Stradale",
    HorsePower: 986,
    Price: 625000,
    Country: "Italy",
    YearReleased: 2020
};
const car2 = {
    Name: "Lamborghini Aventador SVJ",
    HorsePower: 759,
    Price: 517770,
    Country: "Italy",
    YearReleased: 2019
};
const car3 = {
    Name: "Bugatti Chiron Super Sport",
    HorsePower: 1578,
    Price: 3900000,
    Country: "France",
    YearReleased: 2021
};
const car4 = {
    Name: "McLaren 720S",
    HorsePower: 710,
    Price: 299000,
    Country: "United Kingdom",
    YearReleased: 2017
};
const car5 = {
    Name: "Porsche 911 GT2 RS",
    HorsePower: 690,
    Price: 293200,
    Country: "Germany",
    YearReleased: 2018
};  

## Then log each object to the console to see their properties.

console.log(player1.Name);
console.log(player2.Position);
console.log(player3.YearDrafted);
console.log(player4.Hometown);
console.log(player5.Position);
console.log(car1.Name);
console.log(car2.HorsePower);
console.log(car3.Price);
console.log(car4.Country);
console.log(car5.YearReleased);

