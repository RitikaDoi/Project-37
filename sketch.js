var canvas;

var gameState = 0;
var contestantCount;
var database
var quiz; 
var question; 
var contestant;
var allContestants;

var database;

var x = 850;
var y = 400;

function setup()
{
  
  canvas = createCanvas(x, y);

  database = firebase.database();

  quiz = new Quiz();
  quiz.getState()
  quiz.start();

}


function draw()
{
  
  background("pink");

  if(contestantCount === 4)
  {

    quiz.update(1);

  }

  if(gameState === 1)
  {

    clear();
    quiz.play();
    //question.hide();


  }

}
