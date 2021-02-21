class Quiz
{

    constructor()
    {



    }

    getState()
    {

        var GameStateRef = database.ref('gameState');
        GameStateRef.on("value", function(data)
        {

            gameState = data.val();

        })

    }

    update(state)
    {

        database.ref('/').update(

            {

                gameState: state

            }

        )

    }

    async start()
    {

        if(gameState === 0)
        {

            contestant = new Contestant();

            var ContestantCountRef = await database.ref('contestantCount').once("value");

            if(ContestantCountRef.exists())
            {

                contestantCount = ContestantCountRef.val();
                contestant.getCount();

            }

            question = new Question();
            question.display();

        }

    }

    play()
    {
        createCanvas(x, y + 500);

        background("orange");

        textSize(30);
        fill("yellow")
        text("Result of the Quiz", 300, 350);

        textSize(25);
        fill("magenta")
        text("Note: Contestants who answered correctly are highlighted in Green colour.", 5, 390);

        Contestant.getContestantInfo();

        if(allContestants !== undefined)
        {

            var displayPositions = 400;

            for(var cnt in allContestants)
            {

                var correctAnswer = "2";

                if(correctAnswer === allContestants[cnt].answer)
                {

                    fill("green")

                }
                else
                {

                    fill("red")

                }

                displayPositions = displayPositions + 20;

                textSize(20);
                text(allContestants[cnt].name + " : " + allContestants[cnt].answer, 300, displayPositions);

            }

        }

    }

}
