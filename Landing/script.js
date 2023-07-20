// Scroll start
let iconToTop = document.querySelector('.arrow'); 
    document.body.onscroll = (e)=>{
        let scrollPage = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollPage > 200){
            iconToTop.style.display = 'flex';
        }
        else{
            iconToTop.style.display = 'none';
        }
    }


// Scroll end



// Modal for buy start

let buys =  document.querySelectorAll(".apranqflexbox_1 button");
let modalBuy = document.querySelector(".open");
let modalClose = document.querySelector(".bacvox > img");
let modalInfo = document.querySelector(".calc_reck2");


buys.forEach(el=>{
    el.onclick = (e)=>{
        modalBuy.style.scale = "1";
        modalInfo.children[0].src = e.currentTarget.parentElement.parentElement.children[1].src;
        modalInfo.children[3].innerText = e.currentTarget.parentElement.parentElement.children[0].innerText;
        modalInfo.children[4].children[0].innerText = e.currentTarget.parentElement.children[0].children[0].innerText;
        modalInfo.children[8].children[0].innerText = e.currentTarget.parentElement.children[0].children[0].innerText;
    }
    
})

modalClose.onclick = ()=>{
    modalBuy.style.scale = "0";
}

// Modal for buy end




// see All start

let seeAll =  document.querySelectorAll(".see_all");
let cartsBox = document.querySelectorAll(".apranqner_box1");

seeAll.forEach((el,ind)=>{
    el.onclick = ()=>{
        if(document.body.offsetWidth > 950){
            if(el.innerText === 'Смотреть всё'){
                let contCarts = cartsBox[ind].querySelectorAll('.apranqner_cont');
                contCarts.forEach(el=>{
                    el.style.display = 'flex';
                })
                el.innerText = 'Скрыть';
            }
            else{
                let contCarts = cartsBox[ind].querySelectorAll('.apranqner_cont');
                contCarts.forEach(el=>{
                    el.style.display = 'none';
                })
                contCarts[0].style.display = 'flex';
                el.innerText = 'Смотреть всё';
                cartsBox[ind].scrollIntoView();
            }
        } 
        else{
            if(el.innerText === 'Смотреть всё'){
                let contCarts = cartsBox[ind].querySelectorAll('.apranqner_cont');
                let cartsInn = cartsBox[ind].querySelectorAll('.apranq_flexbox');
                contCarts.forEach(el=>{
                    el.style.display = 'flex';
                })
                cartsInn.forEach(cart=>{
                    cart.style.display = 'flex';
                })

                el.innerText = 'Скрыть';
            }
            else{
                let apranqFlexbox = cartsBox[ind].querySelectorAll('.apranq_flexbox');
                let cartBlock = cartsBox[ind].querySelectorAll('.cart_block');

                apranqFlexbox.forEach(cart=>{
                    cart.style.display = 'none';
                })

                cartBlock.forEach(mediaCart =>{
                    mediaCart.style.display = 'flex';
                })


                el.innerText = 'Смотреть всё';
                cartsBox[ind].scrollIntoView();
            }
        }
    }
})

// // see All end


// calculator start

let minusBtn = document.querySelector(".minus");
let plusBtn = document.querySelector(".plus");
let inpNumber = document.querySelector('.text');
let price = document.querySelector('.el_final_price');
let isChecked = document.querySelector('.check');
let finalCount = document.querySelector('.final_count');
let lastPrice = document.querySelector('.last_price');
let priceDot = document.querySelector('.price');

minusBtn.onclick = ()=>{
    if(inpNumber.value!=1){
        inpNumber.value--;
        if(isChecked.checked){
            price.innerHTML = 39750 + (+inpNumber.value * 1550);
            finalCount.innerText = Math.floor(inpNumber.value / 3) || 1;
            priceDot.innerText = (+finalCount.innerHTML) * 5000;
            lastPrice.innerHTML = (+price.innerHTML) + (+priceDot.innerHTML);
        }
        else{
            price.innerHTML = 39750 + inpNumber.value * 1550;
            priceDot.innerHTML = '0';
            lastPrice.innerHTML = price.innerHTML;
        }
    }
}

plusBtn.onclick = ()=>{
    inpNumber.value++;
    if(isChecked.checked){
        price.innerHTML = 39750 + inpNumber.value * 1550 ;
        finalCount.innerText = Math.floor(inpNumber.value / 3) || 1;
        priceDot.innerHTML = +finalCount.innerText * 5000;
        lastPrice.innerHTML = +price.innerHTML + (+priceDot.innerHTML);
    }
    else{
        price.innerHTML = 39750 + inpNumber.value * 1550;
        priceDot.innerHTML = '0';
        lastPrice.innerHTML = price.innerHTML;
    }
}

inpNumber.oninput = ()=>{
    if(inpNumber.value<1){
        inpNumber.value = 1;
    }
    if(isChecked.checked){
        price.innerHTML = 39750 + inpNumber.value * 1550 ;
        finalCount.innerText = Math.floor(inpNumber.value / 3) || 1;
        priceDot.innerHTML = +finalCount.innerText * 5000;
        lastPrice.innerHTML = +price.innerHTML + (+priceDot.innerHTML);
    }
    else{
        price.innerHTML = 39750 + inpNumber.value * 1550;
        priceDot.innerHTML = '0';
        lastPrice.innerHTML = price.innerHTML;
    }
}

isChecked.oninput = ()=>{
    if(isChecked.checked){
        price.innerHTML = 39750 + inpNumber.value * 1550 ;
        finalCount.innerText = Math.floor(inpNumber.value / 3) || 1;
        priceDot.innerHTML = +finalCount.innerText * 5000;
        lastPrice.innerHTML = +price.innerHTML + (+priceDot.innerHTML);
    }
    else{
        price.innerHTML = 39750 + inpNumber.value * 1550;
        finalCount.innerText = '0';
        priceDot.innerHTML = '0';
        lastPrice.innerHTML = price.innerHTML;
    }
}

// calculator end


// feedback start

let sendCalc = document.querySelector(".send-calc");


sendCalc.addEventListener('click', function () {
    let phoneNumber = sendCalc.parentElement.children[1].value;
    let userName = sendCalc.parentElement.children[0].value;
    let numberText = document.querySelector('.numberText');
    let opora = document.querySelector('.opora');

    var mailOptions = {
      to: 'edmovsesyan1@gmail.com',
      subject: 'Пример темы',
      text: `
             Номер: ${phoneNumber}
             Имя: ${userName}
             Прокладка газопровода: ${numberText.value}м
             Точка опоры։ ${opora.innerText}шт
             `
    };
  
    fetch('http://localhost:5050/send-email', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(mailOptions)
})
  .then(response => response.text())
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });
  });


let modalSend = document.querySelector('.modal_send');
  modalSend.addEventListener('click', function () {
    modalBuy.style.scale = "0";
    let phoneNumber = modalSend.parentElement.children[1].value;
    let userName = modalSend.parentElement.children[0].value;
    let model = document.querySelector('.modal_model');
    let modelPrice = document.querySelector('.model_price');

    var mailOptions = {
      to: 'edmovsesyan1@gmail.com',
      subject: 'Пример темы',
      text: `
             Номер: ${phoneNumber}
             Имя: ${userName}
             Модель: ${model.innerText}м
             Стоимость։ ${modelPrice.innerText}р
             `
    };
  
    fetch('http://localhost:5050/send-email', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(mailOptions)
})
  .then(response => response.text())
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });
  });