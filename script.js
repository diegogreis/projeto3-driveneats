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