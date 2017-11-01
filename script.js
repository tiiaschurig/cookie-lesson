var lemQuant = Cookies.get("lemon");
console.log(lemQuant)

function setCookie () {
  var lemQuant = document.getElementsByClassName("lemon").value;
  Cookies.set("lemon", lemQuant);
}
document.getElementById("lemon-order").addEventListener("click", setCookie);
