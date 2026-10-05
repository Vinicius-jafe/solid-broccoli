# solid-broccoli

Site institucional e vitrine de roteiros da **Bella Renda & Viagens**, uma agência de viagens voltada a mulheres. O projeto é uma aplicação web com **front-end em React** e **back-end em Node.js (Express) com SQLite**, que apresenta roteiros nacionais e internacionais, a história da marca e um formulário de contato para captação de interessados.

Este repositório faz parte de um projeto maior, em conjunto com o [rdstationIntegrat](https://github.com/Vinicius-jafe/rdstationIntegrat), serviço que envia os contatos (leads) para o RD Station.

---

## Funcionalidades

- **Página inicial** com destaques, roteiros internacionais, roteiros pelo Brasil e benefícios da agência
- **Roteiros** com filtro por tipo: todos, nacionais ou internacionais
- **Sobre**, com missão e valores da marca
- **Contatos**, com formulário de interesse (nome, telefone, e-mail, cidade de origem, destinos, período e quantidade de pessoas)
- **API de pacotes** para listar, buscar por slug, criar/atualizar e remover roteiros
- **Login administrativo** simples no back-end
- Interface responsiva, com menu adaptado para celular e notificações (toasts)

## Tecnologias

| Camada | Tecnologia |
| ------ | ---------- |
| Front-end | React 19, React Router 7, Create React App com CRACO |
| Interface | Tailwind CSS, componentes Radix UI (padrão shadcn/ui), Lucide Icons |
| Formulários | React Hook Form, Zod |
| Back-end | Node.js, Express 5, CORS |
| Banco de dados | SQLite (`sqlite3` e `sqlite`) |

## Estrutura do projeto

```
solid-broccoli/
├── backend/
│   ├── server.js                # Servidor Express
│   ├── db.js                    # Conexão com o SQLite
│   ├── database.db             # Banco de dados
│   ├── detect-and-install.js   # Utilitário que detecta e instala pacotes importados
│   └── routes/
│       ├── auth.js              # Login administrativo
│       └── packages.js          # CRUD de pacotes (roteiros)
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/          # Navbar, Footer, ContactForm, DestinationCard e ui/
│   │   ├── pages/               # Home, Sobre, Roteiros, Contatos
│   │   ├── services/api.js      # Chamadas à API
│   │   ├── data/constants.js    # Benefícios exibidos na home
│   │   ├── hooks/               # use-toast
│   │   └── lib/utils.js
│   ├── craco.config.js
│   ├── tailwind.config.js
│   └── package.json
└── README.md
```

## Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- npm ou [Yarn](https://yarnpkg.com/) (o front-end declara Yarn 1.x como gerenciador)

## Como executar

### 1. Clonar o repositório

```bash
git clone https://github.com/Vinicius-jafe/solid-broccoli.git
cd solid-broccoli
```

### 2. Iniciar o back-end

```bash
cd backend
npm install
npm run dev      # desenvolvimento, com nodemon
# ou
npm start        # produção
```

O servidor sobe em `http://localhost:4000`. A porta pode ser alterada pela variável de ambiente `PORT`. A tabela `packages` é criada automaticamente na primeira execução.

### 3. Iniciar o front-end

Em outro terminal:

```bash
cd frontend
yarn install     # ou npm install
yarn start       # ou npm start
```

O site abre em `http://localhost:3000`.

Para gerar a versão de produção:

```bash
yarn build
```

## Configuração

### Endereço da API no front-end

O endereço do back-end é definido na constante `API_BASE_URL` em `frontend/src/services/api.js`. Para desenvolvimento local, aponte para o seu servidor:

```js
const API_BASE_URL = 'http://localhost:4000';
```

O arquivo `frontend/.env` também contém a variável `REACT_APP_BACKEND_URL`, mas o código atual lê o endereço diretamente de `api.js`.

### Outras variáveis do front-end (`frontend/.env`)

| Variável | Descrição |
| -------- | --------- |
| `REACT_APP_BACKEND_URL` | Endereço do back-end |
| `WDS_SOCKET_PORT` | Porta do socket do servidor de desenvolvimento |
| `REACT_APP_ENABLE_VISUAL_EDITS` | Ativa o plugin de edição visual (`true` ou `false`) |
| `ENABLE_HEALTH_CHECK` | Ativa o plugin de health check (`true` ou `false`) |

## API do back-end

Prefixo padrão: `http://localhost:4000`.

### Autenticação

| Método | Rota | Descrição |
| ------ | ---- | --------- |
| POST | `/api/auth/login` | Recebe `email` e `password` e retorna um token e o usuário. Responde `401` se as credenciais forem inválidas. |

O usuário administrador é fixo e está definido em `backend/routes/auth.js`.

### Pacotes (roteiros)

| Método | Rota | Descrição |
| ------ | ---- | --------- |
| GET | `/api/packages` | Lista todos os pacotes |
| GET | `/api/packages/:slug` | Busca um pacote pelo slug (`404` se não existir) |
| POST | `/api/packages` | Cria ou atualiza um pacote (`INSERT OR REPLACE`) |
| DELETE | `/api/packages/:id` | Remove um pacote pelo id |

Campos de um pacote:

| Campo | Tipo | Descrição |
| ----- | ---- | --------- |
| `id` | texto | Identificador (gerado automaticamente se omitido) |
| `slug` | texto | Gerado a partir do título se omitido |
| `title` | texto | Título do roteiro |
| `type` | texto | `nacional` ou `internacional` |
| `region` | texto | Região |
| `destination` | texto | Destino |
| `duration` | número | Duração |
| `priceFrom` | número | Preço inicial |
| `shortDescription` | texto | Descrição curta |
| `longDescription` | texto | Descrição longa |
| `images` | lista de textos | URLs das imagens |
| `inclusions` | lista de textos | Itens incluídos |
| `months` | lista de textos | Meses disponíveis |
| `featuredHome` | booleano | Exibir em destaque na página inicial |

Exemplo:

```bash
curl -X POST http://localhost:4000/api/packages \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Lisboa e Sintra",
    "type": "internacional",
    "region": "Europa",
    "destination": "Portugal",
    "duration": 7,
    "priceFrom": 8900,
    "shortDescription": "Sete dias entre Lisboa e Sintra.",
    "featuredHome": true
  }'
```

## Integração com o RD Station

O formulário da página **Contatos** coleta os dados de quem tem interesse em viajar. O envio desses contatos ao RD Station é feito pelo repositório [rdstationIntegrat](https://github.com/Vinicius-jafe/rdstationIntegrat), cujo endpoint `POST /lead` recebe `nome`, `email` e `mensagem` e os encaminha à API do RD Station.

No estado atual, o formulário do site envia os dados para `POST {API_BASE_URL}/contact`, com os campos `nome`, `telefone`, `email`, `cidadeOrigem`, `destinos`, `periodo` e `quantidadePessoas`. Esse endpoint precisa existir no back-end configurado em `API_BASE_URL`. Para usar a integração com o RD Station, é necessário apontar o formulário para o serviço `rdstationIntegrat` ou criar uma rota equivalente que repasse os dados a ele.

## Licença

Projeto acadêmico, sem fins comerciais.
