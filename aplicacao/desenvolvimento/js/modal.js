$.modal = function(opcoes) {
  var $corpo, $elemento, $janela, callbacks, criar, esconder, janela, mostrar, padroes;
  padroes = {
    elemento: "",
    metodo: "criar",
    onClose: function() {}
  };
  opcoes = $.extend({}, padroes, opcoes);
  $elemento = opcoes.elemento instanceof jQuery ? opcoes.elemento : $(opcoes.elemento);
  $janela = $(window);
  $corpo = $("body");
  callbacks = $.Callbacks();
  callbacks.add(opcoes.onClose);
  criar = function() {
    var modelo, titulo;
    titulo = $elemento.attr("data-titulo");
    modelo = "<div class=\"janela-modal\">\n	<div class=\"area-modal\">\n		<div class=\"protecao-modal\"></div>\n		<div class=\"conteudo-modal\">\n			<div class=\"agrupador-modal\">\n				<span class=\"titulo-modal\">" + titulo + "</span>\n				<a class=\"botao-modal\" href=\"javascript:;\"></a>\n			</div>\n			<div class=\"item-modal\"></div>\n		</div>\n	</div>\n</div>";
    $(modelo).appendTo("body").hide().find(".item-modal").wrapInner($elemento);
    $(document).keyup(function(e) {
      if (e.keyCode === 27) {
        return esconder();
      }
    });
    $janela.resize(function() {
      return ostrar();
    });
    return $elemento.show();
  };
  mostrar = function() {
    var $conteudo, $objeto;
    $objeto = $elemento.parents(".janela-modal");
    $conteudo = $objeto.find(".conteudo-modal");
    $objeto.css({
      top: $janela.scrollTop()
    }).show();
    $corpo.css({
      overflow: "hidden",
      position: "relative"
    });
    $conteudo.css({
      top: ($janela.height() - $conteudo.height()) / 2,
      left: ($janela.width() - $conteudo.width()) / 2
    });
    $objeto.find(".botao-modal").click(function() {
      callbacks.fire("botao_fechar");
      return esconder();
    });
    $objeto.find(".protecao-modal").click(function() {
      callbacks.fire("protecao_modal");
      return esconder();
    });
    return $objeto.find(".botao.alternado").click(function() {
      return esconder();
    });
  };
  janela = function() {
    $janela = $elemento.parents(".janela-modal");
    $janela.addClass("pop-up").find(".item-modal").children().addClass("alternado");
    $janela.show();
    return $janela.find(".botao-modal, .protecao-modal, .botao.alternado").click(function() {
      return esconder();
    });
  };
  esconder = function() {
    $(opcoes.elemento).parents(".janela-modal").hide();
    callbacks.remove(opcoes.onClose);
    return $corpo.removeAttr("style");
  };
  switch (opcoes.metodo) {
    case "criar":
      return criar();
    case "mostrar":
      return mostrar();
    case "janela":
      return janela();
    case "esconder":
      return esconder();
  }
};
