/** Função executada ao abrir a planilha. Executada apenas quando instalado.*/
function onOpenAdvanced() {

    // Cria preview e menu com link
    let ui = SpreadsheetApp.getUi()
    ui.showSidebar(
      doGet()
      .append(`
        <style>
          body { margin-top: 40px; }
        </style>
        
        <button
          onclick="google.script.run.onOpenAdvanced()" class="button"
          style=" position: fixed; top: 5px; left: 15px; width: calc(100% - 30px)
                  ">Atualizar</button>
      `)
      .setTitle("Prévia do site"))
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