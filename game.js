var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;
var started = false;




    $(document).keypress(function () {

        if (!started) {

        $("#level-title").text("Level" +level);
        nextSequence();
        started = true;
        }
    })
    



function nextSequence() {

    userClickedPattern =[];

    var randomNumber = (Math.floor(Math.random() * 4));
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(50).fadeIn(50);

    playSound(randomChosenColour);


    level = level + 1;

    $("#level-title").text("Level " + level);


}

$(".btn").on("click", function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour)
    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
});

function playSound(name) {
    var audio = new Audio(("./sounds/" + name + ".mp3"));
    audio.play();

}




function animatePress(currentColour) {

    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);


}




function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("Success");

        if (gamePattern.length===userClickedPattern) {
            console.log("Success");
            
        }

        setTimeout(() => {
            nextSequence();
        }, 1000);

        
        
        
    }

    else{
        console.log("wrong");

        var wrongAudio= new Audio(("./sounds/wrong.mp3"));
    wrongAudio.play();


    $("body").addClass("game-over");
    setTimeout(() => {
        $("body").removeClass("game-over");
    }, 200);

    $("h1").text("Game Over, Press Any Key to Restart");

    startOver();


    }

}


function startOver(){
    gamePattern=[];
    level = 0;
    started = false;
}
































// switch (randomNumber) {
//     case 0:
//         var randomChosenColour = buttonColours[randomNumber];

//         break;

//     case 1:

//         break;
//     case 2:

//         break;
//     case 3:


//         break;
//     default:
//         break;
// }

// gamePattern.push(randomChosenColour);




