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
var names=["hannah","ella","theodora","lois", "erica","bridget"];
document.write(names[0])

var othernames=new Array("kainaman","leurel","kantidangle")
document.write(othernames[0])

/**Date Object */
function Dating(){
   let d=new Date();
   document.getElementById("date").innerHTML=d.toDateString();
   let Day=d.getDay()
    switch (Day){
        case 0:
            document.getElementById("day").innerHTML="Sunday";
            break;
        case 1:
                document.getElementById("day").innerHTML="Monday";
            break;
        case 2:
                document.getElementById("day").innerHTML="Tuesday";
            break;
        case 3:
                document.getElementById("day").innerHTML="Wedneseday";
                break;
        case 4:
                document.getElementsById("day").innerHTML="Thursday";
                break;
        case 5:
                document.getElementById("day").innerHTML="Friday";
                break;
        case 6:
                document.getElementById("day").innerHTML="Saturday";
                break;
                default:
                    document.getElementById("day").innerHTML="we have nothing for you"
    
        
        }
    
}
setInterval(Dating,3000)
/**javascript string searching */
var MainString="i love to create build and innovate and be the first person to create something awesome that solves a problem"
//indexOf()
let IndexOne=MainString.indexOf("create");
//search
let SearchOne=MainString.search("first");
//match
let Match=MainString.match("some")


alert(Match.length+" "+Match)
alert( "The use of IndexOf"+" "+IndexOne);
alert(SearchOne);

//addition of sting template
//the allow for interpolation 
//example
let firstGirl="juliet";
let scndGirl="Lois";
var allGirls=`i use to follow ${firstGirl} and chase ${scndGirl}`;
confirm(allGirls)

//w3schools  arrays and arrray methods
//looping throuhh arrays
let Skills=["money","ladies","git","html","css","girls",]
for (x=0;x<=Skills.length; ++x){
alert(Skills[x])
} 
// JAVASCRIPT COMPARISONS
//Ternary Operators
 var Taste=prompt("Enter your taste");
 var getTaste=Taste;
let TestTaste= (Taste=="beautiful")? "You have a good taste":"Your taste sucks";
alert(TestTaste);
//for in loops
// looping through the properties of sn object

const goals={ first:"forex millionare", second:"tech guru", third:"travel vlog"};

for(let x in goals){
alert(goals[x]);
}
//ForEach() iteration
//the function reapeat itself for each element of the array
const Life=["Money","goals","family"];
Life.forEach(CaLL_Life);
function CaLL_Life(value){
alert("Life involves"+ value);
}
// for of loops

var MyIdea="The best";

for (let m of MyIdea){
   alert(m)
}
