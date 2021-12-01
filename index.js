var readlineSync = require("readline-sync");

var userName = readlineSync.question("Hiiiiiii!! Can you please tell me your name? \n");
console.log("-----Welcome " +userName +" to Sports Quiz Game!-----");
console.log("Rules of the game are given below : ");
console.log("There will be a total of 20 questions. \nYou can write the whole answer or the option. \nYou will be given 4 options. \nThere will be three levels to this game. \nEach question will carry 1 point. \nThere is no negative marking for wrong answer. \nYou will be asked questions continuously.")
var score = 0;

function sports(question,answer,option)
{
  var userAnswer = readlineSync.question("# " + question + "\nYour answer is : ");
  if (userAnswer.toUpperCase() === answer.toUpperCase() || userAnswer.toUpperCase() === option.toUpperCase())
  {
    console.log("Yessss!!! You're absolutely right!");
    score = score+1;
  }
  else{
    console.log("OOPS!!!! You're wrong!");
    console.log("Correct answer is : ",answer.toUpperCase());
  }
  console.log("Your score is : ", score);
  console.log("------");
}

console.log("Let's start \nGoodluck!");
var questions = [
  {
    question : "Who did England beat in the final of the 2019 Cricket World Cup? \n a. Australia \n b. India \n c. New Zealand",
    answer : "New Zealand",
    option : "c"
  },
  {
    question : "What is the largest cricket stadium in the world? \n a. Eden Gardens \n b. Lords \n c. Narendra Modi Stadium",
    answer : "Narendra Modi Stadium",
    option : "c"
  },
  {
    question : "Who is the winner of IPL 2021? \n a. RCB \n b. CSK \n c. KKR",
    answer : "CSK",
    option : "b"
  },
  {
    question : "Fastest batsman reach 20,000 international runs mark? \n a. MS Dhoni \n b. Rohit Sharma \n c. Virat Kohli",
    answer : "Virat Kohli",
    option : "c"
  },
  {
    question : "Who won the most IPL seasons? \n a. Mumbai Indians \n b. SRH \n c. CSK",
    answer : "Mumbai Indians",
    option : "a"
  },
  {
    question : "First sportsperson nominated for Rajya Sabha membership? \n a. MS Dhoni \n b. Sachin Tendulkar \n c. Saurav Ganguly",
    answer : "Sachin Tendulkar",
    option : "b"
  },
  {
    question : "Who was the captain of the Mumbai Indians in IPL 2019? \n a. Rohit Sharma \n b. Sachin Tendulkar \n c. Harbhajan Singh",
    answer : "Rohit Sharma",
    option : "a"
  },
  {
    question : "Which player holds the record for the fastest fifty in IPL?? \n a. Nicholas Pooran \n b. K. L. Rahul \n c. Yuvraj Singh",
    answer : "K. L. Rahul",
    option : "b"
  },
  {
    question : "Which team has never made the IPL final? \n a. Punjab Kings \n b. Royal Challengers Bangalore \n c. None of the above",
    answer : "None of the above",
    option : "c"
  },
  {
    question : "Which batsman has scored the most number of hundreds in the IPL? \n a. Virat Kohli \n b. Chris Gayle \n c. Steve Smith",
    answer : "Steve Smith",
    option : "c"
  },
  {
    question : "Who was the first cricketer to be sold at the IPL 2021 auction? \n a. Aaron Finch \n b. Glenn Maxwell \n c. David Warner",
    answer : "Glenn Maxwell",
    option : "b"
  },
  {
    question : "Who was the winner of T20 world cup 2021? \n a. New Zealand \n b. Australia \n c. Pakistan",
    answer : "Australia",
    option : "b"
  },
  {
    question : "Who was the first overseas player to captain Delhi Daredevils (now Delhi Capitals)? \n a. James Hopes \n b. Mahela Jayawardene \n c. Kevin Pietersen",
    answer : "James Hopes",
    option : "a"
  },
  {
    question : "Who is the purple cap winner of IPL 2021? \n a. Akshar Patel \n b. Kagiso Rabada \n c. Trent boult",
    answer : "Kagiso Rabada",
    option : "b"
  },
  {
    question : "Who is the purple cap winner of IPL 2021? \n a. Ruturaj Gaikwad \n b. Kagiso Rabada \n c. Tren bolt",
    answer : "Ruturaj Gaikwad",
    option : "a"
  }
];
for (var j = 0; j < 1; j++) {


    if (score < 6) {
        for (var i = 0; i < 5; i++) {
            sports(questions[i].question, questions[i].answer, questions[i].option)
        }
        if (score === 5) {
            console.log("Yayyyy, you completed Level 1!! \n");
        } else {
            console.log("Sorry, You needed to score 5 marks for going into next level!");
            break;
        }
    }
    if (score > 4 && score < 11) {
        console.log("You just entered Level 2... \n");
        for (var i = 5; i < 10; i++) {
            sports(questions[i].question, questions[i].answer, questions[i].option)
        }
        if (score === 10) {
            console.log("So you really are a cricket fan, coooool!! \n");
        } else {
            console.log("You played this far, that's awesome!! Try to reach the next level next time by scoring a perfect 10...");
            break;
        }
    }
    if (10 <= score) {
        console.log("Aren't you the best cricket fan? You just entered Level 3!! \n");
        for (var i = 10; i < 15; i++) {
            sports(questions[i].question, questions[i].answer, questions[i].option)
        }
        if (score === 15) {
            console.log("You are officially the best fan!!!! Congrats!! \n");
        } else {
            console.log("Ohh, You're awesome!!");
        }
    }
}



console.log("Thank you for playing!!!");