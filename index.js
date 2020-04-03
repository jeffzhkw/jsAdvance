const numInput = document.getElementById("half-input")
const numButton = document.getElementById("half-button")

const forInput = document.getElementById("fortune-input")
const forButton = document.getElementById("fortune-button")




function halfNumber(num) {
    alert(num / 2)
    console.log("Half of " + num + " is" + num / 2)

}

function fortune(name) {
    var quotes = ["The race is not always to the swift, but to those who keep on running.",
        "If you never expect anything you can never be disappointed.",
        "A short stranger will soon enter your life with blessings to share.",
        "The man on the top of the mountain did not fall there.",
        "You will discover your hidden talents.",
        "You have a quiet and unobtrusive nature.",
        "Some men dream of fortunes, others dream of cookies.",
        "Ask yourself if what you are doing today is getting you closer to where you want to be tomorrow.",
        "Fortune smiles upon you today."
    ]; //quotes selected from http://www.fortunecookiemessage.com/

    var result = name + ", <br>" + quotes[Math.floor(Math.random() * quotes.length)]

    document.getElementById("fortune-output").innerHTML = result;
}

function restyle() {
    var colorRGB = [Math.floor(Math.random() * 255),//R
        Math.floor(Math.random() * 255),//G
        Math.floor(Math.random() * 255),//B
    ]

    
}