function somar(event) {
  event.preventDefault();

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

  document.getElementById("total-to-pay").innerHTML = total;
}

document.getElementById("btnItem1").addEventListener("click", somar);
document.getElementById("btnItem2").addEventListener("click", somar);
document.getElementById("btnItem3").addEventListener("click", somar);
document.getElementById("btnItem4").addEventListener("click", somar);
