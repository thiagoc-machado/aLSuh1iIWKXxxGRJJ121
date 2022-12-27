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

  document.getElementById("total").innerHTML = total;
  return total;
}
function sendOrder(event) {
  const order = {};
  if (document.getElementById("nameClient").value == "") {
    alert("Enter your name");
    event.preventDefault();
  } else if (document.getElementById("total").textContent == "") {
    alert("Order something");
    event.preventDefault();
  } else {
    let order = {
      client: document.getElementById("nameClient").value,
      date: new Date(),
      valor: document.getElementById("total").textContent,

      item1: "Wokling",
      item1_qtd: document.getElementById("wok-1-quantity").value,
      item1_extra: document.getElementById("extra1").value,

      item2: "Wicket",
      item2_qtd: document.getElementById("wok-2-quantity").value,
      item2_extra: document.getElementById("extra2").value,

      item3: "Endor",
      item3_qtd: document.getElementById("wok-3-quantity").value,
      item3_extra: document.getElementById("extra3").value,

      item4: "Kneesaa",
      item4_qtd: document.getElementById("wok-4-quantity").value,
      item4_extra: document.getElementById("extra4").value,
    };

    console.log(order);
    fetch("/receive_json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });
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
