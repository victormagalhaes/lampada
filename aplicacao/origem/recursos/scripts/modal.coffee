# modal(elemento: "criar", metodo: "", largura: "", altura: "")
#// Exibe uma janela modal com o conteúdo extraído de um elemento.
$.modal = (opcoes) ->
	padroes =
		elemento: ""
		metodo: "criar"
		onClose: () ->
	opcoes = $.extend {}, padroes, opcoes
	$elemento = if opcoes.elemento instanceof jQuery then opcoes.elemento else $(opcoes.elemento)
	$janela = $(window)
	$corpo = $("body")
	callbacks = $.Callbacks()

	callbacks.add(opcoes.onClose)

	criar = ->
		titulo = $elemento.attr("data-titulo")
		modelo = """
			<div class="janela-modal">
				<div class="area-modal">
					<div class="protecao-modal"></div>
					<div class="conteudo-modal">
						<div class="agrupador-modal">
							<span class="titulo-modal">#{titulo}</span>
							<a class="botao-modal" href="javascript:;"></a>
						</div>
						<div class="item-modal"></div>
					</div>
				</div>
			</div>
		"""

		$(modelo).appendTo("body").hide().find(".item-modal").wrapInner($elemento)

		$(document).keyup (e) ->
			if (e.keyCode == 27)
				esconder()

		$janela.resize ->
			ostrar();

		$elemento.show()


	mostrar = ->
		$objeto = $elemento.parents(".janela-modal")
		$conteudo = $objeto.find(".conteudo-modal")

		$objeto.css(top: $janela.scrollTop()).show()

		$corpo.css
			overflow: "hidden"
			position: "relative"

		$conteudo.css
			top: ($janela.height() - $conteudo.height()) / 2
			left: ($janela.width() - $conteudo.width()) / 2

		$objeto.find(".botao-modal").click ->
			callbacks.fire("botao_fechar")
			esconder()
		$objeto.find(".protecao-modal").click ->
			callbacks.fire("protecao_modal")
			esconder()
		$objeto.find(".botao.alternado").click ->
			esconder()

	janela = ->
		$janela = $elemento.parents(".janela-modal")

		$janela.addClass("pop-up").find(".item-modal").children().addClass("alternado")
		$janela.show()

		$janela.find(".botao-modal, .protecao-modal, .botao.alternado").click ->
			esconder()

	esconder = ->
		$(opcoes.elemento).parents(".janela-modal").hide()
		callbacks.remove(opcoes.onClose)

		$corpo.removeAttr("style")

	switch opcoes.metodo
		when "criar"
			criar()

		when "mostrar"
			mostrar()

		when "janela"
			janela()

		when "esconder"
			esconder()
