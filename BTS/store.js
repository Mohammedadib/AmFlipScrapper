if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}
else{
    ready()
}

function ready(){
    var removecartitembutton = document.getElementsByClassName('btn-danger')
    console.log(removecartitembutton)
    for (var i=0; i < removecartitembutton.length; i++){

        var button = removecartitembutton[i]
        button.addEventListener('click', removecartitems)
    }
            
    var quantityInput = document.getElementsByClassName('cart-quantity-input"')
    for (var i=0; i < quantityInput.length; i++){
        var input = quantityInput[i]
        input.addEventListener('change',quantityChange)

    }
}  



function removecartitems(event){
    var buttonclicked = event.target
    buttonclicked.parentElement.parentElement.remove()
    updatecartTotal()

}


function quantityChange(event){
    var input = event.target
    if(isNaN(input.value) || input.value <= 0 ){
        input.value = 1
    }
    updatecartTotal()
}


function updatecartTotal(){
     var cartitemcontainer = document.getElementsByClassName('cart-items')[0]
     var cartrows = cartitemcontainer.getElementsByClassName('cart-row')
     var total = 0 
     for (var i=0; i < cartrows.length; i++){
         var cartrow = cartrows[i]
         var priceElment = cartrow.getElementsByClassName('cart-price')[0]
         var quantityElment = cartrow.getElementsByClassName('cart-quantity-input')[0]
         var price = parseFloat(priceElment.innerText.replace('$',''))
         var quantity = quantityElment.value
         total =  total + (price * quantity)

         
     }
     total = math.round(total *  100) / 100
     document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}