function showLink() {
    SpreadsheetApp.getUi().alert("Planilha para consulta de APIs",

    `Copie e cole o link abaixo no seu Google Sites. Recomenda-se usar uma incorporação de página inteira.
    
    ${PropertiesService.getDocumentProperties().getProperty("url")}`,

    SpreadsheetApp.getUi().ButtonSet.OK)
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