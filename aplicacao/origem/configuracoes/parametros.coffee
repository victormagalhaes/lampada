aplicacao = 'aplicacao'

config =
    origem: aplicacao + '/origem'
    producao: aplicacao + '/producao'
    qa: aplicacao + '/qa'
    recursos: origem + '/recursos'

    templates: recursos + '/templates'
    estilos: recursos + '/estilos'
    scripts: recursos + '/scripts'
    imagens: recursos + '/imagens'

    arquivo_base_sass: estilos + '/base.sass'

    arquivo_final_script: 'aplicacao.js'
    arquivo_final_css: 'aplicacao.css'


module.exports = config
