/** Função padrão do Apps Script executada quando abrir a planilha */
function onOpen(event) {

  let installed = PropertiesService.getDocumentProperties().getProperty("installed")

  // Executar instalação de script
  if (installed != "2") install();

  // Cria o menu padrão
  if (installed == 2) {
    SpreadsheetApp.getUi()
      .createMenu("Adicionar ao Google Sites")
      .addItem("Obter link", "showLink")
      .addToUi();
  }
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