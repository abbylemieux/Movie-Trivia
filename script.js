//Question 1//
const redBut = document.createElement("button");
redBut.innerHTML = "Red";
document.body.appendChild(redBut);

const blueBut = document.createElement("button");
bluebut.innerHTML = "Blue";
document.body.appendChild(blueBut);

const greenBut = document.createElement("button");
greenBut.innerHTML = "Green";
document.body.appendChild(greenBut);

const yellowBut = document.createElement("button");
yellowBut.innerHTML = "Yellow";
document.body.appendChild(yellowBut);

if (redBut.innerHTML === "Red") {
    redBut.style.backgroundColor = "green";
} else if (redBut.innerHTML === "Blue" || redBut.innerHTML === "Green" || redBut.innerHTML === "Yellow") {
    redBut.style.backgroundColor = "red";
}

localStorage.setItem("Question1Answer", "Red");
const Question1Answer = localStorage.getItem("Question1Answer");
console.log("Question 1: In The Matrix, what color pill does Neo take to learn the truth about the Matrix?" + Question1Answer);

//Question 2//

const wakBut = document.createElement("button");
wakBut.innerHTML = "Wakanda";
document.body.appendChild(wakBut);

const zamBut = document.createElement("button");
zamBut.innerHTML = "Zamunda";
document.body.appendChild(zamBut);

const nigBut    = document.createElement("button");
nigBut .innerHTML = "Nigeria";
document.body.appendChild(nigBut   );

const EthBut = document.createElement("button");
EthBut.innerHTML = "Ethiopia";
document.body.appendChild(EthBut);

if (wakBut.innerHTML === "Wakanda") {
    wakBut.style.backgroundColor = "green";
}
else if (wakBut.innerHTML === "Zamunda" || wakBut.innerHTML === "Nigeria" || wakBut.innerHTML === "Ethiopia") {
    wakBut.style.backgroundColor = "red";
}

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

const sonnyBut = document.createElement("button");
sonnyBut.innerHTML = "Sonny Corleone";
document.body.appendChild(sonnyBut);

const tomBut = document.createElement("button");
tomBut.innerHTML = "Tom Hagen";
document.body.appendChild(tomBut);

if (vitoBut.innerHTML === "Vito Corleone") {
    vitoBut.style.backgroundColor = "green";
}
else if (vitoBut.innerHTML === "Michael Corleone" || vitoBut.innerHTML === "Sonny Corleone" || vitoBut.innerHTML === "Tom Hagen") {
    vitoBut.style.backgroundColor = "red";
}

localStorage.setItem("Question3Answer", "Vito Corleone");
const Question3Answer = localStorage.getItem("Question3Answer");
console.log("Question 3: In The Godfather, who is the head of the Corleone family?" + Question3Answer);

//Question 4//

const tRexBut = document.createElement("button");
tRexBut.innerHTML = "Tyrannosaurus Rex";
document.body.appendChild(tRexBut);

const raptorBut = document.createElement("button");
raptorBut.innerHTML = "Velociraptor";
document.body.appendChild(raptorBut);

const brontoBut = document.createElement("button");
brontoBut.innerHTML = "Brontosaurus";
document.body.appendChild(brontoBut);

const stegoBut = document.createElement("button");
stegoBut.innerHTML = "Stegosaurus";
document.body.appendChild(stegoBut);

if (raptorBut.innerHTML === "Velociraptor") {
    raptorBut.style.backgroundColor = "green";
}
else if (raptorBut.innerHTML === "Tyrannosaurus Rex" || raptorBut.innerHTML === "Brontosaurus" || raptorBut.innerHTML === "Stegosaurus") {
    raptorBut.style.backgroundColor = "red";
}

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

const ellenBut = document.createElement("button");
ellenBut.innerHTML = "Ellen Page";
document.body.appendChild(ellenBut);

if (leoBut.innerHTML === "Leonardo DiCaprio") {
    leoBut.style.backgroundColor = "green";
}
else if (leoBut.innerHTML === "Tom Hardy" || leoBut.innerHTML === "Joseph Gordon-Levitt" || leoBut.innerHTML === "Ellen Page") {
    leoBut.style.backgroundColor = "red";
}

localStorage.setItem("Question5Answer", "Leonardo DiCaprio");
const Question5Answer = localStorage.getItem("Question5Answer");
console.log("Question 5: In Inception, who plays the character Cobb?" + Question5Answer);


//Question 6//

const johnnyBut = document.createElement("button");
johnnyBut.innerHTML = "Johnny Depp";
document.body.appendChild(johnnyBut);

const bradBut = document.createElement("button");
bradBut.innerHTML = "Brad Pitt";
document.body.appendChild(bradBut);

