var aplicacao = './aplicacao';
var recursos = aplicacao + '/origem/recursos';

var parametros = {

    // Raiz do projeto
    aplicacao: aplicacao,

    // Caminho onde ficam todos os arquivos fontes
    origem: aplicacao + '/origem',

    // Caminho para qual serão gerados os arquivos otimizados
    destino: aplicacao + '/destino',

    // Caminho onde ficam armazenados os recursos da framework
    recursos: aplicacao + '/origem/recursos',

    // Caminho dos templates
    templates: recursos + '/templates',

    // Caminho dos arquivos de estilos
    estilos: recursos + '/estilos',

    // Caminho dos scripts
    scripts: recursos + '/scripts',

    // Caminho das imagens
    imagens: recursos + '/imagens',

    // Nome do arquivo que faz todos os includes de SASS da framework
    arquivo_base_sass: recursos + '/estilos/base.sass',

    // Minificar arquivos na compilação?
    minificar: true
};

module.exports = parametros;
