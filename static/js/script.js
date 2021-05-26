// challenge 1
function ageInDays () {
    const birthYear = prompt("Year u born.... My Friend?");
    const currentYear = prompt("Current Year?");
    const ageInDin = (currentYear - birthYear) * 365;
    let h1 = document.createElement("h1");
    let textAnswer = document.createTextNode("You are " + ageInDin + " Days old");
    h1.setAttribute('id', 'ageInDin');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);

}
function reset() {
    document.getElementById('ageInDin').remove();
}

// challenge 2
function generateCat() {
    let image = document.createElement('img');
    let div = document.getElementById('flex-cat-gen');
    image.src = "static/cat2.jpg";
    div.appendChild(image);
}

//challenge 3
function rpsGame(yourChoice) {
    console.log(yourChoice);
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt()); 
    console.log(botChoice);
    results = decideWinner(humanChoice,botChoice); 
    console.log(results);
    message= finalMsg(results);
    console.log(message)
    rpsFrontEnd(yourChoice.id, botChoice, message)
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissor'][number];
}

function decideWinner(yourChoice,computerChoice) {
    const rpsDatabase = {
        'rock':{'scissor':1, 'rock':0.5, 'paper':0},
        'paper':{'scissor':0, 'rock':1, 'paper':0.5},
        'scissor':{'scissor':0.5, 'rock':0, 'paper':1},
    };
    const yourScore = rpsDatabase[yourChoice][computerChoice];
    const computerScore = rpsDatabase[computerChoice][yourChoice];
    return [yourScore, computerScore];
}

function finalMsg([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {'message': 'You Lost', 'color':'red'}; 
    } else if (yourScore === 0.5) {
        return {'message': 'Tie', 'color':'yellow'};
    } else {
        return {'message': 'You Win', 'color':'green'};
    }
}

function rpsFrontEnd(humanImage, botImage, finalMsg) {
    const imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src,
    }

    // remove all images 
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    const humanDiv = document.createElement('div');
    const botDiv = document.createElement('div');
    const messageDiv = document.createElement('div');

    humanDiv.innerHTML="<img src='" + imagesDatabase[humanImage] + "' height=150 width=150 style='box-shadow: 0px 10px 50px blue'>"
    messageDiv.innerHTML="<h1 style='color: " + finalMsg['color'] + "; font-size:50px; padding:30px; '>" +finalMsg['message'] + "</h1>"
    botDiv.innerHTML="<img src='" + imagesDatabase[botImage] + "' height=150 width=150 style='box-shadow: 0px 10px 50px red'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}