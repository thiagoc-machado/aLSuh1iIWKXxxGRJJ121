function somar() {
  const valor1 = document.getElementById("wok-1-quantity").value * 4;
  const valor2 = document.getElementById("wok-2-quantity").value * 6;
  const valor3 = document.getElementById("wok-3-quantity").value * 7;
  const valor4 = document.getElementById("wok-4-quantity").value * 6;
  const extra1 = document.getElementById("extra1").value;
  const extra2 = document.getElementById("extra2").value;
  const extra3 = document.getElementById("extra3").value;
  const extra4 = document.getElementById("extra4").value;

  if (extra1 != "none") {
    var ext1 = 1;
  } else {
    var ext1 = 0;
  }
  if (extra2 != "none") {
    var ext2 = 1;
  } else {
    var ext2 = 0;
  }
  if (extra3 != "none") {
    var ext3 = 1;
  } else {
    var ext3 = 0;
  }
  if (extra4 != "none") {
    var ext4 = 1;
  } else {
    var ext4 = 0;
  }
  let total = "";
  let total2 = valor1 + valor2 + valor3 + valor4 + ext1 + ext2 + ext3 + ext4;

  if (
    document.getElementById("orders").textContent == "2" ||
    document.getElementById("orders").textContent == "3"
  ) {
    total = total2 * 0.9;
  } else if (
    document.getElementById("orders").textContent == "0" ||
    document.getElementById("orders").textContent == "1"
  ) {
    total = total2;
  } else {
    total = total2 * 0.8;
  }
  document.getElementById("total").innerHTML = total2;
  document.getElementById("priceDisc").innerHTML = "*** " + total + "€ ***";
  return total;
}
function sendOrder(event) {
  const order = {};
  const date = new Date();
  const dateString = date.toLocaleDateString("pt-BR");
  const timeString = date.toLocaleTimeString("pt-BR");
  const dateTime = dateString + " " + timeString;

  if (document.getElementById("nameClient").value == "") {
    alert("Enter your name");
    event.preventDefault();
  } else if (document.getElementById("total").textContent == "") {
    alert("Order something");
    event.preventDefault();
  } else {
    let order = {
      client: document.getElementById("nameClient").value,

      date: dateTime,
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

//counter

function counter(nome) {
  let lista = data_out.replace(/&#34;/g, '"');
  lista = lista.replace('"[[', "[[ ");
  lista = lista.replace(']]"', "]]");
  lista = lista.replace("&#34;", "");
  let dados = JSON.parse(lista);

  let count = 0;
  for (const innerList of dados) {
    if (innerList[0] === nome) {
      count++;
    }
  }
  (price = document.getElementById("total").textContent), console.log(price);
  console.log(`O nome aparece ${count} vezes na lista`);
  document.getElementById("orders").innerHTML = count;
  if (count < 2) {
    document.getElementById("discount").style.display = "none";
    document.getElementById("priceDiscField").style.display = "none";
    document.getElementById("total").style.textDecoration = "none";
    document.getElementById("priceDisc").style.display = "none";
  }
  if (count == 2 || count == 3) {
    document.getElementById("percentage").innerHTML = "10%";
    document.getElementById("discount").style.display = "block";
    document.getElementById("priceDiscField").style.display = "block";
    document.getElementById("priceDisc").style.display = "block";
    document.getElementById("total").style.textDecoration = "line-through";
  }
  if (count > 3) {
    document.getElementById("percentage").innerHTML = "20%";
    document.getElementById("discount").style.display = "block";
    document.getElementById("priceDiscField").style.display = "block";
    document.getElementById("priceDisc").style.display = "block";
    document.getElementById("total").style.textDecoration = "line-through";
  }
  return count;
}

const input = document.getElementById("nameClient");
let timeout;

//call the counter function after a interation in the name field
input.addEventListener("input", () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    counter(input.value);
    console.log(input.value);
  }, 1000); // time to wait
});

document.getElementById("wok-1-quantity").addEventListener("input", somar);
document.getElementById("wok-2-quantity").addEventListener("input", somar);
document.getElementById("wok-3-quantity").addEventListener("input", somar);
document.getElementById("wok-4-quantity").addEventListener("input", somar);
document.getElementById("extra1").addEventListener("input", somar);
document.getElementById("extra2").addEventListener("input", somar);
document.getElementById("extra3").addEventListener("input", somar);
document.getElementById("extra4").addEventListener("input", somar);
document.getElementById("mkOrder").addEventListener("click", sendOrder);
