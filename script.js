let body = document.createElement('body');
let div = document.createElement('div');
let div1 = document.createElement('div');
let div2 = document.createElement('div')
let div3 = document.createElement('div');
let input = document.createElement('input');
let button = document.createElement('button');
let input1 = document.createElement('input')
input.setAttribute('id', 'question');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Напишіть питання')
button.setAttribute('onclick', 'ran()')
input1.setAttribute('id', 'answer');
input1.setAttribute('type', 'text');
input1.setAttribute('placeholder', 'Магія')

div.classList.add('pos-circle');
div1.classList.add('circle');
div2.classList.add('fon');
div3.classList.add('fon1');

 window.onload= function onload() {
    prompt('Ведіть імя');
    div.prepend(div1);
    div.prepend(button);
    div.prepend(input);
    div1.after(input1);
    button.prepend(div2);
    button.prepend(div1);
    div2.prepend(div3);
    div1.prepend(div2);
    document.body.append(div);
}
 function ran(){
    let answers = ['Так', 'Ні', 'Напевно']
    let question = document.getElementById('question').value
    if (question.includes('@') || question.includes('#') || !question.includes('?')) {
        document.getElementById('answer').value = "Інше питання";
    }
    else {
        document.getElementById('answer').value = answers[Math.floor(Math.random() * answers.length)];
    }
 }
    


