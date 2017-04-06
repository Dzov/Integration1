const navitem = document.getElementsByClassName('navitem');
var select;

select = function() {
    for (var i = 0; i < navitem.length; i++) {
        navitem[i].classList.remove('selected');
        this.classList.add('selected')
    }
}

for (var i = 0; i < navitem.length; i++) {
    navitem[i].addEventListener('click', select);
}




var mdpInput = document.querySelector('.mdp').value;
var mdpValue = Number(mdpInput);
const loginBtn = document.querySelector('.seConnecterBtn');
var mdpPlaceholder = document.querySelector('.mdp').placeholder; 
var mdpCheck;
var allLetters = /^[a-zA-Z]+$/;
var letter = /[a-zA-Z]/;
var number = /[0-9]/;

mdpCheck = function () {
    for (var i = 0; i < mdpInput.length; i++) {
        if (typeof(mdpValue) == 'number') {
            console.log('true');
        }
    }
}

loginBtn.addEventListener('click', mdpCheck); 


