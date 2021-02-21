class Question
{

    constructor()
    {

        this.question1 = createElement('h4');
        
        this.button = createButton('Submit');
        
        this.input1 = createInput("Enter your name");
        this.input2 = createInput("Enter correct option no.");
        
        this.option1 = createElement('h4');
        this.option2 = createElement('h4');
        this.option3 = createElement('h4');
        this.option4 = createElement('h4');

    }

    display()
    {

        var title = createElement('h2');
        title.html("My Quiz Game");
        title.position(350, 0);

        this.question1.html("Question:- What starts and ends with the letter 'E' but has only one letter?");
        this.question1.position(150, 80);

        this.option1.html("1: Everyone");
        this.option1.position(150, 100);
        this.option2.html("2: Envelope");
        this.option2.position(150, 120);
        this.option3.html("3: Estimate");
        this.option3.position(150, 140);
        this.option4.html("4: Example");
        this.option4.position(150, 160);

        this.input1.position(150, 230);
        this.input2.position(500, 230);
        this.button.position(365, 300);

        this.button.mousePressed(() => 
        {
            
            this.input1.hide();
            this.input2.hide();
            this.button.hide();
      
            contestant.name = this.input1.value();
            contestant.answer = this.input2.value();
            contestantCount+=1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
          
        });

    }

}