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
function DepartRank(worst,worse,bad,good,better,best){
this.worst=worst;
this.worse=worse;
this.bad=bad;
this.good=good;
this.better=better;
this.best=best;
};
var Rank=DepartRank("social","jobAdd","Agric","medicine","IT","computer");
alert(Rank.worst)
//for(counter=0;counter<=Rank.length;counter++){
 //   document.write(Rank.worst);
//};