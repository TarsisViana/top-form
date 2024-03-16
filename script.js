const btn = document.querySelector('button');
const pwdCheck = document.querySelector('#confirm-pwd');
const pwd = document.querySelector('#pwd');
const pwdLabel = document.querySelector('label[for=pwd]');

pwdCheck.addEventListener('focusout', () => {
  if(pwdCheck.value != pwd.value){
    console.log(pwdCheck.value, pwd.value);
    pwdCheck.classList.toggle('error');
    pwd.classList.toggle('error');
    pwdLabel.classList.toggle('error');
    btn.setAttribute('disabled','');
  }else{
    btn.removeAttribute('disabled');
  }

});

