

const wyslij = document.querySelector('#podaj');
const wiadDo = document.querySelector('#wiadomoscDo');
const wiadZz = document.querySelector('#wiadomoscZ');

wyslij.addEventListener('click', wyslijTo);

function wyslijTo() {
let content =  wiadomoscDo.value;

if(content == '') {
    alert('wpisz coś');
}
else {
    wiadomoscZ.innerHTML = content;
    wiadomoscDo.value = '';
}
};


