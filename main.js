

const wyslij = document.querySelector('#podaj');
const wiadDo = document.querySelector('#wiadomoscDo');
const wiadZz = document.querySelector('#wiadomoscZ');

wyslij.addEventListener('click', wyslijTo);

function wyslijTo() {
let content =  wiadDo.value; //wiadomoscDo.value

if(content == '') {
    alert('wpisz coś');
}
else {
    wiadZz.innerHTML = content; //wiadomoscZ.innerHTML
    
    wiadDo.value = ''; //wiadomoscDo.value
}
};


console.log(typeof container)