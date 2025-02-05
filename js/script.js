"use strict";

function addToCart(product){
    //hent nuværende værdi fra inputfeltet med specifikt id og omdan til et tal
    const quantity = parseInt(document.getElementById(product).value);

    //øg quantity med 1 
    document.getElementById(product).value = quantity +1 

 //opdaterer totalPrisen for alle varer
    totalPrice();
}

function removeFromCart(product){
   //hent nuværende værdi fra inputfeltet med specifikt id og omdan til et tal
   const quantity = parseInt(document.getElementById(product).value);

   if(quantity > 0){
    //trukket 1 fra quantity 
    document.getElementById(product).value = quantity -1 
   }

   updateTotalPrice(product);
}

function resetCart(product){
  //nustiller de produkter man har i cart
  document.getElementById(product).value = 0; 

  updateTotalPrice(product);
}

//funktion som opdatere prisen for den enkelte vare (vare = kaffeprodukt)
function updateTotalPrice(product){
    //hent mængden (quantity) og pris-inputfeltet for den specifike vare (vare= kaffeprodukt)
    const quantity = parseInt(document.getElementById(product).value);

    const price = parseInt(document.getElementById(product +"-price").value);


    //beregner totalprisen for denne specifikke vare
    const total = quantity * price;
    document.getElementById(product + "-total").value = total;

    //opdaterer totalPrisen for alle varer
    totalPrice();
}


//funktion til at beregne og opdatere den samlede totalpris for alle varer i kurven
function totalPrice(){
   //variable til at holde styr på den samlede totalpris
    let totalSum = 0;
//finder alle inputfelter der indeholder et id med "produkt" hvor "-total" indgår i slutningen af id tekststrengen
// vi søger efter "-total"og det ligegyldigt hvad der står foran
    const productElements = document.querySelectorAll("[id$=-total]")

    //lopper gennem hvert produkt-element og lægger værdierne sammen
    productElements.forEach(productElement => {
        totalSum += parseInt(productElement.value);
    });
    
    document.getElementById('totalSum').value = totalSum;

}