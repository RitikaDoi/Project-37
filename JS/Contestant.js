class Contestant 
{
  
  constructor()
  {

    this.name = null;
    this.index = null;
    this.answer = 0;

  }

  getCount(){
    var ContestantCountRef = database.ref('contestantCount');
    ContestantCountRef.on("value",(data) => {
      contestantCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      contestantCount: count
    });
  }

  update(){
    var contestantIndex = "contestants/contestant" + contestantCount;
    database.ref(contestantIndex).set({
      name: this.name,
      answer: this.answer
    
    });
  }

  static getContestantInfo()
  {

    var contestantInfo = database.ref('contestants');
    contestantInfo.on("value", (data) => {

      allContestants = data.val();

    })

  }

}
