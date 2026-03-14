// Get selected language from dashboard
let language = localStorage.getItem("language")

// Question Database
let questions = {

python: [
{question:"Python is?",options:["Low level","High level","Machine","Assembly"],answer:1},
{question:"Function keyword?",options:["func","define","def","function"],answer:2},
{question:"File extension?",options:[".java",".py",".js",".cpp"],answer:1},
{question:"Comment symbol?",options:["//","#","--","/*"],answer:1},
{question:"Output function?",options:["print()","echo","cout","printf"],answer:0},
{question:"Which keyword creates class?",options:["class","define","object","struct"],answer:0},
{question:"Python is developed by?",options:["Dennis Ritchie","Guido van Rossum","James Gosling","Bjarne Stroustrup"],answer:1},
{question:"List is?",options:["Mutable","Immutable","Static","Constant"],answer:0},
{question:"Tuple is?",options:["Mutable","Immutable","Dynamic","Pointer"],answer:1},
{question:"Which loop exists in Python?",options:["for","while","do-while","All"],answer:3},
{question:"Dictionary stores?",options:["Keys and values","Only values","Only keys","Numbers"],answer:0},
{question:"Python supports OOP?",options:["Yes","No","Partially","Only classes"],answer:0},
{question:"Indentation means?",options:["Code block","Loop","Variable","Operator"],answer:0},
{question:"pip is used for?",options:["Package install","Printing","Compiling","Linking"],answer:0},
{question:"len() function returns?",options:["Length","Index","Value","Type"],answer:0},
{question:"Which is correct variable?",options:["1num","num_1","@num","$num"],answer:1},
{question:"Python is interpreted?",options:["Yes","No","Compiled","Assembler"],answer:0},
{question:"List bracket?",options:["{}","[]","()","<>"],answer:1},
{question:"Tuple bracket?",options:["{}","[]","()","<>"],answer:2},
{question:"Set bracket?",options:["{}","[]","()","<>"],answer:0}
],


java: [
{question:"Java is?",options:["Compiled","Interpreted","Both","None"],answer:2},
{question:"Java extension?",options:[".java",".py",".cpp",".js"],answer:0},
{question:"Java developed by?",options:["Sun Microsystems","Microsoft","Apple","Google"],answer:0},
{question:"Main method return type?",options:["void","int","string","float"],answer:0},
{question:"Java supports OOP?",options:["Yes","No","Partially","Only classes"],answer:0},
{question:"Java platform is?",options:["Independent","Dependent","Machine","Hardware"],answer:0},
{question:"JVM stands for?",options:["Java Virtual Machine","Java Visual Mode","Java Variable Memory","None"],answer:0},
{question:"Java keyword for inheritance?",options:["implements","extends","inherits","use"],answer:1},
{question:"Default value of int?",options:["0","null","1","undefined"],answer:0},
{question:"Access modifier?",options:["public","private","protected","All"],answer:3},
{question:"Which method is constructor?",options:["Same as class","void method","main","None"],answer:0},
{question:"Interface is?",options:["Class","Abstract class","Blueprint","Method"],answer:2},
{question:"Java supports multithreading?",options:["Yes","No","Only single thread","Partially"],answer:0},
{question:"Which loop exists in Java?",options:["for","while","do-while","All"],answer:3},
{question:"Exception handling keyword?",options:["try","catch","finally","All"],answer:3},
{question:"String is immutable?",options:["Yes","No","Partially","Only char"],answer:0},
{question:"Java main method signature?",options:["public static void main(String[] args)","void main(String args)","public main()","main()"],answer:0},
{question:"Array index starts at?",options:["0","1","-1","Depends"],answer:0},
{question:"Abstract class can?",options:["Have objects","Be instantiated","Have abstract methods","None"],answer:2},
{question:"Java version release year?",options:["1995","1991","2000","1989"],answer:0}
],

c: [
{question:"C developed by?",options:["Dennis Ritchie","Guido","James Gosling","Bjarne"],answer:0},
{question:"C extension?",options:[".c",".java",".py",".cpp"],answer:0},
{question:"C is?",options:["High level","Low level","Middle level","Assembly"],answer:2},
{question:"Printf used for?",options:["Input","Output","Loop","Function"],answer:1},
{question:"Header file?",options:["stdio.h","java.h","python.h","main.h"],answer:0},
{question:"C supports pointers?",options:["Yes","No","Partially","None"],answer:0},
{question:"C supports recursion?",options:["Yes","No","Partial","Only loops"],answer:0},
{question:"Loop types?",options:["for","while","do-while","All"],answer:3},
{question:"C is case sensitive?",options:["Yes","No","Partial","Depends"],answer:0},
{question:"C supports arrays?",options:["Yes","No","Partial","None"],answer:0},
{question:"C supports structures?",options:["Yes","No","Partial","None"],answer:0},
{question:"C supports OOP?",options:["No","Yes","Partial","None"],answer:0},
{question:"Size of int?",options:["2/4 bytes","1 byte","8 bytes","Depends"],answer:0},
{question:"Size of char?",options:["1 byte","2 bytes","4 bytes","8 bytes"],answer:0},
{question:"C main return type?",options:["int","void","float","char"],answer:0},
{question:"Break is used for?",options:["Exit loop","Continue","Return","Start loop"],answer:0},
{question:"Switch statement uses?",options:["int/char","float","string","double"],answer:0},
{question:"C supports dynamic memory?",options:["Yes","No","Partial","Only static"],answer:0},
{question:"Header file for malloc?",options:["stdlib.h","stdio.h","string.h","math.h"],answer:0},
{question:"C standard library function?",options:["printf()","echo()","println()","cout"],answer:0}
],


javascript: [
{question:"JS stands for?",options:["JavaScript","JavaSource","JavaSyntax","None"],answer:0},
{question:"JS runs in?",options:["Browser","Compiler","Assembler","Kernel"],answer:0},
{question:"JS extension?",options:[".js",".py",".cpp",".java"],answer:0},
{question:"Console output?",options:["print()","echo()","console.log()","printf()"],answer:2},
{question:"JS is?",options:["Scripting","Machine","Assembly","Binary"],answer:0},
{question:"Variable keyword?",options:["var","int","let","Both var & let"],answer:3},
{question:"JS supports OOP?",options:["Yes","No","Partial","None"],answer:0},
{question:"Array method?",options:["push()","append()","add()","insert()"],answer:0},
{question:"Function declaration?",options:["function name()","def name()","func name()","function:name"],answer:0},
{question:"JS is case sensitive?",options:["Yes","No","Partial","Depends"],answer:0},
{question:"JS DOM stands for?",options:["Document Object Model","Document Option Model","Digital Object Model","None"],answer:0},
{question:"Event listener method?",options:["addEventListener()","onEvent()","listen()","attach()"],answer:0},
{question:"JS loop types?",options:["for","while","do-while","All"],answer:3},
{question:"JS conditional?",options:["if","switch","ternary","All"],answer:3},
{question:"NaN stands for?",options:["Not a Number","Number","Null","None"],answer:0},
{question:"JS comparison operator?",options:["===","==","!=","All"],answer:3},
{question:"JS strict mode keyword?",options:["'use strict'","strict","enable","All"],answer:0},
{question:"JS supports closures?",options:["Yes","No","Partial","None"],answer:0},
{question:"JS ES6 introduced?",options:["let & const","var","function","class"],answer:0},
{question:"JS array iteration?",options:["forEach()","map()","filter()","All"],answer:3}
],
html: [
{question:"HTML stands for?",options:["Hyper Text Markup Language","High Text Markup Language","Hyperlinks Text Mark Language","Home Tool Markup Language"],answer:0},
{question:"Which tag is used for paragraph?",options:["<p>","<para>","<paragraph>","<h1>"],answer:0},
{question:"HTML file extension?",options:[".html",".htm",".xml",".txt"],answer:0},
{question:"Tag for line break?",options:["<br>","<break>","<lb>","<hr>"],answer:0},
{question:"Tag for hyperlinks?",options:["<a>","<link>","<href>","<hyper>"],answer:0},
{question:"Image tag?",options:["<img>","<image>","<pic>","<src>"],answer:0},
{question:"Bold text tag?",options:["<b>","<strong>","<bold>","<bt>"],answer:0},
{question:"Italic text tag?",options:["<i>","<italic>","<em>","<it>"],answer:0},
{question:"HTML list tag?",options:["<ul>","<ol>","<li>","All"],answer:3},
{question:"HTML table row tag?",options:["<tr>","<td>","<th>","<table>"],answer:0},
{question:"HTML table header tag?",options:["<th>","<td>","<tr>","<thead>"],answer:0},
{question:"HTML comment?",options:["<!-- -->","//","/* */","#"],answer:0},
{question:"Form tag in HTML?",options:["<form>","<input>","<button>","<fieldset>"],answer:0},
{question:"Input for checkbox?",options:["<input type='checkbox'>","<input type='check'>","<checkbox>","<input checkbox>"],answer:0},
{question:"Submit button?",options:["<input type='submit'>","<button>","<submit>","<input submit>"],answer:0},
{question:"HTML5 semantic tag?",options:["<header>","<div>","<span>","<b>"],answer:0},
{question:"Tag for audio?",options:["<audio>","<sound>","<music>","<voice>"],answer:0},
{question:"Tag for video?",options:["<video>","<movie>","<clip>","<media>"],answer:0},
{question:"Default list in HTML?",options:["Unordered list","Ordered list","Definition list","None"],answer:0},
{question:"Tag for horizontal line?",options:["<hr>","<line>","<break>","<hl>"],answer:0}
],
css: [
{question:"CSS stands for?",options:["Cascading Style Sheets","Computer Style Sheets","Creative Style Sheets","Colorful Style Sheets"],answer:0},
{question:"Inline CSS is written using?",options:["style attribute","<css> tag","<style> tag","link"],answer:0},
{question:"External CSS file extension?",options:[".css",".html",".js",".txt"],answer:0},
{question:"Select element by ID?",options:["#id","id","*id",".id"],answer:0},
{question:"Select element by class?",options:[".class","#class","class","*class"],answer:0},
{question:"Property to change text color?",options:["color","font-color","text-color","fgcolor"],answer:0},
{question:"Property for background color?",options:["background-color","bgcolor","color","background"],answer:0},
{question:"Font size property?",options:["font-size","text-size","size","font"],answer:0},
{question:"CSS for bold text?",options:["font-weight","text-style","text-weight","bold"],answer:0},
{question:"CSS for italic text?",options:["font-style","text-style","style","italic"],answer:0},
{question:"Margin sets?",options:["Space outside element","Space inside element","Border thickness","Padding"],answer:0},
{question:"Padding sets?",options:["Space inside element","Space outside element","Border thickness","Margin"],answer:0},
{question:"Border sets?",options:["Border around element","Space inside element","Space outside element","Margin"],answer:0},
{question:"CSS for hover effect?",options:[":hover","hover","onhover","hovered"],answer:0},
{question:"CSS units?",options:["px, em, %","pt, kg, px","cm, mm, px","px, px2, %"],answer:0},
{question:"CSS display block?",options:["Takes full width","Takes only content width","Hidden","Inline only"],answer:0},
{question:"CSS display inline?",options:["Takes content width","Takes full width","Hidden","Block only"],answer:0},
{question:"CSS float property?",options:["Position left/right","Align center","Margin","Padding"],answer:0},
{question:"CSS z-index controls?",options:["Stacking order","Font size","Opacity","Margin"],answer:0},
{question:"CSS comment syntax?",options:["/* comment */","// comment","<!-- comment -->","# comment"],answer:0}
],

dsa:[
{question:"Stack follows?",options:["FIFO","LIFO","Random","Both"],answer:1},
{question:"Queue follows?",options:["FIFO","LIFO","Random","Both"],answer:0},
{question:"Linked List starts at?",options:["Head","Tail","Index 0","Root"],answer:0},
{question:"Binary tree has?",options:["1 child","2 children","3 children","Any number"],answer:1},
{question:"DFS stands for?",options:["Depth First Search","Depth Final Search","Data Flow Search","Direct First Search"],answer:0},
{question:"BFS stands for?",options:["Breadth First Search","Binary First Search","Breadth Flow Search","Binary Flow Search"],answer:0},
{question:"Time complexity of binary search?",options:["O(n)","O(log n)","O(n^2)","O(1)"],answer:1},
{question:"Hash table uses?",options:["Array","Linked List","Tree","All"],answer:3},
{question:"Stack push operation is?",options:["Insert at top","Insert at bottom","Insert randomly","Delete element"],answer:0},
{question:"Queue dequeue operation is?",options:["Remove from front","Remove from rear","Remove randomly","Insert"],answer:0},
{question:"Circular Queue avoids?",options:["Overflow","Underflow","Deadlock","Memory leak"],answer:0},
{question:"Graph cycles detection?",options:["DFS","BFS","Both","None"],answer:2},
{question:"Heap type?",options:["Min Heap","Max Heap","Both","None"],answer:2},
{question:"Tree traversal?",options:["Inorder","Preorder","Postorder","All"],answer:3},
{question:"Binary Search Tree property?",options:["Left < Root < Right","Left > Root > Right","Random","None"],answer:0},
{question:"Dynamic programming uses?",options:["Memoization","Recursion","Iteration","All"],answer:3},
{question:"Queue implemented by?",options:["Array","Linked List","Both","Stack"],answer:2},
{question:"Stack implemented by?",options:["Array","Linked List","Both","Queue"],answer:2},
{question:"Time complexity to insert in linked list?",options:["O(1)","O(n)","O(log n)","O(n^2)"],answer:1},
{question:"DFS uses?",options:["Stack","Queue","Array","Tree"],answer:0}
],

mysql:[
{question:"MySQL stands for?",options:["Structured Query Language","My Structured Query","Multiple Query Language","Micro SQL"],answer:0},
{question:"Create database command?",options:["CREATE DATABASE db;","CREATE db;","NEW DATABASE db;","DB CREATE db;"],answer:0},
{question:"Delete database command?",options:["DROP DATABASE db;","DELETE DATABASE db;","REMOVE DATABASE db;","DESTROY DATABASE db;"],answer:0},
{question:"Show tables command?",options:["SHOW TABLES;","DISPLAY TABLES;","TABLES SHOW;","LIST TABLES;"],answer:0},
{question:"Primary key constraint?",options:["Uniquely identifies row","Allows NULL","Duplicate values","None"],answer:0},
{question:"Foreign key used for?",options:["Referencing another table","Unique values","Duplicate","Indexing"],answer:0},
{question:"SQL to insert data?",options:["INSERT INTO","ADD INTO","PUT INTO","INPUT INTO"],answer:0},
{question:"SQL to update data?",options:["UPDATE","MODIFY","CHANGE","SET"],answer:0},
{question:"SQL to delete data?",options:["DELETE FROM","REMOVE FROM","DROP FROM","ERASE FROM"],answer:0},
{question:"Select all records?",options:["SELECT * FROM table;","SELECT ALL FROM table;","SELECT ROWS table;","GET * FROM table;"],answer:0},
{question:"SQL WHERE clause?",options:["Filters records","Deletes records","Adds records","Modifies table"],answer:0},
{question:"SQL ORDER BY?",options:["Sorts records","Filters records","Adds records","Deletes records"],answer:0},
{question:"SQL LIKE operator?",options:["Pattern matching","Exact match","Random search","None"],answer:0},
{question:"SQL JOIN used for?",options:["Combine tables","Delete table","Update table","Filter data"],answer:0},
{question:"INNER JOIN returns?",options:["Matching rows","All rows","Only first row","None"],answer:0},
{question:"LEFT JOIN returns?",options:["All left + matched right","Only left","Only right","Only matched"],answer:0},
{question:"RIGHT JOIN returns?",options:["All right + matched left","Only right","Only left","Only matched"],answer:0},
{question:"Time complexity of indexing?",options:["O(log n)","O(n)","O(1)","O(n^2)"],answer:0},
{question:"SQL DISTINCT?",options:["Unique values","All values","Duplicate","Random"],answer:0},
{question:"SQL aggregate function?",options:["COUNT(), SUM(), AVG()","ADD(), SUM(), COUNT()","TOTAL(), AVG(), COUNT()","SUM(), COUNT(), MAX()"],answer:0}
]

}

// Load selected quiz
let quiz = questions[language]

// Quiz variables
let current = 0
let score = 0
let time = 15
let timer

// Load question
function loadQuestion(){

clearInterval(timer)

time = 15

timer = setInterval(function(){

document.getElementById("timer").innerText = "Time: " + time

time--

if(time < 0){
nextQuestion()
}

},1000)

let q = quiz[current]

document.getElementById("question").innerText = q.question

for(let i=0;i<4;i++){
document.getElementById("opt"+i).innerText = q.options[i]
}

}

// Check answer
function checkAnswer(opt){

if(opt === quiz[current].answer){
score++
}

nextQuestion()

}

// Next question
function nextQuestion(){

current++

if(current < quiz.length){
loadQuestion()
}
else{

localStorage.setItem("score",score)

window.location = "result.html"

}

}

// Start quiz
loadQuestion()