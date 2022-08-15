function pickPrato(selector) {
   const clicado = document.querySelector('.selecionadoPrato');
   if (clicado !== null) {
      clicado.classList.remove('selecionadoPrato');
   }
   selector.classList.toggle('selecionadoPrato'); 

   const pratoClicado = document.querySelector('.selecionadoPrato');
   const drinkClicado = document.querySelector('.selecionadoDrink');
   const dessertClicado = document.querySelector('.selecionadoDessert');
   const buttonClose = document.querySelector('.button');

   if (pratoClicado !== null && drinkClicado !== null && dessertClicado !== null) {
      buttonClose.innerHTML = 'Fechar pedido!'
      buttonClose.classList.add('close');
   }
}

function pickDrink(selector) {
   const clicado = document.querySelector('.selecionadoDrink');
   if (clicado !== null) {
      clicado.classList.remove('selecionadoDrink');
   }
   selector.classList.add('selecionadoDrink'); 

   const pratoClicado = document.querySelector('.selecionadoPrato');
   const drinkClicado = document.querySelector('.selecionadoDrink');
   const dessertClicado = document.querySelector('.selecionadoDessert');
   const buttonClose = document.querySelector('.button');

   if (pratoClicado !== null && drinkClicado !== null && dessertClicado !== null) {
      buttonClose.innerHTML = 'Fechar pedido!'
      buttonClose.classList.add('close');
   }   
}

function pickDessert(selector) {
   const clicado = document.querySelector('.selecionadoDessert');
   if (clicado !== null) {
      clicado.classList.remove('selecionadoDessert');
   }
   selector.classList.add('selecionadoDessert'); 

   const pratoClicado = document.querySelector('.selecionadoPrato');
   const drinkClicado = document.querySelector('.selecionadoDrink');
   const dessertClicado = document.querySelector('.selecionadoDessert');
   const buttonClose = document.querySelector('.button');

   if (pratoClicado !== null && drinkClicado !== null && dessertClicado !== null) {
      buttonClose.innerHTML = 'Fechar pedido!'
      buttonClose.classList.add('close');
}
}

// Ao fechar o pedido.
function closeOrder() {


   const clientName = prompt('Por favor, digite seu nome: ');
   const clientAddress = prompt (`Certo, ${clientName}. Agora seu endereço: `);

   let foodPrice = document.querySelector('.food .selecionadoPrato #price').innerHTML;
   let drinkPrice = document.querySelector('.drink .selecionadoDrink #price').innerHTML;
   let dessertPrice = document.querySelector('.dessert .selecionadoDessert #price').innerHTML;

   const pratoClicado = document.querySelector('.selecionadoPrato h4').innerHTML;
   const drinkClicado = document.querySelector('.selecionadoDrink h4').innerHTML;
   const dessertClicado = document.querySelector('.selecionadoDessert h4').innerHTML;

   foodPrice = foodPrice.replace(',', '.',);
   foodPrice = foodPrice.replace('R$', '');
   drinkPrice = drinkPrice.replace(',', '.');
   drinkPrice = drinkPrice.replace('R$', '');
   dessertPrice = dessertPrice.replace(',', '.');
   dessertPrice = dessertPrice.replace('R$', '');
   
   foodPrice = Number(foodPrice);
   drinkPrice = Number(drinkPrice);
   dessertPrice = Number(dessertPrice);
   let total = foodPrice + drinkPrice + dessertPrice;

   let finalFoodPrice = foodPrice.toFixed(2);
   let finalDrinkPrice = drinkPrice.toFixed(2);
   let finalDessertPrice = dessertPrice.toFixed(2);
   let finalTotal = total.toFixed(2);
   
   let msgWhats = encodeURIComponent(`Olá, gostaria de fazer o pedido:
      - Prato: ${pratoClicado}: R$ ${finalFoodPrice}
      - Bebida: ${drinkClicado}: R$ ${finalDrinkPrice}
      - Sobremesa: ${dessertClicado}: R$ ${finalDessertPrice}
      Total: R$ ${finalTotal}
      Nome: ${clientName}
      Endereço: ${clientAddress}`);

   window.open(`https://wa.me/5542991162707?text=${msgWhats}`);
}


// CheckBox
function checkBox() {
   let bodyOpacity = document.querySelector('body');
   bodyOpacity.classList.add('oppacity');

   let showBox = document.querySelector('#showBox');
   showBox.classList.add('checkBox');
   showBox.classList.remove('hidden');

   const pratoClicado = document.querySelector('.selecionadoPrato h4').innerHTML;
   const drinkClicado = document.querySelector('.selecionadoDrink h4').innerHTML;
   const dessertClicado = document.querySelector('.selecionadoDessert h4').innerHTML;

   let foodPrice = document.querySelector('.food .selecionadoPrato #price').innerHTML;
   let drinkPrice = document.querySelector('.drink .selecionadoDrink #price').innerHTML;
   let dessertPrice = document.querySelector('.dessert .selecionadoDessert #price').innerHTML;
   
   let prato1 = document.querySelector('#showBox .p1');
   prato1.innerHTML = `${pratoClicado}`;

   let drink1 = document.querySelector('#showBox .p2');
   drink1.innerHTML = `${drinkClicado}`;

   let dessert1 = document.querySelector('#showBox .p3');
   dessert1.innerHTML = `${dessertClicado}`;
   
   let price1 = document.querySelector('#showBox .pr1');
   price1.innerHTML = `${foodPrice}`;

   let price2 = document.querySelector('#showBox .pr2');
   price2.innerHTML = `${drinkPrice}`;

   let price3 = document.querySelector('#showBox .pr3');
   price3.innerHTML = `${dessertPrice}`;

   foodPrice = foodPrice.replace(',', '.',);
   foodPrice = foodPrice.replace('R$', '');
   drinkPrice = drinkPrice.replace(',', '.');
   drinkPrice = drinkPrice.replace('R$', '');
   dessertPrice = dessertPrice.replace(',', '.');
   dessertPrice = dessertPrice.replace('R$', '');
   
   foodPrice = Number(foodPrice);
   drinkPrice = Number(drinkPrice);
   dessertPrice = Number(dessertPrice);
   let total = foodPrice + drinkPrice + dessertPrice;

   let finalFoodPrice = foodPrice.toFixed(2);
   let finalDrinkPrice = drinkPrice.toFixed(2);
   let finalDessertPrice = dessertPrice.toFixed(2);
   let finalTotal = total.toFixed(2);

   let precoFinal = document.querySelector('#showBox .precoTotal').innerHTML;
   precoFinal.innerHTML = `${finalTotal}`;

}

