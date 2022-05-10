var btnsPlus = document.querySelectorAll('.Plus')
var btnsMoins = document.querySelectorAll('.Moins')
var removeArt = document.querySelectorAll('.fa-trash')
var like = document.querySelectorAll('.fa-heart')
var somme = document.querySelector('#Somme')

for(let i = 0;i<btnsPlus.length;i++){
    btnsPlus[i].addEventListener('click',function(){
        btnsPlus[i].previousElementSibling.innerText++
        SumTotal()
    })
}

for(let i = 0;i<btnsMoins.length;i++){
    btnsMoins[i].addEventListener('click',function(){
        if(btnsMoins[i].nextElementSibling.innerText>0){
            btnsMoins[i].nextElementSibling.innerText--
            SumTotal()
        }       
    })
}

// var m = document.main
// var achat = document.getElementById('.achat__slider')
// var art = document.getElementById('.article')
console.log(removeArt)
// var removeArt = achat.removeChild(art)
for(let i = 0;i<removeArt.length;i++){
removeArt[i].addEventListener('click',function(){
    removeArt[i].parentElement.parentElement.remove()
    console.log(removeArt)
     SumTotal()
 })
}

for(let i = 0;i<like.length;i++){
    like[i].addEventListener('click',function(){
        like[i].classList.toggle('mah')
    })
}

function SumTotal(){
 var price = document.querySelectorAll('.Price')
 var qty = document.querySelectorAll('.Qty')
 var somm = 0
 for(let i = 0;i<price.length;i++){
    somm = somm + price[i].innerText * qty[i].innerText
 }
  somme.innerText = somm
}
