document.addEventListener('DOMContentLoaded', function() {
  // Selecione o elemento de destino
  var destinatarioSelect = document.getElementById('destinatario');

  // Use fetch para obter o conteúdo do arquivo de texto
  fetch('opcoes.txt')
    .then(response => response.text())
    .then(data => {
      // Divida o conteúdo do arquivo em linhas
      var linhas = data.split('\n');

      // Adicione cada par de nome e e-mail ao elemento select
      linhas.forEach(function(linha) {
        // Remova espaços em branco extras e divida a linha em nome e e-mail
        var partes = linha.trim().split(':');
        if (partes.length === 2) {
          var nome = partes[0];
          var email = partes[1];

          // Crie a opção e adicione ao elemento select
          var option = document.createElement('option');
          option.value = email;
          option.textContent = nome;
          destinatarioSelect.appendChild(option);
        }
      });
    })
    .catch(error => {
      console.error('Erro ao carregar opções:', error);
    });

  // Adicione um ouvinte de evento para o botão
  document.getElementById('enviarEmail').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      // Obtenha o valor selecionado da lista
      var destinatario = destinatarioSelect.value;

      // Obtenha o valor do campo Cc, substitua com os endereços de e-mail desejados
      var cc = 'pauloamospfeifer@gmail.com,	diretoria@i4mat.com.br,financeiro@i4mat.com.br';

      // Obtenha o título da página atual
      var tituloPagina = "A.H. APOIO " + tabs[0].title.replace('Pontta', '').replace(' - Primeira versão', '');
      var tituloPaginaSemPrefixo = tituloPagina.replace('A.H. APOIO', '').trim();

      // Texto do assunto e corpo do e-mail com codificação adequada
      var assunto = encodeURIComponent(tituloPagina);
      var corpoEmail = encodeURIComponent(`Prezados Senhores,\n\nSegue em anexo os detalhes do Pedido: ${tabs[0].title.replace('Pontta', '').replace(' - Primeira versão', '')}\n\n\n\n A liberação para produção deste projeto é após a efetiva confirmação do pagamento. \n\nAtenciosamente\nDepto Administrativo`);

      // Crie a URL para abrir o cliente de e-mail padrão com os parâmetros necessários
      var emailUrl = `mailto:${encodeURIComponent(destinatario)}?cc=${encodeURIComponent(cc)}&subject=${assunto}&body=${corpoEmail}`;

      // Abra o cliente de e-mail padrão
      chrome.tabs.create({ url: emailUrl });

      // Continue com o download do arquivo
      chrome.downloads.download({
        url: tabs[0].url,
        filename: `${tituloPaginaSemPrefixo}.pdf`, // Nome do arquivo a ser salvo
        saveAs: false
      });
    });
  });
});

 // Adicione um ouvinte de evento para o botão
 document.getElementById('enviarRetirada').addEventListener('click', function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    
    // Selecione o elemento de destino
  var destinatarioSelect = document.getElementById('destinatario');
    
    // Obtenha o valor selecionado da lista
    var destinatario = destinatarioSelect.value;

    // Obtenha o valor do campo Cc, substitua com os endereços de e-mail desejados
    var cc = 'pauloamospfeifer@gmail.com,	diretoria@i4mat.com.br,financeiro@i4mat.com.br';

    // Obtenha o título da página atual

    var tituloPagina = "A.H. APOIO - Pedido Pronta Para Retirar " + tabs[0].title.replace('Pontta', '');
    var tituloPaginaSemPrefixo = tituloPagina.replace('A.H. APOIO', '').trim();
    
    // Texto do assunto e corpo do e-mail com codificação adequada
    var assunto = encodeURIComponent(tituloPagina);
    var corpoEmail = encodeURIComponent(`Prezados Senhores,\n\n\n PEDIDOS PRONTOS AGUARDANDO RETIRADA:${tabs[0].title.replace('Pontta', '')}\n\n\nNossa PLATAFORMA DE EMBARQUE não tem condições de armazenar pedidos prontos, sendo assim, contamos com sua compreensão e colaboração para imediata retirada.\n URGENTE: \n\nPOR FAVOR CONFIRME DIA E HORA PARA RETIRADA SENDO IMPRESCINDIVEL IDENTIFICAR O CLIENTE E RESPECTIVO(s) NÚMERO(s) DO(s) PEDIDO(s).\n
    LEMBRANDO QUE HORÁRIO DO ALMOÇO É DAS 12:00 ÀS 13:00 HORAS ENCERRANDO ENTREGA AS 16:30 HORAS!!! \n\n
    Desde já a Diretoria agradece a compreensão e a sua colaboração, \n\n\n
    Atenciosamente\nDepto Administrativo`);


    // Crie a URL para abrir o cliente de e-mail padrão com os parâmetros necessários
    var emailUrl = `mailto:${encodeURIComponent(destinatario)}?cc=${encodeURIComponent(cc)}&subject=${assunto}&body=${corpoEmail}`;

    // Abra o cliente de e-mail padrão
    chrome.tabs.create({ url: emailUrl });

  });
});

 // Adicione um ouvinte de evento para o botão
 document.getElementById('enviarPrazo').addEventListener('click', function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    
    // Selecione o elemento de destino
  var destinatarioSelect = document.getElementById('destinatario');
    
    // Obtenha o valor selecionado da lista
    var destinatario = destinatarioSelect.value;

    // Obtenha o valor do campo Cc, substitua com os endereços de e-mail desejados
    var cc = 'pauloamospfeifer@gmail.com,	diretoria@i4mat.com.br,financeiro@i4mat.com.br';

    // Obtenha o título da página atual
    var tituloPagina = "A.H. APOIO - Previsão de Entrega - " + tabs[0].title.replace('Pontta', '');
    var tituloPaginaSemPrefixo = tituloPagina.replace('A.H. APOIO', '').trim();

    // Texto do assunto e corpo do e-mail com codificação adequada
    var assunto = encodeURIComponent(tituloPagina);
    var corpoEmail = encodeURIComponent(`Prezados Senhores,\n\n\nPEDIDOS LIBERADOS PARA PRODUÇÃO: ${tabs[0].title.replace('Pontta', '')} \n\n DATA ENTREGA:\n\nOBS:(((LIGAR COM ANTECEDÊNCIA PARA CONFIRMAR DATA E HORÁRIO PARA RETIRADA DO PRODUTO))) - lembrando que o horário de almoço é das 12:00 as 13:00 horas!!! \n\n\nAtenciosamente\nDepto Administrativo`);

    // Crie a URL para abrir o cliente de e-mail padrão com os parâmetros necessários
    var emailUrl = `mailto:${encodeURIComponent(destinatario)}?cc=${encodeURIComponent(cc)}&subject=${assunto}&body=${corpoEmail}`;

    // Abra o cliente de e-mail padrão
    chrome.tabs.create({ url: emailUrl });

  });
});