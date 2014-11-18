# Lâmpada Mágica

O Lâmpada Mágica é uma framework livre de frontend que cria um ambiente para você desenvolver seu projeto seja ele em frontend puro ou então servir os estáticos com sua framework preferida.

Para começar a usar, você precisa ter instalado em seu ambiente de desenvolvimento:

 * Node.js (http://nodejs.org/)
 * Ruby (https://www.ruby-lang.org/)
 * Sass (http://sass-lang.com/)

### 1. Instalando o Lâmpada Mágica

Na raíz do seu projeto, clone o repositório do lâmpada mágica:

```bash
git clone https://github.com/victormagalhaes/lampada.git
```

### 2. Instalando as dependências

Na raíz do seu projeto:

```bash
npm install
```

### 3. Usando os comandos

O lâmpada mágica tem 3 comandos que controlam suas ações:

* _gulp monitorar_ - Esse comando serve para observar as pastas dos arquivos fontes e atualizar a pasta de desenvolvimento quando houver alguma mudança.
* _gulp compilar-desenvolvimento_ - Esse comando serve para compilar todos os arquivos que existem na pasta dos arquivos fontes e atualizar todos da pasta de desenvolvimento.
* _gulp compilar-producao_ - Parecido com o acima, só que manda a versão minificada dos arquivos para a pasta de produção.
