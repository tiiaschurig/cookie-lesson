function setLemonCookie () {
  // grab current cookie value
  // if undefined
  // set it to 1
  // otherwise
  // add 1 to original value and set it
  var lemCookie = Cookies.get("lemon");
  if (lemCookie=== undefined) {
    Cookies.set("lemon", 1);
  } else {
    lemCookie = parseInt(lemCookie);
    Cookies.set("lemon", lemCookie + 1);
  }
}
document.getElementById("lemon-order").addEventListener("click", setLemonCookie);

function setSugarCookie () {
  // grab current cookie value
  // if undefined
  // set it to 1
  // otherwise
  // add 1 to original value and set it
  var sugCookie = Cookies.get("sugar");
  if (sugCookie=== undefined) {
    Cookies.set("sugar", 1);
  } else {
    sugCookie = parseInt(sugCookie);
    Cookies.set("sugar", sugCookie + 1);
  }
}
document.getElementById("sugar-order").addEventListener("click", setSugarCookie);

function setChocoCookie () {
  // grab current cookie value
  // if undefined
  // set it to 1
  // otherwise
  // add 1 to original value and set it
  var chocoCookie = Cookies.get("chocolate");
  if (chocoCookie=== undefined) {
    Cookies.set("chocolate", 1);
  } else {
    chocoCookie = parseInt(chocoCookie);
    Cookies.set("chocolate", chocoCookie + 1);
  }
}
document.getElementById("chocolate-order").addEventListener("click", setChocoCookie);

function deleteOrder () {
  Cookies.set("chocolate", 0);
  Cookies.set("sugar", 0);
  Cookies.set("lemon", 0);
}

document.getElementById("delete").addEventListener("click", deleteOrder);
