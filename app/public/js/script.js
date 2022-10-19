$(document).ready(function () {
    $("#btn").click(function () {
      $.ajax({
        type: "POST",
        url: "/cadastro",
        data: {
          'nome': $("#nome").val(),
          'email': $("#email").val(),
          'senha': $("#senha").val(),
          'telefone': $("#telefone").val(),
        },
        success: alert("sucesso"),
      });
    });
  });
  