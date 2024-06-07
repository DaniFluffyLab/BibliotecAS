/** Função executada ao modificar a planilha. Executada apenas quando instalado.*/
function onChangeAdvanced() {

  // Formata a planilha como texto
  let spreadsheet = SpreadsheetApp.getActiveSheet()
  spreadsheet.getRange(`1:${spreadsheet.getMaxRows()}`).setNumberFormat("@")
  
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
