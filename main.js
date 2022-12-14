let count1 = document.querySelector('.txt')
console.log(count1);

count1.style.fontSize = '30px'

let centertext = document.querySelector('.box')
console.log(centertext);

document.body.style.cssText = `
text-align: center;
place-items: center;
display:flex ;
place-content: center;
`
centertext.style.border = '1px solid black '
centertext.style.height = '175px'
centertext.style.width = '290px'

let buttons = document.querySelector('.btn1')
console.log(buttons);
buttons.style.height = '30px'
buttons.style.width = '70px'

let button = document.querySelector('.btn2')
console.log(button);
button.style.height = '30px'
button.style.width = '70px'


let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let int = document.querySelector('.numb')


let integer = 0;

btn1.addEventListener("click", function() {
    integer -= 1;
    int.textContent = integer;
})
btn2.addEventListener("click", function() {
    integer += 1;
    int.textContent = integer;
})