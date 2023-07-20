// $('input[type="range"]::-webkit-slider-thumb').on("click",(ev)=>{
//     console.log("hsdb");
//     $('input[type="range"]::-webkit-slider-thumb').style.backgroundColor = "#356917"
// });

$('input[type="range"]').on("input",(ev)=>{
    $(".min_count").text(ev.target.value);
    $(".max_count > .count").val(ev.target.value + "")
});
let set = ["180","217","325"];
$('.max_count > .count').on("input",(ev)=>{
    $(".min_count").text(ev.target.value);
    $('input[type="range"]').val(ev.target.value + "")
});

$(document).ready(function(){
    let increment = setInterval(()=>{
        $(".sec-success h2").each((el,ind)=>{
            if(ind.innerText === set[el]){
                return
            }
            $(".sec-success h2")[el].innerText = +(ind.innerText) + 1
        })
        if($(".sec-success h2")[0].innerText === set[0] && $(".sec-success h2")[1].innerText === set[1] && $(".sec-success h2")[2].innerText === set[2]){
            clearInterval(increment);
        }
    },30);
});

