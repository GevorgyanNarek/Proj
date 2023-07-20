let heartText = document.querySelector('.information h2');
let inp = document.querySelector('.inp');
let text = 'Մուտքագրեք ապրանքի անունը կամ ապրանքանիշը';
let x = 0;
let y = text.length;

function write() {
    let set = setInterval(() => {
        let a = text.slice(0, x);
        inp.placeholder = a;
        x++;
        if (inp.placeholder == 'Մուտքագրեք ապրանքի անունը կամ ապրանքանիշը') {
            a = text.slice(0, y);
            inp.placeholder = a;
            y--;
            if (inp.placeholder == '') {
                y = text.length;
                x = 0;
                clearInterval(set);
                setTimeout(() => {
                    write()
                }, 400)
            }
        }
    }, 100)
}
write()




let text2 = 'Քո սրտի սուպերմարկետը Հայաստանում';
let x2 = 0;
let y2 = text2.length;
setInterval(() => {
    let a2 = text2.slice(0, x2);
    heartText.innerText = a2;
    x2++;
}, 100)

let slidelist = ['img/slide1.jpg', 'img/slide2.jpg', 'img/slide3.png', 'img/slide4.webp', 'img/slide5.jpg','img/slide6.jpg','img/slide7.jpg','img/slide8.jpeg','img/slide9.webp','img/slide10.jpg','img/slide11.jpg','img/slide12.webp','img/slide13.jpg'];
let slider = document.querySelector('.slider');
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
let current = 0;
slider.style.background = `url(${slidelist[4]})`
setTimeout(() => {
    setInterval(() => {
        current++;
        if (current > slidelist.length - 1) {
            current = 0
        }
        slider.style.background = `url(${slidelist[current]})`
        slider.style.backgroundSize = 'cover'
    }, 6000)
}, 1200)

slider.style.backgroundSize = 'cover'
next.onclick = () => {
    current++
    if (current > slidelist.length - 1) {
        current = 0
    }
    slider.style.background = `url(${slidelist[current]})`
    slider.style.backgroundSize = 'cover'
}

prev.onclick = () => {
    current--
    if (current < 0) {
        current = slidelist.length - 1
    }
    slider.style.background = `url(${slidelist[current]})`
    slider.style.backgroundSize = 'cover'
}

let deliveryCont = document.querySelector('.delivery-cont');
let times2 = document.querySelector('.times2');
let deliveryicon = document.querySelector('.deliveryicon');

deliveryicon.onclick = () => {
    deliveryCont.style.display = 'flex';
    times2.onclick = () => {
        deliveryCont.style.display = 'none';
    }
}


let sliderContainer = document.querySelector('.slider-container'); 
let cards = document.querySelector('.cards'); 
let isPressDown = false; 
let cursorXspace; 
 
sliderContainer.onmousedown = e => { 
    isPressDown = true; 
    cursorXspace = e.offsetX - cards.offsetLeft; 
    document.body.style.cursor = 'grabbing' 
} 
 
sliderContainer.onmouseover = () => { 
    document.body.style.cursor = 'grab' 
} 
 
sliderContainer.onmouseout = () => { 
    document.body.style.cursor = 'default' 
} 
 
sliderContainer.onmouseup = e => { 
    isPressDown = false; 
    document.body.style.cursor = 'grab' 
} 
 
sliderContainer.onmousemove = e => { 
    if (!isPressDown) return; 
    e.preventDefault(); 
    cards.style.left = `${e.offsetX - cursorXspace}px`; 
    cordinates() 
} 
 
function cordinates() { 
    let containerRect = sliderContainer.getBoundingClientRect(); 
    let cardsRect = cards.getBoundingClientRect(); 
    if(parseInt(cards.style.left ) > 0) { 
        cards.style.left = 0 
    } 
    else if(cardsRect.right < containerRect.right) { 
        cards.style.left = `-${cardsRect.width - containerRect.width}px` 
    } 
}

let weight = document.querySelectorAll('.money');
let money = document.querySelectorAll('.weight');
let price = document.querySelectorAll('.price');
let cart = document.querySelector('.cart');
let addTocart = document.querySelectorAll('.add-to-cart');
let countCart = document.querySelector('.countCart');
let totalCount = document.querySelector('.total-count');
let deletebutton;
let sum = 0;
let cartIcons = document.querySelector('.cart-icons');
let kgName = document.querySelectorAll('.kg');

