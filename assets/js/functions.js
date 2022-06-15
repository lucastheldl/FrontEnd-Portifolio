function clicked(id) {
  let itens = window.document.getElementsByClassName("opt");

  for (let x = 0; x < itens.length; x++) {
    if (itens[x].id != id) {
      itens[x].style.display = "none";
    } else {
      itens[x].style.display = "block";
    }
  }
}
