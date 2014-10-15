aplicacao = 'aplicacao'
recursos = aplicacao + '/origem/recursos'

config =
    aplicacao: aplicacao
    origem: aplicacao + '/origem'
    producao: aplicacao + '/producao'
    qa: aplicacao + '/qa'
    recursos: recursos

    templates: recursos + '/templates'
    estilos: recursos + '/estilos'
    scripts: recursos + '/scripts'
    imagens: recursos + '/imagens'

    arquivo_base_sass: recursos + '/estilos/base.sass'

    arquivo_final_script: 'aplicacao.js'
    arquivo_final_css: 'aplicacao.css'


module.exports = config
