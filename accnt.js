
var mob =document.getElementById('t3'); 
var email = document.getElementById('t4');
var uname = document.getElementById('t5');
var pw = document.getElementById('t6');

// storing input from register-form
function store() {
    localStorage.setItem('mobile', mob.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('uname', uname.value);
    localStorage.setItem('pw', pw.value);
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    var storedName = localStorage.getItem('uname');
    var storedPw = localStorage.getItem('pw');

    // entered data from the login-form
    var userName = document.getElementById('t1');
    var userPw = document.getElementById('t2');

    // check if stored data from register-form is equal to data from login form
    if(userName.value !== storedName || userPw.value !== storedPw) {
        alert('ERROR');
    }else {
        alert('You are loged in.');
    }
}