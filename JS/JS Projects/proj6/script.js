const questions = [
  {
   'que': "Whitch of the following markup language?",
    'a': "HTML",
    'b': "CSS",
    'c': "JS",
    'd': "C++",
    'correct': "a",
  },
  {
   'que': "What does HTML stand for?",
    'a': " Hyper Text Markup Language",
    'b': " Hyperlinks and Text Markup Language",
    'c': " Home Tool Markup Language",
    'd': "None of above",
    'correct': "a",
  },
  {
   'que': "Who is making the Web standards?",
    'a': " The World Wide Web Consortium",
    'b': " Google",
    'c': " Microsoft",
    'd': " Mozilla",
    'correct': "a",
  },

  {
    'que': "Which HTML element is used for the largest heading?",
    'a': "<h6>",
    'b': "<h1>",
    'c': "<heading>",
    'd': "<h2>",
    'correct': "b",
  },
  {
    'que': "Which HTML attribute is used to define inline styles?",
    'a': "class",
    'b': "style",
    'c': "font",
    'd': "css",
    'correct': "b",
  },
  {
    'que': "Which HTML element is used to create an unordered list?",
    'a': "<list>",
    'b': "<ul>",
    'c': "<ol>",
    'd': "<unordered>",
    'correct': "b",
  },
  {
    'que': "Which HTML element is used to insert a line break?",
    'a': "<break>",
    'b': "<lb>",
    'c': "<br>",
    'd': "<newline>",
    'correct': "c",
  },
  {
    'que': "What is the correct HTML element for inserting an image?",
    'a': "<image>",
    'b': "<img>",
    'c': "<picture>",
    'd': "<src>",
    'correct': "b",
  },
  {
    'que': "Which HTML attribute specifies an alternate text for an image?",
    'a': "alt",
    'b': "title",
    'c': "src",
    'd': "link",
    'correct': "a",
  },
  {
    'que': "What is the purpose of the <head> element in HTML?",
    'a': "To define the header of a document",
    'b': "To define the main content of a document",
    'c': "To link external resources like CSS and JavaScript files",
    'd': "To define a section in an HTML document",
    'correct': "c",
  },

];

let index = 0;
let total = questions.length;
let c = 0;
let w = 0;
const queBox = document.getElementById("queBox");
const optionInputs =  document.querySelectorAll('.options')
const lodeQuestion = () => {
    if(index === total)
    {
        return endQuiz();
    }
    reset();
    const data = questions[index];
    queBox.innerText = `${index+1} . ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if (ans === data.correct) {
        c++;
    }
    else{
        w++;
    }
    index++;
    lodeQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach((input)=>{
        if(input.checked){
            answer =  input.value;
        }
    })
    return answer;
}

const reset = () => {
    optionInputs.forEach((input)=>{
        input.checked = false;
    })
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align: center;">
    <h1>Thank You . . . ! </h1> <br>
    <h2>${c} / ${total} are correct . . .!</h2>
    </div>
    `
}

lodeQuestion();                                                   
