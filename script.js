var lemQuant = Cookies.get("lemon");
if (lemQuant) {
  alert("you ordered a lemon cookie!");
}

function setCookie () {
  var lemQuant = document.getElementById("lemon-order").value;
  Cookies.set("lemon", lemQuant);
}
document.getElementById("lemon-order").addEventListener("click", setCookie);
