function install() {
  let ui = SpreadsheetApp.getUi()
  let installStatus = PropertiesService.getDocumentProperties().getProperty("installed")

  // Se script não completamente instalado, adicionar menu
  if (installStatus != "2") {
    ui.createMenu("🛑 Instalar biblioteca")
      .addItem("Instalar biblioteca", "install")
      .addToUi();
  }

  // Rotina de instalação
  switch (installStatus) {

    // Se script não instalado, enviar prompt requerendo
    case null:
      ui.alert("Instalação da Biblioteca Digital",

        `Olá usuário!

                Parece que é a primeira vez que você abre esta planilha. Esta é uma planilha que contém os dados para a criação de uma Biblioteca Digital, para uso no Google Sites, e, portanto, ela deve ser configurada adequadamente.
                Para começar, clique no botão "🛑 Instalar biblioteca" nos menus da sua planilha.`,

        ui.ButtonSet.OK);
      PropertiesService.getDocumentProperties().setProperty("installed", "0");
      break;

    // Cria todos os triggers necessários
    case "0":
      ScriptApp.newTrigger("onOpenAdvanced")
        .forSpreadsheet(SpreadsheetApp.getActiveSpreadsheet())
        .onOpen()
        .create();
      ScriptApp.newTrigger("onChangeAdvanced")
        .forSpreadsheet(SpreadsheetApp.getActiveSpreadsheet())
        .onChange()
        .create();
      PropertiesService.getDocumentProperties().setProperty("installed", "1");

    // Obtém a URL de implementação
    case "1":

      let url = ui.prompt("Instalação da Biblioteca Digital",
        `Para concluir a instalação, você deve executar os seguintes passos:
            
                1. Vá no menu "Extensões" e clique em "Apps Script".
                2. No site que abrir, clique em "Implantar" e escolha "Nova implantação"
                3. Clique na engregagem ao lado do nome "Selecione o tipo" e escolha "App da Web".
                4. Defina "Executar como" para "Eu", e "Quem pode acessar" para "Qualquer pessoa";
                5. Clique em "Implantar".
                6. Na janela que abrir, dê as permissôes requeridas.
                7. Copie o URL e cole no campo abaixo. A URL deve se parecer com esta:
                https://script.google.com/macros/s/1A2B3C4d5e6f7G8h9I0j/exec
                
                Para executar estes passos, você pode fechar esta janela. Ela abrirá novamente ao atualizar a página, ou clicando novamente em "🛑 Instalar biblioteca" nos menus da sua planilha.`,
        ui.ButtonSet.OK_CANCEL);

      // Caso não-OK, encerrar.
      if (url.getSelectedButton() != ui.Button.OK) return;

      // Caso input inválido, solicitar novamente
      if (url.getResponseText().indexOf("https://script.google.com/") == -1 ||
        url.getResponseText().indexOf("/exec") == -1) {
        ui.alert("Instalação da Biblioteca Digital",

          `A URL que você inseriu não parece ser uma URL válida.
                    Clique em OK e tente novamente`,

          ui.ButtonSet.OK);
        install();
        return;
      }

      // Atualize as propriedades
      PropertiesService.getDocumentProperties().setProperty("url", url.getResponseText());
      PropertiesService.getDocumentProperties().setProperty("installed", "2");


      ui.alert("Instalação da Biblioteca Digital",
        `Biblioteca configurada com sucesso! Atualize esta página para finalizar.
        
        Criado por: https://danifluffy.dev`,
        ui.ButtonSet.OK);
      break;
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