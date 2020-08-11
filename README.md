
# API REST Digimon(s)
Projeto prático de desenvolvimento de API - REST usando JWT para validar as requisições para a API.

## Instalando
Execute o código abaixo dentro do diretório que deseja executar o código:
`git clone https://github.com/CaioAFernandes/API-REST-Digimon.git`

Após finalizar o clone da API, execute:
`yarn install or npm install`

### Configurando arquivo .env
- Windows
	`fsutil file createnew {raiz do projeto}.env 1000`
- Linux
	`touch .env`
#### Edite o arquivo .env no editor de texto
- Adicione as Linhas
	`URL='{endereço ip ou http://localhost}'`
	`PORT='{porta de execução da aplicação}'`

### Configurando a conexão com o Banco
 ##### Arquivos:
  - Connection.ts
  - knexfile.ts

#### MYSQL
    const Connection = knex({
	    client: 'mysql',
	    connection: {
		    host: process.env.BD_HOST,
		    user: process.env.BD_USER,
		    password: process.env.BD_PASSWORD,
		    database: process.env.BD_DATABASE
	    }
    })
#### SQLITE3
    import path from  'path';
    const Connection = knex({
	    client: 'sqlite3',
	    connection: {
	    filename: path.resolve(__dirname, 'database.sqlite')
	    },
	    useNullAsDefault:  true
    })

##### Criando tabelas
`yarn knex:migrate or npm run knex:migrate`

##### Preenchendo as tabelas
`yarn knex:seed or npm run knex:seed`

## Rodando a Aplicação
- Production Mode
`yarn start or npm start`
- Dev Mode
`yarn dev or npm run dev`

---
### MIT License
*Copyright (c) 2020 Caio Alberto Fernandes*

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
