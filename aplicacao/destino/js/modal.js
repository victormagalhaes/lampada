$.modal=function(o){var a,e,n,t,d,r,i,l,c;switch(c={elemento:"",metodo:"criar",onClose:function(){}},o=$.extend({},c,o),e=o.elemento instanceof jQuery?o.elemento:$(o.elemento),n=$(window),a=$("body"),t=$.Callbacks(),t.add(o.onClose),d=function(){var o,a;return a=e.attr("data-titulo"),o='<div class="janela-modal">\n	<div class="area-modal">\n		<div class="protecao-modal"></div>\n		<div class="conteudo-modal">\n			<div class="agrupador-modal">\n				<span class="titulo-modal">'+a+'</span>\n				<a class="botao-modal" href="javascript:;"></a>\n			</div>\n			<div class="item-modal"></div>\n		</div>\n	</div>\n</div>',$(o).appendTo("body").hide().find(".item-modal").wrapInner(e),$(document).keyup(function(o){return 27===o.keyCode?r():void 0}),n.resize(function(){return ostrar()}),e.show()},l=function(){var o,d;return d=e.parents(".janela-modal"),o=d.find(".conteudo-modal"),d.css({top:n.scrollTop()}).show(),a.css({overflow:"hidden",position:"relative"}),o.css({top:(n.height()-o.height())/2,left:(n.width()-o.width())/2}),d.find(".botao-modal").click(function(){return t.fire("botao_fechar"),r()}),d.find(".protecao-modal").click(function(){return t.fire("protecao_modal"),r()}),d.find(".botao.alternado").click(function(){return r()})},i=function(){return n=e.parents(".janela-modal"),n.addClass("pop-up").find(".item-modal").children().addClass("alternado"),n.show(),n.find(".botao-modal, .protecao-modal, .botao.alternado").click(function(){return r()})},r=function(){return $(o.elemento).parents(".janela-modal").hide(),t.remove(o.onClose),a.removeAttr("style")},o.metodo){case"criar":return d();case"mostrar":return l();case"janela":return i();case"esconder":return r()}};backs.fire("botao_fechar");
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
