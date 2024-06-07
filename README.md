<h1 align="center">
    <img alt="BibliotecAS" width="60%" src="README files/logo.png">
</h1>

BibliotecAS é um site de biblioteca digital gerenciado por uma Planilha Google e auto-hospedado pelo Google Apps Script, sem a necessidade de pagar por um serviço de hospedagem ou do usuário ter conhecimento técnico sobre sites.

<p align="center"><a href="https://sites.google.com/view/bibliotecas-demo"><img alt="Veja uma demonstração" height="35px" src="README files/demo.png"></a></p>

> [!NOTE]
> O BibliotecAS foi pensado para uso em pequena escala, para uso no site da sua escola, por exemplo. Se você está procurando por uma solução mais robusta, sugiro você dar uma olhada no [Calibre Web](https://github.com/janeczku/calibre-web), de onde eu tirei boa parte da ideia desse projeto.

## Índice

- [Instalação](#instalação)
- [Sobre este projeto](#sobre-este-projeto)
- [Problemas conhecidos e próximos passos](#problemas-conhecidos-e-próximos-passos)
- [Agradecimentos](#agradecimentos)

## Instalação

- [Copie esta planilha para seu Google Drive clicando aqui.](https://docs.google.com/spreadsheets/d/1zM1X_fSotptsF9_zUGFs7xE8Uzn11dBWcFXhHh-yu7Q/copy)
<br><br> <img style="border-radius: 10px; width: 600px;" src="README files/install-1.png">

- Assim que abrir a planilha, você receberá uma mensagem de boas-vindas, o instruindo a ir no menu e clicar em "Instalar biblioteca". Clique em OK, vá ao menu e clique em "Instalar planilha".
<br><br> <img style="border-radius: 10px; width: 600px;" src="README files/install-2.png">
<br> <img style="border-radius: 10px; width: 600px;" src="README files/install-3.png">

- Você será solicitado a dar as permissões que o app precisa. Clique em OK.
<br><br> <img style="border-radius: 10px; width: 600px;" src="README files/install-4.png">

- Na tela que segue, você será avisado que o Google não verificou este app. É normal, o Google sempre mostra isso para projetos do Apps Script que não foram publicados no seu Marketplace. Clique em "Avançado" e em "Acessar Backend da Biblioteca Digital".
<br><br> <img style="border-radius: 10px; width: 600px;" src="README files/install-5.png">

- Dê as permissões que o app precisa.
<br><br> <img style="border-radius: 10px; width: 600px;" src="README files/install-6.png">

- Assim que a janela fechar, vá em "Extensões" e clique em "Apps Script".
<br><br> <img style="border-radius: 10px; width: 600px;" src="README files/install-7.png">

- No Apps Script, clique em "Implantar", e em "Nova implantação".
<br><br> <img style="border-radius: 10px; width: 600px;" src="README files/install-8.png">

- Na tela que aparecer, as opções "Executar como" deve estar como "Eu", e "Quem pode acessar" deve estar como "Qualquer pessoa". Depois, clique em "Implantar".
<br><br> <img style="border-radius: 10px; width: 600px;" src="README files/install-9.png">

- Depois que você implantar, copie a URL em azul no fim da janela e volte para a planilha.
<br><br> <img style="border-radius: 10px; width: 600px;" src="README files/install-10.png">

- Na planilha, vá novamente ao menu e clique em "Instalar planilha".
<br><br> <img style="border-radius: 10px; width: 600px;" src="README files/install-3.png">

- Na tela que abrir, cole o link que você copiou, e clique em OK.
<br><br> <img style="border-radius: 10px; width: 600px;" src="README files/install-11.png">

- Por fim, clique em OK e atualize a página.
<br><br> <img style="border-radius: 10px; width: 600px;" src="README files/install-12.png">

- Assim que atualizar, clique em "Permitir acesso" na barra amarela no topo da planilha.
<br><br> <img style="border-radius: 10px; width: 600px;" src="README files/install-13.png">

- O link da sua Biblioteca Digital fica no menu "Adicionar ao Google Sites". Você pode divulgar diretamente este link, ou inserir em uma página do Google Sites.
<br><br> <img style="border-radius: 10px; width: 600px;" src="README files/install-14.png">
<br> <img style="border-radius: 10px; width: 600px;" src="README files/install-15.png">

## Sobre este projeto

O BibliotecAS surgiu como um projeto de conclusão do Curso de Multimeios Didáticos da IFMT em 2024, e teve como objetivo ser uma ferramenta para facilitar a distribuição digital de material didático em uma escola. As propostas do projeto são:

- Dar ao professor ou gestor um meio simples de organizar e disponibilizar o material didático pros alunos;
- Não exigir cadastro dos alunos;
- Não ter anúncios ou banners;
- Não envolver custos de hospedagem e conhecimento técnico muito avançado da pessoa que vai manter a plataforma.

Os serviços Google foram escolhidos para serem a base desse projeto pela possibilidade de hospedar o site e todos os arquivos que seriam publicados nele com uma conta Google grátis. Sinceramente, gostaria de não ter a dependência direta dos serviços Google, especialmente por conta de [alguns problemas](#problemas-conhecidos-e-próximos-passos) que o Apps Script tem, mas, por ora, parece ser a maneira que melhor atende a proposta do projeto.

## Problemas conhecidos e próximos passos

- **O Apps Script tem problemas para lidar com mais de um usuário**

Quando você tenta abrir uma implementação do Google Apps Script em um navegador que tem mais de uma Conta Google conectada, ele mostra um erro dizendo que o arquivo não pode ser encontrado. [O Google sabe desse problema](https://developers.google.com/apps-script/guides/projects?hl=pt-br#fix-issues), e a solução deles é _"Abre em uma aba anônima"_, que é uma solução, no mínimo, insuficiente.

Estou estudando o GAS pra descobrir algum jeito de não esbarrar neste problema. Aparentemente esse bug não acontece quando eu implemento o GAS como API no lugar de WebApp, então talvez usar o GAS como uma API de um HTML hospedado no Google Sites resolva, mas ainda preciso testar.

- **O macro de instalação no Google Planilhas não está muito intuitivo**

Assim que você copia a planilha modelo para criar a sua biblioteca, você é instruído a "instalar" a biblioteca. Internamente, o GAS cria os gatilhos necessários pro script funcionar adequadamente, e pede o usuário para implementar o projeto, etapa responsável por criar o WebApp.

Eu ainda não dei a atenção devida a esse macro de instalação. Ter que pedir o usuário pra lembrar de vários passos pra implementar o projeto, fechar a janela de instalação, executar os passos, re-abrir a instalação... Isso não é intuitivo. Mesmo que o usuário só tenha que fazer isso uma vez, eu quero que essa etapa seja menos "dolorosa".

- **O usuário não consegue baixar atualizações deste projeto na sua biblioteca**

Gostaria muito de não ter que exigir do usuário que ele copie novamente um novo modelo, refaça o processo de instalação, e tenha que mover os dados da sua versão antiga pra atual. Ainda não tenho um bom plano para como fazer isso.

- **O usuário ainda não consegue customizar o tema da biblioteca sem editar o HTML**

Eu já montei a folha de estilos do site pensando em deixar as cores e fontes simples de se editar, mas ainda preciso fazer uma interface para o usuário poder editar o tema e adaptar ao seu gosto. 

- **Preciso dar um nome decente pra esse projeto /j**

_"É uma biblioteca. E ela está no Apps Script. Logo, 'BibliotecAS'!"_<br>
Isso foi o melhor que eu consegui pensar em meses, desculpe :p

## Agradecimentos

- Aos meus colegas de curso **Aline**, **Geize**, **Gilmar** e **Paula**, por me ajudarem a elaborar a ideia deste projeto e me dar o apoio didático e pedagógico;
- Ao meu amigo **Cian**, por me ajudar a entender como eu subia esse projeto no GitHub :p

---

<sup>_Google Apps Script_ e _Planilhas Google_ são marcas da Google LLC.</sup>