cartIcons.onclick = () => {
    if (!cart.classList.contains('showBlockes') && !totalCount.classList.contains('showBlockes')) {
        cart.classList.add('showBlockes')
        totalCount.classList.add('showBlockes')
    } else {
        cart.classList.remove('showBlockes')
        totalCount.classList.remove('showBlockes')
    }
}
let data
weight.forEach((item, index) => {
    item.oninput = () => {
        if (item.value <= 1) {
            item.value = 1
        }
        data = price[index].getAttribute('data');
        money[index].value = item.value * parseInt(data)
    }
    addTocart[index].onclick = (e) => {
        let button = e.target;
        let image = e.target.parentElement.children[0].children[0].src;
        let name = e.target.parentElement.children[1].innerText
        if (money[index].value !== '' && !cart.innerHTML.includes(name)) {
            cart.innerHTML += `<div class="cart-item"><div class="img-cart" style="background:url(${image})"></div><h2>${name}</h2><h3>${item.value}${kgName[index].innerText}</h3><p>${money[index].value}դր</p><span>${price[index].innerText}</span><button class="delete"><i class="fa fa-times"></i></button></div>`
            countCart.innerText++;
            sum += +money[index].value
            totalCount.innerText = `Ընդհանուր Վճարման գումարը ${sum} դրամ`
            deletebutton = document.querySelectorAll('.delete');
            money[index].placeholder = data;
            money[index].value = ''
            item.value = 0;
            deletebutton.forEach((del, ind) => {
                del.onclick = function (e) {
                    this.parentElement.remove()
                    countCart.innerText--;
                    sum -= parseInt(this.parentElement.children[3].innerText);
                    totalCount.innerText = `Ընդհանուր Վճարման գումարը ${sum} դրամ`
                }
            })
        }
        else {
        money[index].placeholder = data;
            money[index].value = ''
            item.value = 0;
        alert('Տվյալ ապրանքը զամբյուղում արդեն առկա է');
        
        return false
        }
    }
})
let prods = [
   [{
            picture: 'img/imagess/Bounty.png',
            name: 'Բաունտի',
            data: 280,
            price: 280
        },
        {
            picture: 'img/imagess/chocopie.jpg',
            name: 'Չոկո պայ Բալով',
            data: 880,
            price: 880
        },
        {
            picture: 'img/imagess/chocopie1.jpg',
            name: 'Չոկո պայ Դարկ',
            data: 880,
            price: 880
        },
        {
            picture: 'img/imagess/chocopie2.jpg',
            name: 'Չոկո պայ Հատապտղային',
            data: 880,
            price: 880
        },
        {
            picture: 'img/imagess/chocopie3.jpg',
            name: 'Չոկո պայ',
            data: 880,
            price: 880
        },
        {
            picture: 'img/imagess/chocopie4.jpg',
            name: 'Չոկո պայ Բանանով',
            data: 880,
            price: 880
        },
        {
            picture: 'img/imagess/kitkat2.jpg',
            name: 'Կիտ կատ',
            data: 300,
            price: 300
        },
        {
            picture: 'img/imagess/mars.png',
            name: 'Մարս',
            data: 280,
            price: 280
        },
        {
            picture: 'img/imagess/milka2.jpg',
            name: 'Միլկա',
            data: 280,
            price: 280
        },
        {
            picture: 'img/imagess/twix.jpg',
            name: 'Տվիքս',
            data: 280,
            price: 280
        },
        {
            picture: 'img/imagess/nestle.jpg',
            name: 'Նեսթլե շոկոլադ',
            data: 650,
            price: 650
        },
        {
            picture: 'img/imagess/oreo.jpg',
            name: 'Օրեո',
            data: 330,
            price: 330
        },
        {
            picture: 'img/imagess/snikers.webp',
            name: 'Սնիքերս',
            data: 280,
            price: 280
        },
        {
            picture: 'img/imagess/milkyway.webp',
            name: 'Միլկիվեյ',
            data: 200,
            price: 200
        },
        {
            picture: 'img/imagess/nestle3.jpg',
            name: 'Նեսթլե մուգ շոկոլադ',
            data: 1100,
            price: 1100
        }, ],

    [{
            picture: 'img/aplipixa.png',
            name: 'Չիչխան',
            data: 450,
            price: 450
        },
        {
            picture: 'img/banana.png',
            name: 'Բանան',
            data: 640,
            price: 640
        },
        {
            picture: 'img/chgitem.png',
            name: 'Պապայա',
            data: 820,
            price: 820
        },
        {
            picture: 'img/dzmeruk.png',
            name: 'Ձմերուկ',
            data: 340,
            price: 340
        },
        {
            picture: 'img/kiwi.png',
            name: 'Կիվի',
            data: 400,
            price: 400
        },
        {
            picture: 'img/lemon.png',
            name: 'Լիմոն',
            data: 150,
            price: 150
        },
        {
            picture: 'img/malina.png',
            name: 'Ազնվամորի',
            data: 700,
            price: 700
        },
        {
            picture: 'img/mango.png',
            name: 'Մանգո',
            data: 850,
            price: 850
        },
        {
            picture: 'img/naring.png',
            name: 'Նարինջ',
            data: 650,
            price: 650
        },
        {
            picture: 'img/nur.png',
            name: 'Նուռ',
            data: 460,
            price: 460
        },
        {
            picture: 'img/sex.png',
            name: 'Սեխ',
            data: 300,
            price: 300
        },
        {
            picture: 'img/smarodina.png',
            name: 'Հաղարջ',
            data: 780,
            price: 780
        },
        {
            picture: 'img/turinjk.png',
            name: 'Թուրինջ',
            data: 800,
            price: 800
        },
        {
            picture: 'img/xaxox.png',
            name: 'Խաղող',
            data: 550,
            price: 550
        },
        {
            picture: 'img/xndzor.png',
            name: 'Խնձոր',
            data: 440,
            price: 440
        }, ],
    [{
            picture: 'img/vegatables/1.png',
            name: 'Կաղամբ',
            data: 340,
            price: 340
        },
        {
            picture: 'img/vegatables/2.png',
            name: 'Սոխ',
            data: 180,
            price: 180
        },
        {
            picture: 'img/vegatables/3.png',
            name: 'Սմբուկ',
            data: 360,
            price: 360
        },
        {
            picture: 'img/vegatables/4.png',
            name: 'բողկ',
            data: 220,
            price: 220
        },
        {
            picture: 'img/vegatables/5.png',
            name: 'Սխտոր',
            data: 150,
            price: 150
        },
        {
            picture: 'img/vegatables/6.png',
            name: 'Բուլղարական պղպեղ',
            data: 900,
            price: 900
        },
        {
            picture: 'img/vegatables/7.png',
            name: 'Կծու պղպեղ',
            data: 180,
            price: 180
        },
        {
            picture: 'img/vegatables/8.png',
            name: 'Սունկ',
            data: 900,
            price: 900
        },
        {
            picture: 'img/vegatables/10.png',
            name: 'Վարունգ',
            data: 610,
            price: 610
        },
        {
            picture: 'img/vegatables/9.png',
            name: 'Լոլիկ',
            data: 680,
            price: 680
        },
        {
            picture: 'img/vegatables/11.png',
            name: 'Գազար',
            data: 270,
            price: 270
        },
        {
            picture: 'img/vegatables/12.png',
            name: 'Կաբարչկա',
            data: 600,
            price: 600
        },
        {
            picture: 'img/vegatables/13.png',
            name: 'Դդում',
            data: 850,
            price: 850
        },
        {
            picture: 'img/vegatables/14.png',
            name: 'Եգիպտացորեն',
            data: 640,
            price: 640
        },
        {
            picture: 'img/vegatables/15.png',
            name: 'Կարտոֆիլ',
            data: 340,
            price: 340
        }, ],

    [{
            picture: 'img/drinks/1.webp',
            name: 'Cruzan',
            data: 12000,
            price: 12000
        },
        {
            picture: 'img/drinks/2.webp',
            name: 'Three Spirit',
            data: 15000,
            price: 15000
        },
        {
            picture: 'img/drinks/3.webp',
            name: 'Lyres',
            data: 20000,
            price: 20000
        },
        {
            picture: 'img/drinks/4.png',
            name: 'Effen',
            data: 12500,
            price: 12500
        },
        {
            picture: 'img/drinks/5.webp',
            name: 'Aloha',
            data: 4000,
            price: 4000
        },
        {
            picture: 'img/drinks/6.webp',
            name: 'VK Fruit Drink',
            data: 1800,
            price: 1800
        },
        {
            picture: 'img/drinks/7.webp',
            name: 'Gruvi dry seco',
            data: 3000,
            price: 3000
        },
        {
            picture: 'img/drinks/8.webp',
            name: 'Intruder',
            data: 6000,
            price: 6000
        },
        {
            picture: 'img/drinks/9.png',
            name: 'Knop greek',
            data: 14000,
            price: 14000
        },
        {
            picture: 'img/drinks/10.png',
            name: 'Canerock',
            data: 35000,
            price: 35000
        },
        {
            picture: 'img/drinks/11.png',
            name: 'Cruzan',
            data: 14000,
            price: 14000
        },
        {
            picture: 'img/drinks/12.webp',
            name: 'Khampes',
            data: 22000,
            price: 22000
        },
        {
            picture: 'img/drinks/13.webp',
            name: 'Carbon Barrel',
            data: 11000,
            price: 11000
        },
        {
            picture: 'img/drinks/14.webp',
            name: 'Spicy Ginger',
            data: 10000,
            price: 10000
        },
        {
            picture: 'img/drinks/15.png',
            name: 'WKD Coctails',
            data: 7000,
            price: 7000
        }, ],


     [{
            picture: 'img/cake/cake1.jpg',
            name: 'Մրգային',
            data: 12000,
            price: 12000
        },
        {
            picture: 'img/cake/cake2.jpeg',
            name: 'Բանան,ելակ',
            data: 5000,
            price: 5000
        },
        {
            picture: 'img/cake/cake3.jpg',
            name: 'Կեքս',
            data: 200,
            price: 200
        },
        {
            picture: 'img/cake/cake4.jpg',
            name: 'Հատապտղային',
            data: 12500,
            price: 12500
        },
        {
            picture: 'img/cake/cake5.jpg',
            name: 'Հարսանեկան',
            data: 80000,
            price: 80000
        },
        {
            picture: 'img/cake/cake6.jpg',
            name: 'Յուրահատւկ',
            data: 18000,
            price: 18000
        },
        {
            picture: 'img/cake/cake7.jpg',
            name: 'Հարսանեկան',
            data: 67000,
            price: 67000
        },
        {
            picture: 'img/cake/cake8.jpg',
            name: 'Ելակով',
            data: 6000,
            price: 6000
        },
        {
            picture: 'img/cake/cake9.jpg',
            name: 'Բանանով',
            data: 19000,
            price: 19000
        },
        {
            picture: 'img/cake/cake10.jpg',
            name: 'Բիսկվիթային',
            data: 3500,
            price: 3500
        },
        {
            picture: 'img/cake/cake11.jpg',
            name: 'Մանկական',
            data: 12000,
            price: 12000
        },
        {
            picture: 'img/cake/cake12.jpg',
            name: 'Նվեր',
            data: 22000,
            price: 22000
        },
        {
            picture: 'img/cake/cake13.png',
            name: 'Շոկոլադային',
            data: 11000,
            price: 11000
        },
        {
            picture: 'img/cake/cake14.jpg',
            name: 'Շոկոլադային',
            data: 10000,
            price: 10000
        },
        {
            picture: 'img/cake/cake15.jpg',
            name: 'Մանկական',
            data: 17000,
            price: 17000
        }, ],


     [{
            picture: 'img/ice/ice1.webp',
            name: 'Դեղծի',
            data: 120,
            price: 120
        },
        {
            picture: 'img/ice/ice2.png',
            name: 'Վանիլային',
            data: 100,
            price: 100
        },
        {
            picture: 'img/ice/ice3.jpg',
            name: 'Վանիլ,ելակ,շոկոլադ',
            data: 2000,
            price: 2000
        },
        {
            picture: 'img/ice/ice4.jpg',
            name: 'Դեղծի',
            data: 150,
            price: 150
        },
        {
            picture: 'img/ice/ice5.jpg',
            name: 'Բաբլ',
            data: 130,
            price: 130
        },
        {
            picture: 'img/ice/ice6.jpg',
            name: 'Վանիլ,ելակ,շոկոլադ',
            data: 1800,
            price: 1800
        },
        {
            picture: 'img/ice/ice7.jpg',
            name: 'Վաֆլիով',
            data: 300,
            price: 300
        },
        {
            picture: 'img/ice/ice8.jpg',
            name: 'Ելակով',
            data: 600,
            price: 600
        },
        {
            picture: 'img/ice/ice9.jpg',
            name: 'Օրեո',
            data: 1400,
            price: 1400
        },
        {
            picture: 'img/ice/ice10.webp',
            name: 'Վանիլ,ելակ,բանան',
            data: 3500,
            price: 3500
        },
        {
            picture: 'img/ice/ice11.jpg',
            name: 'Ավոկադո',
            data: 1750,
            price: 1750
        },
        {
            picture: 'img/ice/ice12.jpg',
            name: 'Ելակ',
            data: 220,
            price: 220
        },
        {
            picture: 'img/ice/ice13.jpg',
            name: 'Վանիլային',
            data: 110,
            price: 110
        },
        {
            picture: 'img/ice/ice14.jpg',
            name: 'Վանիլային',
            data: 110,
            price: 110
        },
        {
            picture: 'img/ice/ice15.png',
            name: 'Մեղրային',
            data: 700,
            price: 700
        }, ],

     [{
            picture: 'img/coffee/coffee1.png',
            name: 'Ռոյալ Արմենիա սև',
            data: 500,
            price: 500
        },
        {
            picture: 'img/coffee/coffee2.jpg',
            name: 'Ռոյալ Արմենիա էլեգանտ',
            data: 500,
            price: 500
        },
        {
            picture: 'img/coffee/coffee3.jpg',
            name: 'Ռոյալ Արմենիա լուծվող',
            data: 500,
            price: 500
        },
        {
            picture: 'img/coffee/coffee4.jpg',
            name: 'Ռոյալ Արմենիա թունդ',
            data: 500,
            price: 500
        },
        {
            picture: 'img/coffee/coffee5.jpg',
            name: 'Արաբիկա',
            data: 1200,
            price: 1200
        },
        {
            picture: 'img/coffee/coffee6.jpg',
            name: 'Լավ Ազզա',
            data: 1800,
            price: 1800
        },
        {
            picture: 'img/coffee/coffee7.jpg',
            name: 'Լավ Ազզա սեվ',
            data: 2000,
            price: 2000
        },
        {
            picture: 'img/coffee/coffee8.png',
            name: 'Կուրտիս',
            data: 650,
            price: 650
        },
        {
            picture: 'img/coffee/coffee9.jpg',
            name: 'Ջարդին',
            data: 1400,
            price: 1400
        },
        {
            picture: 'img/coffee/coffee10.jpg',
            name: 'Գրինֆիլդ',
            data: 800,
            price: 800
        },
        {
            picture: 'img/coffee/coffee11.jpg',
            name: 'Նեսկաֆե',
            data: 1500,
            price: 1500
        },
        {
            picture: 'img/coffee/coffee12.jpg',
            name: 'Ռոյալ Արմենիա լուծվող',
            data: 1200,
            price: 1200
        },
        {
            picture: 'img/coffee/coffee13.jpg',
            name: 'Գրինֆիլդ',
            data: 800,
            price: 800
        },
        {
            picture: 'img/coffee/coffee14.jpg',
            name: 'Լիպտոն',
            data: 420,
            price: 420
        },
        {
            picture: 'img/coffee/coffee15.jpg',
            name: 'Սեվ քարտ',
            data: 1000,
            price: 1000
        }, ],

     [{
            picture: 'img/fish/fish1.jpg',
            name: 'Իշխան',
            data: 12000,
            price: 12000
        },
        {
            picture: 'img/fish/fish2.jpg',
            name: 'Ծովամթերք թարթիչ',
            data: 12000,
            price: 12000
        },
        {
            picture: 'img/fish/fish3.jpg',
            name: 'Սիգա',
            data: 12000,
            price: 12000
        },
        {
            picture: 'img/fish/fish4.jpg',
            name: 'Ձկան ֆիլե',
            data: 12000,
            price: 12000
        },
        {
            picture: 'img/fish/fish5.jpg',
            name: 'Ծովամթերք թարթիչ',
            data: 12000,
            price: 12000
        },
        {
            picture: 'img/fish/fish6.jpg',
            name: 'Փոքռիկ զուկ',
            data: 12000,
            price: 12000
        },
        {
            picture: 'img/fish/fish7.jpg',
            name: 'Պնդաճակատ',
            data: 12000,
            price: 12000
        },
        {
            picture: 'img/fish/fish8.jpg',
            name: 'Կռաբ',
            data: 12000,
            price: 12000
        },
        {
            picture: 'img/fish/fish9.jpg',
            name: 'Սուշի ձկնկիթով',
            data: 12000,
            price: 12000
        },
        {
            picture: 'img/fish/fish10.png',
            name: 'Ձկան ֆիլե',
            data: 12000,
            price: 12000
        },
        {
            picture: 'img/fish/fish111.jpg',
            name: 'Տապակա սուշի',
            data: 12000,
            price: 12000
        },
        {
            picture: 'img/fish/fish12.jpg',
            name: 'Սուշի սեթ',
            data: 12000,
            price: 12000
        },
        {
            picture: 'img/fish/fish13.jpg',
            name: 'Սուշի պղպեղով',
            data: 12000,
            price: 12000
        },
        {
            picture: 'img/fish/fish14.jpg',
            name: 'Պանրով սուշի',
            data: 12000,
            price: 12000
        },
        {
            picture: 'img/fish/fish15.webp',
            name: 'Սուշի սեթ',
            data: 12000,
            price: 12000
        }, ],

    [{
            picture: 'img/pet/pet1.webp',
            name: 'Little one',
            data: 5990,
            price: 5990
        },
        {
            picture: 'img/pet/pet2.jpg',
            name: 'Lolo pets',
            data: 5450,
            price: 5450
        },
        {
            picture: 'img/pet/pet3.jpg',
            name: 'Vital Bite',
            data: 1350,
            price: 1350
        },
        {
            picture: 'img/pet/pet4.png',
            name: 'Lamb',
            data: 990,
            price: 990
        },
        {
            picture: 'img/pet/pet5.webp',
            name: 'Pedigree',
            data: 1350,
            price: 1350
        },
        {
            picture: 'img/pet/pet6.jpg',
            name: 'Chicken & Liver',
            data: 590,
            price: 590
        },
        {
            picture: 'img/pet/pet7.jpg',
            name: 'Miglior Cane',
            data: 9900,
            price: 9900
        },
        {
            picture: 'img/pet/pet8.png',
            name: 'Chicken adult',
            data: 790,
            price: 790
        },
        {
            picture: 'img/pet/pet9.png',
            name: 'Light',
            data: 990,
            price: 990
        },
        {
            picture: 'img/pet/pet10.png',
            name: 'Vegetable & rice adult',
            data: 890,
            price: 890
        },
        {
            picture: 'img/pet/pet11.jpg',
            name: 'Nulo',
            data: 16500,
            price: 16500
        },
        {
            picture: 'img/pet/pet12.jpg',
            name: 'Pedigree',
            data: 6700,
            price: 6700
        },
        {
            picture: 'img/pet/pet13.jpg',
            name: 'Chappi',
            data: 12000,
            price: 12000
        },
        {
            picture: 'img/pet/pet14.jpg',
            name: 'Hills',
            data: 8870,
            price: 8870
        },
        {
            picture: 'img/pet/pet15.jpg',
            name: 'Vegetables & chicken adult',
            data: 4550,
            price: 4550
        }, ],

    [{
            picture: 'img/npar/npar1.jpg',
            name: 'Ձավար',
            data: 1200,
            price: 1200
        },
        {
            picture: 'img/npar/npar2.jpg',
            name: 'Ալյուր',
            data: 980,
            price: 980
        },
        {
            picture: 'img/npar/npar3.jpg',
            name: 'Ցորենի ձավար',
            data: 600,
            price: 600
        },
        {
            picture: 'img/npar/npar4.webp',
            name: 'Բրինձ',
            data: 730,
            price: 730
        },
        {
            picture: 'img/npar/npar5.jpg',
            name: 'Ոլոռ',
            data: 820,
            price: 820
        },
        {
            picture: 'img/npar/npar6.jpg',
            name: 'Հնդկաձավար',
            data: 590,
            price: 590
        },
        {
            picture: 'img/npar/npar7.jpg',
            name: 'Սիսեռ',
            data: 480,
            price: 480
        },
        {
            picture: 'img/npar/npar8.jpg',
            name: 'Ոսպ',
            data: 790,
            price: 790
        },
        {
            picture: 'img/npar/npar9.jpeg',
            name: 'Կանաչ ոլոռ',
            data: 990,
            price: 990
        },
        {
            picture: 'img/npar/npar10.jpg',
            name: 'Ոսպ',
            data: 890,
            price: 890
        },
        {
            picture: 'img/npar/npar11.jpg',
            name: 'Ալյուր',
            data: 890,
            price: 890
        },
        {
            picture: 'img/npar/npar12.jpg',
            name: 'Ալյուր',
            data: 820,
            price: 820
        },
        {
            picture: 'img/npar/npar13.jpg',
            name: 'Ալյուր',
            data: 1000,
            price: 1000
        },
        {
            picture: 'img/npar/npar14.jpg',
            name: 'Սև պղպեղ',
            data: 250,
            price: 250
        },
        {
            picture: 'img/npar/npar15.jpg',
            name: 'Կարմիր պղպեղ',
            data: 250,
            price: 250
        }, ],

      [{
            picture: 'img/hac/hac1.jpg',
            name: 'Սև հաց',
            data: 700,
            price: 700
        },
        {
            picture: 'img/hac/hac2.png',
            name: 'Բուխանկա',
            data: 150,
            price: 150
        },
        {
            picture: 'img/hac/hac3.jpg',
            name: 'Բատոն',
            data: 200,
            price: 200
        },
        {
            picture: 'img/hac/hac4.webp',
            name: 'Սև հաց',
            data: 150,
            price: 150
        },
        {
            picture: 'img/hac/hac5.webp',
            name: 'Բատոն',
            data: 200,
            price: 200
        },
        {
            picture: 'img/hac/hac6.jpg',
            name: 'Բուլկի',
            data: 100,
            price: 100
        },
        {
            picture: 'img/hac/hac7.jpg',
            name: 'Դիետիկ հաց',
            data: 670,
            price: 670
        },
        {
            picture: 'img/hac/hac8.jpg',
            name: 'Դիետիկ բատոն',
            data: 790,
            price: 790
        },
        {
            picture: 'img/hac/hac9.png',
            name: 'Սիրտ բուլկի',
            data: 120,
            price: 120
        },
        {
            picture: 'img/hac/hac10.jpg',
            name: 'Կռուասան',
            data: 300,
            price: 300
        },
        {
            picture: 'img/hac/hac11.jpg',
            name: 'Չամիչով բուլկի',
            data: 80,
            price: 80
        },
        {
            picture: 'img/hac/hac12.png',
            name: 'Ծաղիկ բուլկի',
            data: 120,
            price: 120
        },
        {
            picture: 'img/hac/hac13.png',
            name: 'Ծաղիկ բուլկի',
            data: 120,
            price: 120
        },
        {
            picture: 'img/hac/hac14.webp',
            name: 'Կրեմային',
            data: 270,
            price: 270
        },
        {
            picture: 'img/hac/hac15.png',
            name: 'Շոկոլադե բուլկի',
            data: 160,
            price: 160
        }, ],

      [{
            picture: 'img/piva/piva1.png',
            name: 'Օխոտա',
            data: 590,
            price: 590
        },
        {
            picture: 'img/piva/piva2.jpg',
            name: 'Օխոտա',
            data: 400,
            price: 400
        },
        {
            picture: 'img/piva/piva3.webp',
            name: 'Հայնիկեն',
            data: 850,
            price: 850
        },
        {
            picture: 'img/piva/piva4.jpg',
            name: 'Հայնիկեն',
            data: 650,
            price: 650
        },
        {
            picture: 'img/piva/piva5.jpg',
            name: 'Ստելլա Արտոիս',
            data: 600,
            price: 600
        },
        {
            picture: 'img/piva/piva6.jpg',
            name: 'Բալտիկա',
            data: 550,
            price: 550
        },
        {
            picture: 'img/piva/piva7.png',
            name: 'Բալտիկա',
            data: 600,
            price: 600
        },
        {
            picture: 'img/piva/piva8.webp',
            name: 'Հայնիկեն',
            data: 620,
            price: 620
        },
        {
            picture: 'img/piva/piva9.jpg',
            name: 'Ֆաքսե պրեմիում',
            data: 500,
            price: 500
        },
        {
            picture: 'img/piva/piva10.jpg',
            name: 'Ստելլա Արտոիս',
            data: 700,
            price: 700
        },
        {
            picture: 'img/piva/piva11.jpg',
            name: 'Սիսեռ',
            data: 350,
            price: 350
        },
        {
            picture: 'img/piva/piva12.jpg',
            name: 'Ջեռկի',
            data: 670,
            price: 670
        },
        {
            picture: 'img/piva/piva13.png',
            name: 'Լեյս',
            data: 1000,
            price: 1000
        },
        {
            picture: 'img/piva/piva14.jpeg',
            name: 'Դորիտոս կծու',
            data: 1200,
            price: 1200
        },
        {
            picture: 'img/piva/piva15.jpg',
            name: 'Պրինգլես',
            data: 1450,
            price: 1450
        }, ],


      [{
            picture: 'img/mser/mis1.webp',
            name: 'Խոզի միս',
            data: 4200,
            price: 4200
        },
        {
            picture: 'img/mser/mis2.jpg',
            name: 'Ամբողջական հավ',
            data: 3000,
            price: 3000
        },
        {
            picture: 'img/mser/mis3.webp',
            name: 'Հավի կրցքամիս',
            data: 2730,
            price: 2730
        },
        {
            picture: 'img/mser/mis4.jpg',
            name: 'Տավարի միս',
            data: 2200,
            price: 2200
        },
        {
            picture: 'img/mser/mis5.png',
            name: 'Խոզի փափուկ',
            data: 4000,
            price: 4000
        },
        {
            picture: 'img/mser/mis6.webp',
            name: 'Տավարի ֆիլե',
            data: 2750,
            price: 2750
        },
        {
            picture: 'img/mser/mis7.webp',
            name: 'Խոզի չալաղաջ',
            data: 4590,
            price: 4590
        },
        {
            picture: 'img/mser/mis8.jpeg',
            name: 'Տավարի միս',
            data: 2500,
            price: 2500
        },
        {
            picture: 'img/mser/mis9.jpg',
            name: 'Խոզի մատներ',
            data: 4880,
            price: 4880
        },
        {
            picture: 'img/mser/mis10.jpeg',
            name: 'Հավի բուդ',
            data: 1750,
            price: 1750
        },
        {
            picture: 'img/mser/mis11.png',
            name: 'Հավի կրցքամիս',
            data: 2800,
            price: 2800
        },
        {
            picture: 'img/mser/mis12.jpg',
            name: 'Հավի թև',
            data: 1750,
            price: 1750
        },
        {
            picture: 'img/mser/mis13.jpg',
            name: 'Ամբողջական հավ',
            data: 3500,
            price: 3500
        },
        {
            picture: 'img/mser/mis14.webp',
            name: 'Հավի կրցքամիս',
            data: 2800,
            price: 2800
        },
        {
            picture: 'img/mser/mis15.jpg',
            name: 'Հավի բուդ',
            data: 1950,
            price: 1950
        }, ],

      [{
            picture: 'img/assia/food1.jpg',
            name: 'Ապուր ֆունչոզա',
            data: 6750,
            price: 6750
        },
        {
            picture: 'img/assia/food2.jpg',
            name: 'Կռաբով ազցան',
            data: 4500,
            price: 4500
        },
        {
            picture: 'img/assia/food3.jpg',
            name: 'Ձկան ֆիլե',
            data: 2650,
            price: 2650
        },
        {
            picture: 'img/assia/food4.png',
            name: 'Բլինչիկ',
            data: 990,
            price: 990
        },
        {
            picture: 'img/assia/food5.jpg',
            name: 'Ասորտի',
            data: 7990,
            price: 7990
        },
        {
            picture: 'img/assia/food6.jpg',
            name: 'Աղցանային ասորտի',
            data: 590,
            price: 590
        },
        {
            picture: 'img/assia/food7.jpg',
            name: 'Ֆունչոզա',
            data: 3650,
            price: 3650
        },
        {
            picture: 'img/assia/food8.jpg',
            name: 'կռաբով աղցան',
            data: 7900,
            price: 7900
        },
        {
            picture: 'img/assia/food9.png',
            name: 'Ձկան ֆիլե',
            data: 2750,
            price: 2750
        },
        {
            picture: 'img/assia/food10.webp',
            name: 'Խեցգետին',
            data: 11990,
            price: 11990
        },
        {
            picture: 'img/assia/food11.jpg',
            name: 'Ութոտնուկով աղցան',
            data: 16500,
            price: 16500
        },
        {
            picture: 'img/assia/food12.jpg',
            name: 'Ութոտնուկ',
            data: 3400,
            price: 3400
        },
        {
            picture: 'img/assia/food13.png',
            name: 'Ֆունչոզա,կռաբ աղցան',
            data: 12000,
            price: 12000
        },
        {
            picture: 'img/assia/food14.jpg',
            name: 'Ութոտնուկ փոքր',
            data: 2800,
            price: 2800
        },
        {
            picture: 'img/assia/food15.webp',
            name: 'Կրաբ',
            data: 4550,
            price: 4550
        }, ],



]
let categoryMenu = document.querySelectorAll('.category-menu');
let ProductImage = document.querySelectorAll('.image-frame > img');
let ProductName = document.querySelectorAll('.fruits > h2');
let productWeight = document.querySelectorAll('.weight');
categoryMenu.forEach((category, ind) => {
    category.onclick = () => {
        ProductImage.forEach((product, index) => {
            if (ind == 1 || ind == 2 || ind == 7 || ind == 12 || ind == 13) {
                kgName.forEach(kg => {
                    kg.innerText = 'կգ';
                })
            } else {
                kgName[index].innerText = 'հատ';
            }
            console.log(prods[ind][index].data)
            price[index].setAttribute('data', prods[ind][index].data);
            product.src = prods[ind][index].picture;
            ProductName[index].innerText = prods[ind][index].name
            productWeight[index].placeholder = prods[ind][index].price;
            price[index].innerText = `1${kgName[index].innerText} (${prods[ind][index].data}դրամ)`
        })
    }

})


