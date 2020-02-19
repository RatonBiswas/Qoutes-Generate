var arrayOfQoutes = [

    {
        "Quote": "Only I can change my life. No one can do it for me.",
        "Author": "Carol Burnett"
    },

    {
        "Quote": "The secret of getting ahead is getting started.",
        "Author": "Mark Twain"
    },
    {
        "Quote": "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
        "Author": "Confucius"
    },
    {
        "Quote": "Knowing is not enough; we must apply. Willing is not enough; we must do.",
        "Author": "Johann Wolfgang von Goethe"
    },
    {
        "Quote": "Life is 10% what happens to you and 90% how you react to it.",
        "Author": "Charles R. Swindoll"
    },
    {
        "Quote": "I let people see the cracks in my life. We can't be phony. We've got to keep it real.",
        "Author": "Charles R. Swindollt"
    },
    {
        "Quote": "I went to the woods because I wished to live deliberately, to front only the essential facts of life, and see if I could not learn what it had to teach, and not, when I came to die, discover that I had not lived.",
        "Author": "Henry David Thoreau"
    },
    {
        "Quote": "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
        "Author": "Buddha"
    },
    {
        "Quote": "Life imitates art far more than art imitates Life.",
        "Author": "Oscar Wilde"
    },
    {
        "Quote": "Sometimes life hits you in the head with a brick. Don't lose faith.",
        "Author": "Steve Jobs"
    },
    {
        "Quote": "You have enemies? Good. That means you've stood up for something, sometime in your life.",
        "Author": "Winston Churchill"
    },
    {
        "Quote": "Open your eyes, look within. Are you satisfied with the life you're living?",
        "Author": "Bob Marley"
    },
    {
        "Quote": "Good friends, good books and a sleepy conscience: this is the ideal life.",
        "Author": "Mark Twain"
    },
    {
        "Quote": "The quality, not the longevity, of one's life is what is important.",
        "Author": "Martin Luther King, Jr."
    }
]

function randomSelector(arrayLength){
    return Math.floor(Math.random()*arrayLength);
}

function generateQuote(){
    var randomNumber = randomSelector(arrayOfQoutes.length);
    document.getElementById("qouteOutput").innerHTML='"' + arrayOfQoutes[randomNumber].Quote + '"';
    document.getElementById("authorOutput").innerHTML="-" + arrayOfQoutes[randomNumber].Author+"."; 
}

