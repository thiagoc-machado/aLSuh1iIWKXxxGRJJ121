function somar() {
  const valor1 = document.getElementById("wok-1-quantity").value * 4;
  const valor2 = document.getElementById("wok-2-quantity").value * 6;
  const valor3 = document.getElementById("wok-3-quantity").value * 7;
  const valor4 = document.getElementById("wok-4-quantity").value * 6;
  const extra1 = document.getElementById("extra1").value;
  const extra2 = document.getElementById("extra2").value;
  const extra3 = document.getElementById("extra3").value;
  const extra4 = document.getElementById("extra4").value;

  if (extra1 != "") {
    var ext1 = 1;
  } else {
    var ext1 = 0;
  }
  if (extra2 != "") {
    var ext2 = 1;
  } else {
    var ext2 = 0;
  }
  if (extra3 != "") {
    var ext3 = 1;
  } else {
    var ext3 = 0;
  }
  if (extra4 != "") {
    var ext4 = 1;
  } else {
    var ext4 = 0;
  }

  const total = valor1 + valor2 + valor3 + valor4 + ext1 + ext2 + ext3 + ext4;

  document.getElementById("total-to-pay").innerHTML =
    "Total to pay: " + total + " €";
}
function sendOrder(event) {
  const order = {};
  console.log(document.getElementById("total-to-pay").textContent);
  if (document.getElementById("nameClient").value == "") {
    alert("Enter your name");
    event.preventDefault();
  } else if (
    document.getElementById("total-to-pay").textContent == "Total to pay: 0 €"
  ) {
    alert("Order something");
    event.preventDefault();
  } else {
    order[0] = {
      client: document.getElementById("nameClient").value,
      date: new Date(),
    };
    order[1] = {
      id: "Wokling",
      qtd: document.getElementById("wok-1-quantity").value,
      extra: document.getElementById("extra1").value,
    };
    order[2] = {
      id: "Wicket",
      qtd: document.getElementById("wok-2-quantity").value,
      extra: document.getElementById("extra2").value,
    };
    order[3] = {
      id: "Endor",
      qtd: document.getElementById("wok-3-quantity").value,
      extra: document.getElementById("extra3").value,
    };
    order[4] = {
      id: "Kneesaa",
      qtd: document.getElementById("wok-4-quantity").value,
      extra: document.getElementById("extra4").value,
    };
    alert("Order made successfully");
  }
}

document.getElementById("wok-1-quantity").addEventListener("input", somar);
document.getElementById("wok-2-quantity").addEventListener("input", somar);
document.getElementById("wok-3-quantity").addEventListener("input", somar);
document.getElementById("wok-4-quantity").addEventListener("input", somar);
document.getElementById("extra1").addEventListener("input", somar);
document.getElementById("extra2").addEventListener("input", somar);
document.getElementById("extra3").addEventListener("input", somar);
document.getElementById("extra4").addEventListener("input", somar);
document.getElementById("mkOrder").addEventListener("click", sendOrder);
