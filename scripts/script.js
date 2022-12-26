function somar(event) {
  event.preventDefault();

  const valor1 = document.getElementById("wok-1-quantity").value * 4;
  const valor2 = document.getElementById("wok-2-quantity").value * 6;
  const valor3 = document.getElementById("wok-3-quantity").value * 7;
  const valor4 = document.getElementById("wok-4-quantity").value * 6;

  const total = valor1 + valor2 + valor3 + valor4;

  document.getElementById("total-to-pay").innerHTML = total;
}

document.getElementById("btnItem1").addEventListener("click", somar);
document.getElementById("btnItem2").addEventListener("click", somar);
document.getElementById("btnItem3").addEventListener("click", somar);
document.getElementById("btnItem4").addEventListener("click", somar);
