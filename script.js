alert("hello \' IT IS WHAT IT IS\'");
/** arrays */

const Items=['car',"houses",'books',1000,];
console.log(Items.length);
console.log(Items[0]);
/**objects */
const Schools={
    Botwe:"red",
    Augusco:"green",
    Site:"purple",
}; 

console.log(Schools.Botwe);

/** functions */

function ConsolePlay(){
    const Schools={
        Botwe:"red",
        Augusco:"green",
        Site:"purple",
    }; 

    console.log(Schools.Site)
}
  ConsolePlay(); 
  /** creating objects in javascript */
function DepRank (worst,worse,bad,good,better,best){
this.worst=worst;
this.worse=worse;
this.bad=bad;
this.good=good;
this.better=better;
this.best=best;
}
 var rank=new DepRank("social","jobAdd","Agric","medicine","IT","computer");
    
for(counter=0;counter<=9;counter++){
    document.write(rank.worst+ " "+ rank.best);
};
/**addition of methods */
function ChangePosition(firstPosition,OldPosition){
this.firstPosition=firstPosition;
this.OldPosition=OldPosition;
this.NewPosition=function (firstPosition){
    this.firstPosition=firstPosition;

}
}

var Position= new ChangePosition("Head","tail");
Position.NewPosition("middle")
document.write(Position.firstPosition);

/** Arrays */
var othernames=new Array("kainaman","leurel","kantidangle")
document.write(othernames[0])