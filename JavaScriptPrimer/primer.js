var messageFunction = function (name, weather) {
    var message = "Hello, Adam ";
    if (weather == "sunny") {
        var message_1 = "It is a nice day";
        console.log(message_1);
    }
    else {
        var message_2 = "It is " + weather + " today";
        console.log(message_2);
    }
    console.log(message);
};
messageFunction("Adam", "raining");
