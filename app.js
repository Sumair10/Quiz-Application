var quiz=[
    {
        question: "Q1 : What does HTML stand for?",
        a: "Hyper Text Markup Language",
        b: "Hyper Text Makeup Language",
        c: "Hyper Tech Markup Language",
        d: "None of these",
        ans: "ans1"
    },
    {
        question: "Q2 : HTML program is saved using _________ extension.",
        a: ".htl",
        b: ".html",
        c: ".hml",
        d: ".htlm",
        ans: "ans2"
    },
    {
        question: "Q3 : Who was the primary author of HTML?",
        a: "Brendan Eich",
        b: "Sabeer Bhatiya",
        c: "Google Inc.",
        d: "Tim Berners-Lee",
        ans: "ans4"
    },
    {
        question: "Q4 : DOM stands for",
        a: "Document object model",
        b: "Data object model",
        c: "Document Oriented model",
        d: "Document Oriented model",
        ans: "ans1"
    },
    {
        question: "Q5 : How can we resize the image?",
        a: "Using resize attribute",
        b: "Using size attribute",
        c: "Using height and width",
        d: "Using rs attribute",
        ans: "ans3"
    },
    {
        question: "Q6 : ASCII stands for______",
        a: "American Standard Code for Informal Interchange",
        b: "American Standard Code for Interchanging Information",
        c: "American Standard Code for Information Interchange",
        d: "American Standard Code for Information Interval",
        ans: "ans3"
    },
    {
        question: "Q7 : Which of the following HTML Elements is used for making any text bold ?",
        a: "p",
        b: "i",
        c: "li",
        d: "b",
        ans: "ans4"
    },
    {
        question: "Q8 : Which of the following HTML element is used for creating an unordered list?",
        a: "ul",
        b: "i",
        c: "p",
        d: "ol",
        ans: "ans1"
    },
    {
        question: "Q9 : How many heading tags are there in HTML5?",
        a: "2",
        b: "3",
        c: "5",
        d: "6",
        ans: "ans4"
    },
    {
        question: "Q10 : What is the font-size of the h1 heading tag?",
        a: "3.5 em",
        b: "2.17 em",
        c: "2 em",
        d: "1 em",
        ans: "ans3"
    }
];

var question = document.querySelector('.question');
var option1 = document.querySelector('#option1');
var option2 = document.querySelector('#option2');
var option3 = document.querySelector('#option3');
var option4 = document.querySelector('#option4');
var previous = document.querySelector('.previous');
var next = document.querySelector('.next');
var answers = document.querySelectorAll('.answer');
var showScore = document.getElementById('showScore');

var questionCount = 0;
var score = 0;

function loadQuestion()
{
    var questionList = quiz[questionCount];
    question.innerHTML=(questionList.question);
    option1.innerHTML=(questionList.a)
    option2.innerHTML=(questionList.b)
    option3.innerHTML=(questionList.c)
    option4.innerHTML=(questionList.d)
}
loadQuestion();
function getCheckAns()
{
    var ans;
    answers.forEach(function(currentAnswer)
    {
        if(currentAnswer.checked)
        {
            ans=currentAnswer.id;
        }
    })
    return ans;
}

next.addEventListener('click', function()
{
    var userAnswer = getCheckAns()
    
    if(userAnswer === quiz[questionCount].ans)
    {
        score++;
    }
    questionCount++
    if(questionCount < quiz.length)
    {
        loadQuestion();
        showScore.style.display="none"
    }
    else
    {
        showResult();
    }

})

function showResult()
{
    showScore.innerHTML = "You Score "+ score + " out of "+ questionCount 
    showScore.style.display = "block"
}

// passOrFail()
// {
//     if(score>=5)
//     {
//         "Passed!"
//     }
//     else
//     {
//         "failed!"
//     }
// }