const willBut = document.createElement("button");
willBut.innerHTML = "Will Smith";
document.body.appendChild(willBut);

const cruBut = document.createElement("button");
cruBut.innerHTML = "Tom Cruise";
document.body.appendChild(cruBut);

if (johnnyBut.innerHTML === "Johnny Depp") {
    johnnyBut.style.backgroundColor = "green";
}
else if (johnnyBut.innerHTML === "Brad Pitt" || johnnyBut.innerHTML === "Will Smith" || johnnyBut.innerHTML === "Tom Cruise") {
    johnnyBut.style.backgroundColor = "red";
}

localStorage.setItem("Question6Answer", "Johnny Depp");
const Question6Answer = localStorage.getItem("Question6Answer");
console.log("Question 6: Who played the character of Jack Sparrow in Pirates of the Caribbean?" + Question6Answer);


//Question 7//

const docBut = document.createElement("button");
docBut.innerHTML = "Dr. Emmett Brown";
document.body.appendChild(docBut);

const martyBut = document.createElement("button");
martyBut.innerHTML = "Marty McFly";
document.body.appendChild(martyBut);

const biffBut = document.createElement("button");
biffBut.innerHTML = "Biff Tannen";
document.body.appendChild(biffBut);

const jenniferBut = document.createElement("button");
jenniferBut.innerHTML = "Jennifer Parker";
document.body.appendChild(jenniferBut);

if (docBut.innerHTML === "Dr. Emmett Brown") {
    docBut.style.backgroundColor = "green";
}
else if (docBut.innerHTML === "Marty McFly" || docBut.innerHTML === "Biff Tannen" || docBut.innerHTML === "Jennifer Parker") {
    docBut.style.backgroundColor = "red";
}

localStorage.setItem("Question7Answer", "Dr. Emmett Brown");
const Question7Answer = localStorage.getItem("Question7Answer");
console.log("Question 7: In Back to the Future, what is the name of the scientist who invents the time machine?" + Question7Answer);


//Question 8//

const trumanBut = document.createElement("button");
trumanBut.innerHTML = "Truman Burbank";
document.body.appendChild(trumanBut);

const marlonBut = document.createElement("button");
marlonBut.innerHTML = "Marlon Brando";
document.body.appendChild(marlonBut);

const andyBut = document.createElement("button");
andyBut.innerHTML = "Andy Kaufman";
document.body.appendChild(andyBut);

const jerryBut = document.createElement("button");
jerryBut.innerHTML = "Jerry Seinfeld";
document.body.appendChild(jerryBut);

if (trumanBut.innerHTML === "Truman Burbank") {
    trumanBut.style.backgroundColor = "green";
}
else if (trumanBut.innerHTML === "Marlon Brando" || trumanBut.innerHTML === "Andy Kaufman" || trumanBut.innerHTML === "Jerry Seinfeld") {
    trumanBut.style.backgroundColor = "red";
}

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

const gamoraBut = document.createElement("button");
gamoraBut.innerHTML = "Gamora";
document.body.appendChild(gamoraBut);

if (rocketBut.innerHTML === "Rocket") {
    rocketBut.style.backgroundColor = "green";
} else if (rocketBut.innerHTML === "Groot" || rocketBut.innerHTML === "Drax" || rocketBut.innerHTML === "Gamora") {
    rocketBut.style.backgroundColor = "red";
}

localStorage.setItem("Question9Answer", "Rocket");
const Question9Answer = localStorage.getItem("Question9Answer");
console.log("Question 9: In Guardians of the Galaxy, what is the name of the talking raccoon character voiced by Bradley Cooper?" + Question9Answer);


//Question 10//

const simbaBut = document.createElement("button");
simbaBut.innerHTML = "Simba";
document.body.appendChild(simbaBut);

const scarBut = document.createElement("button");
scarBut.innerHTML = "Scar";
document.body.appendChild(scarBut);

const mufasaBut = document.createElement("button");
mufasaBut.innerHTML = "Mufasa";
document.body.appendChild(mufasaBut);

const timonBut = document.createElement("button");
timonBut.innerHTML = "Timon";
document.body.appendChild(timonBut);

if (simbaBut.innerHTML === "Simba") {
    simbaBut.style.backgroundColor = "green";
}
else if (simbaBut.innerHTML === "Scar" || simbaBut.innerHTML === "Mufasa" || simbaBut.innerHTML === "Timon") {
    simbaBut.style.backgroundColor = "red";
}

localStorage.setItem("Question10Answer", "Mufasa");
const Question10Answer = localStorage.getItem("Question10Answer");
console.log("Question 10 In Disney’s The Lion King, what is the name of Simba's father?" + Question10Answer);
