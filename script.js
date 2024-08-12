//start button
const startBut = document.createElement("button");
startBut.innerHTML = "Start";
document.body.appendChild(startBut);

//score
let score = 0;

//Question 1//
const redBut = document.createElement("button");
redBut.innerHTML = "Red";
document.body.appendChild(redBut);

const blueBut = document.createElement("button");
blueBut.innerHTML = "Blue";
document.body.appendChild(blueBut);

const greenBut = document.createElement("button");
greenBut.innerHTML = "Green";
document.body.appendChild(greenBut);

redBut.addEventListener("click", function() {
    score++;
}); 

localStorage.setItem("Question1Answer", "Red");
const Question1Answer = localStorage.getItem("Question1Answer");
console.log("Question 1: In The Matrix, what color pill does Neo take to learn the truth about the Matrix?" + Question1Answer);

//Question 2//
const zamBut = document.createElement("button");
zamBut.innerHTML = "Zamunda";
document.body.appendChild(zamBut);

const wakBut = document.createElement("button");
wakBut.innerHTML = "Wakanda";
document.body.appendChild(wakBut);

const elbBut    = document.createElement("button");
elbBut .innerHTML = "Elbonia";
document.body.appendChild(elbButBut);

wakBut.addEventListener("click", function() {
    score++;
});


localStorage.setItem("Question2Answer", "Wakanda");
const Question2Answer = localStorage.getItem("Question2Answer");
console.log("Question 2: Question: What is the name of the fictional African country in Black Panther?" + Question2Answer);


//Question 3//

const vitoBut = document.createElement("button");
vitoBut.innerHTML = "Vito Corleone";
document.body.appendChild(vitoBut);

const michaelBut = document.createElement("button");
michaelBut.innerHTML = "Michael Corleone";
document.body.appendChild(michaelBut);

const fredBut = document.createElement("button"); 
redBut.innerHTML = "Fredo Corleone";
document.body.appendChild (fredBut);

localStorage.setItem("Question3Answer", "Vito Corleone");
const Question3Answer = localStorage.getItem("Question3Answer");
console.log("Question 3: In The Godfather, who is the head of the Corleone family?" + Question3Answer);

//Question 4//

const tricBut = document.createElement("button");
tricBut.innerHTML = "Tryceratops";
document.body.appendChild(tricBut);

const raptorBut = document.createElement("button");
raptorBut.innerHTML = "Velociraptor";
document.body.appendChild(raptorBut);

const chamBut = document.createElement("button");
chamBut.innerHTML = "Chameleon Dinosaur";
document.body.appendChild(chamBut);


localStorage.setItem("Question4Answer", "Velociraptor");
const Question4Answer = localStorage.getItem("Question4Answer");
console.log("Question 4: Question: In Jurassic Park, which dinosaur is famously known for its ability to change color and blend in with its surroundings?" + Question4Answer);

//Question 5//

const leoBut = document.createElement("button");
leoBut.innerHTML = "Leonardo DiCaprio";
document.body.appendChild(leoBut);

const tomBut = document.createElement("button");
tomBut.innerHTML = "Tom Hardy";
document.body.appendChild(tomBut);

const josephBut = document.createElement("button");
josephBut.innerHTML = "Joseph Gordon-Levitt";
document.body.appendChild(josephBut);

localStorage.setItem("Question5Answer", "Leonardo DiCaprio");
const Question5Answer = localStorage.getItem("Question5Answer");
console.log("Question 5: In Inception, who plays the character Cobb?" + Question5Answer);


//Question 6//

const johnnyBut = document.createElement("button");
johnnyBut.innerHTML = "Johnny Depp";
document.body.appendChild(johnnyBut);

const orlBut = document.createElement("button");
orlBut.innerHTML = "Orlando Bloom";
document.body.appendChild(orlBut);

const geoBut = document.createElement("button");
geoBut.innerHTML = "Geoffrey Rush";
document.body.appendChild(geoBut);


localStorage.setItem("Question6Answer", "Johnny Depp");
const Question6Answer = localStorage.getItem("Question6Answer");
console.log("Question 6: Who played the character of Jack Sparrow in Pirates of the Caribbean?" + Question6Answer);


//Question 7//

const docBut = document.createElement("button");
docBut.innerHTML = "Dr. Emmett Brown";
document.body.appendChild(docBut);

const richBut = document.createElement("button");
richBut.innerHTML = "Dr. Richard Gray";
document.body.appendChild(richBut);

const howBut = document.createElement("button");
howButBut.innerHTML = "Dr. Howard Stark";
document.body.appendChild(howBut);


localStorage.setItem("Question7Answer", "Dr. Emmett Brown");
const Question7Answer = localStorage.getItem("Question7Answer");
console.log("Question 7: In Back to the Future, what is the name of the scientist who invents the time machine?" + Question7Answer);


//Question 8//

const trumanBut = document.createElement("button");
trumanBut.innerHTML = "Truman Burbank";
document.body.appendChild(trumanBut);

const peteBut = document.createElement("button");
peteBut.innerHTML = "Peter Weir";
document.body.appendChild(peteBut);

const chrisBut = document.createElement("button");
chrisBut.innerHTML = "Chris Neilson";
document.body.appendChild(chrisBut);


localStorage.setItem("Question8Answer", "Truman Burbank");
const Question8Answer = localStorage.getItem("Question8Answer");
console.log("Question 8: In The Truman Show, what is the name of the character played by Jim Carrey who lives in a reality TV show?" + Question8Answer);


//Question 9//

const rocketBut = document.createElement("button");
rocketBut.innerHTML = "Rocket";
document.body.appendChild(rocketBut);

const grootBut = document.createElement("button");
grootBut.innerHTML = "Groot";
document.body.appendChild(grootBut);

const draxBut = document.createElement("button");
draxBut.innerHTML = "Drax";
document.body.appendChild(draxBut);


localStorage.setItem("Question9Answer", "Rocket");
const Question9Answer = localStorage.getItem("Question9Answer");
console.log("Question 9: In Guardians of the Galaxy, what is the name of the talking raccoon character voiced by Bradley Cooper?" + Question9Answer);


//Question 10//

const rafiBut = document.createElement("button");
rafiBut.innerHTML = "Raifiki";
document.body.appendChild(rafiBut);

const scarBut = document.createElement("button");
scarBut.innerHTML = "Scar";
document.body.appendChild(scarBut);

const mufasaBut = document.createElement("button");
mufasaBut.innerHTML = "Mufasa";
document.body.appendChild(mufasaBut);



localStorage.setItem("Question10Answer", "Mufasa");
const Question10Answer = localStorage.getItem("Question10Answer");
console.log("Question 10 In Disney’s The Lion King, what is the name of Simba's father?" + Question10Answer);

//Submit Button//
const submitBut = document.createElement("button");
submitBut.innerHTML = "Submit";
document.body.appendChild(submitBut);




