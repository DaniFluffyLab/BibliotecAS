function createObject() {

  // Obtém os dados da planilha e cria as variáveis
  let dataArr = SpreadsheetApp.getActiveSpreadsheet().getRange("Dados da Biblioteca!A2:K").getValues()
  let dataObjs = []

  // Para cada linha da planilha, execute
  dataArr.forEach((data) => {

    // Se a linha estiver vazia, ignorar
    if (data[1] == "") return;

    // Cria o objeto e adiciona na Array
    dataObjs.push({
      title: data[1],
      author: data[2],
      collection: data[3],
      description: data[4],
      downloadLink: data[5],
      thumbnail: data[10]
    })
  })

  return dataObjs

}

/* 

 * Este programa foi criado pela DaniFluffyCat ^^ (https://danifluffy.dev)
 * e está licenciado sobre a licença BeerWare:

 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42, adapted by @DaniFluffyCat):
 * <danifluffy.dev> wrote this file. As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return. ^^ 
 * ----------------------------------------------------------------------------

*/