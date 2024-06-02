let precio = 400000;
let cantidad = 0;

function total() {
  let total = cantidad * precio;
  console.log(total); 
  precioSpan = document.querySelector(".valor-total");
  precioSpan.innerHTML = total
}

function sumar() {
  cantidad++;
  precioSpan = document.querySelector(".cantidad");
  precioSpan.innerHTML = cantidad;
  total();
}
function restar() {
    if (cantidad > 0) {
  cantidad--;
  precioSpan = document.querySelector(".cantidad");
  precioSpan.innerHTML = cantidad;
  total();
}
}

precioSpan = document.querySelector(".valor-total");
precioSpan.innerHTML = cantidad * precio;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

precioSpan = document.querySelector(".cantidad");
precioSpan.innerHTML = cantidad;
