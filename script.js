const btn = document.querySelector('button');
const pwdCheck = document.querySelector('#confirm-pwd');
const pwd = document.querySelector('#pwd');
const pwdLabel = document.querySelector('label[for=pwd]');


pwdCheck.addEventListener('focusout', () => {
  if(pwdCheck.value != pwd.value){
    console.log(pwdCheck.getAttribute('class'))
    console.log(pwdCheck.value, pwd.value);
    pwdCheck.setAttribute('class','error');
    pwd.setAttribute('class','error');
    pwdLabel.setAttribute('class','error');
    btn.setAttribute('disabled','');
  }else{
    pwdCheck.removeAttribute('class');
    pwd.removeAttribute('class');
    pwdLabel.removeAttribute('class');
    btn.removeAttribute('disabled');
  }

});

