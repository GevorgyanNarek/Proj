"use strict"
import myJson from './languages.json' assert {type: 'json'};



// Hamburger - Menu  start

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// Hamburger - Menu  end

// Languages start

let langChange = document.querySelectorAll('.lang-change');


let languages = document.querySelectorAll('.nav-item img');
languages.forEach(flag=>{
    flag.onclick = ()=>{
        languages.forEach(lang=>{
            if(lang.classList.contains('checked')){
                lang.classList.remove('checked');
            }
        })
        flag.classList.add('checked');
        langChange.forEach((el,ind)=>{
            if(el.innerText == ""){
                el.setAttribute('placeholder',`${myJson[flag.classList[0]][ind]}`)
            }
            else{
                el.innerText = myJson[flag.classList[0]][ind];
            }
        })
        
    }
})



// Languages end

// Mailing start
let sendCalc = document.querySelector(".modal_send");
let userName = sendCalc.parentElement.children[0];
let userTel = sendCalc.parentElement.children[2];
let userMail = sendCalc.parentElement.children[4];
let userText = sendCalc.parentElement.children[6];

console.log(sendCalc);
userTel.onfocus = (ev)=>{
  if(ev.currentTarget.value === ""){
    ev.currentTarget.value = "+ "
  }
  
}
userTel.oninput = (ev)=>{
  if(ev.data && !ev.data.match(/^[\d\s]$/g)){
    let currentIndex = ev.target.selectionStart - 1;   
    if(ev.data !== "+" || (ev.data === "+" && currentIndex !== 0)){
      ev.currentTarget.value = ev.currentTarget.value.slice(0, currentIndex) + ev.currentTarget.value.slice(currentIndex + 1)
      ev.currentTarget.nextElementSibling.style.display = "block";
      return
    }
  }
  ev.currentTarget.nextElementSibling.style.display = "none";
}
userName.oninput = (ev)=>{
  if(ev.data && !ev.data.match(/^[a-zA-Z\u0531-\u058Fа-яА-ЯёЁ\s-]$/g)){
    let currentIndex = ev.target.selectionStart - 1;
    ev.currentTarget.value = ev.currentTarget.value.slice(0, currentIndex) + ev.currentTarget.value.slice(currentIndex + 1)
    ev.currentTarget.nextElementSibling.style.display = "block";
    return
  }
  ev.currentTarget.nextElementSibling.style.display = "none";

}
userMail.oninput = (ev)=>{
  if(ev.data === "@"){
    let currentIndex = ev.target.selectionStart - 1;
    if(ev.currentTarget.value.indexOf("@") !== ev.currentTarget.value.lastIndexOf("@")){
      ev.currentTarget.value = ev.currentTarget.value.slice(0, currentIndex) + ev.currentTarget.value.slice(currentIndex + 1)
      ev.currentTarget.nextElementSibling.style.display = "block";
      return
    }
  }
  ev.currentTarget.nextElementSibling.style.display = "none";
  
}
    

sendCalc.addEventListener('click', function () {
    if(!userTel.value  || !userName.value || !userText.value){
      sendCalc.nextElementSibling.nextElementSibling.style.display = "block"
      return
    }else if(!userMail.value.match(/^[^@]+@[^@]+$/g)){
      userMail.nextElementSibling.style.display = "block";
      return
    }
    const data = {
      recipient: 'erik.harutyunyan.2001@bk.ru',
      subject: 'Նոր Հայտ',
      message: `
               Անուն:         ${userName}
               Հեռախոսահամար: ${userTel}
               Էլ․ Հասցե:     ${userMail}
               Տեքստ։         ${userText}
               `
    };

    
    userTel.value = "";
    userName.value = "";
    userMail.value = "";
    userText.value = "";
    sendCalc.nextElementSibling.style.display = "block";
    sendCalc.nextElementSibling.nextElementSibling.style.display = "none"


  // Sending the POST request using fetch()
  fetch('send_mail.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // Convert data to JSON format if needed
  })
    .then(response => response.text()) // Convert the response to text format
    .then(responseText => {
      // Process the response from send_mail.php (if needed)
      console.log(responseText);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });

//   Mailing end
