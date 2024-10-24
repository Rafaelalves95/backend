  let temCarro = false;
  let temMoto = true;

  // Pelo menos uma condição deve ser verdadeira
  if (temCarro || temMoto) {
    console.log("Tem como se locomover.");
  } else {
    console.log("Não tem meio de transporte.");
  }
  // Saída: Tem como se locomover.