function test(elem,input,opac,color1,color2) { 
        elem.style.opacity = opac 
        input.style.boxShadow = 'inset 0.5px 0.5px 0 0 ${color1}, -1px -1px 0 0 ${color2} inset'; 
} 
 
let name = document.querySelector('.name'); 
let surname = document.querySelector('.surname'); 
let validNameorSurname = /^[A-Z][a-z]+$/; 
let invalid = document.querySelector('.invalid'); 
let invalid2 = document.querySelector('.invalid2'); 
let invalid3 = document.querySelector('.invalid3'); 
let invalid4 = document.querySelector('.invalid4'); 
let invalid5 = document.querySelector('.invalid5'); 
let invalid6 = document.querySelector('.invalid6'); 
let pay = document.querySelector('.pay'); 
let email = document.querySelector('.email'); 
let num = document.querySelector('.num'); 
let date = document.querySelector('.date'); 
let moneyINp = document.querySelector('.moneyINp'); 
let validEmail = /^[A-Z][a-z]+\@[a-z]+\.[a-z]+$/; 
let validNumber = /^\+\d{3}-\d{2}-\d{2}-\d{2}-\d{2}$/ 
let validCardNumber = /^\d{4}-\d{4}-\d{4}-\d{4}$/ 
let validDate = /^\d{2}\/\d{2}$/; 
let validMoney = /^[0-9]+$/ 
pay.onclick = (e) => { 
//    ✓ 
    e.preventDefault(); 
    !name.value.match(validNameorSurname) ? test(invalid,name,1,'red','brown') : 
    test(invalid,name,0,'green','lime'); 
    !surname.value.match(validNameorSurname) ? test(invalid2,surname,1,'red','brown') : test(invalid2,surname,0,'green','lime'); 
    !email.value.match(validEmail) && !email.value.match(validNumber) ? test(invalid3,email,1,'red','brown') : test(invalid3,email,0,'green','lime'); 
    !num.value.match(validCardNumber) ? test(invalid4,num,1,'red','brown') : test(invalid4,num,0,'green','lime'); 
    !date.value.match(validDate) ? test(invalid5,date,1,'red','brown') : test(invalid5,date,0,'green','lime'); 
    !moneyINp.value.match(validMoney) ? test(invalid6,moneyINp,1,'red','brown') : test(invalid6,moneyINp,0,'green','lime'); 
}

let stars = document.querySelector('.stars');
let starsInner = document.querySelectorAll('.star-inner');
let bool = false;
let recomended = document.querySelector('.recomended');
let closeRec = document.querySelector('.close-rec');
let good = document.querySelector('.good');
stars.onmousemove = e => {
    if(bool) return ;
    e.preventDefault();
    starsInner.forEach(item => {
        item.style.width = e.offsetX +'px';
    })
}

document.body.style.overflowY = 'hidden'
stars.onmousedown = e => {
    bool = true;
    starsInner.forEach(item => {
        item.style.width = e.offsetX + 'px'
    })
    stars.style.pointerEvents = 'none'
    good.style.transform = 'scale(1)'
    closeRec.style.transform = 'scale(1)'
}

closeRec.onclick = () => {
    recomended.style.display = 'none'
 document.body.style.overflowY = 'visible'   
}