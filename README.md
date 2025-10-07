# Submundo808 - Back-end API

Uma API REST desenvolvida em Node.js para o sistema Submundo808, uma plataforma de gerenciamento de eventos underground e artistas da cena eletrônica.

## 🎵 Sobre o Projeto

O Submundo808 é uma API que permite gerenciar eventos e artistas do cenário musical underground, focando em gêneros como Bass, Techno, Trap, Funk e música eletrônica alternativa. A plataforma oferece endpoints para consulta e manipulação de dados de eventos e artistas.

## 🛠️ Tecnologias

- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **PostgreSQL** - Banco de dados
- **CORS** - Habilitação de requisições cross-origin
- **dotenv** - Gerenciamento de variáveis de ambiente
- **Multer** - Upload de arquivos
- **Nodemon** - Desenvolvimento com hot reload

## 📁 Estrutura do Projeto

```
├── server.js                 # Arquivo principal do servidor
├── package.json             # Dependências e scripts
├── src/
│   ├── config/
│   │   └── database.js      # Configuração do banco de dados
│   ├── controllers/
│   │   └── eventoController.js  # Controladores dos eventos
│   ├── database/
│   │   └── schema.sql       # Schema e dados iniciais do banco
│   ├── models/
│   │   └── eventoModel.js   # Modelos de dados
│   └── routes/
│       └── eventoRoutes.js  # Rotas da API
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js instalado
- PostgreSQL instalado e configurado

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/yrkeviin/submundo-back-end.git
cd submundo-back-end
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
# Crie um arquivo .env na raiz do projeto
PORT=4000
DATABASE_URL=sua_string_de_conexao_postgres
```

4. Execute o schema do banco de dados:
```bash
psql -U seu_usuario -d postgres -f src/database/schema.sql
```

5. Inicie o servidor:
```bash
# Desenvolvimento
npm run dev

# Produção
npm start
```

## 📚 Endpoints da API

### Eventos

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/eventos` | Lista todos os eventos |
| GET | `/api/eventos/:id` | Busca evento por ID |
| PUT | `/api/eventos/:id` | Atualiza evento |
| DELETE | `/api/eventos/:id` | Remove evento |

### Exemplo de Resposta - Eventos:
```json
{
  "id": 1,
  "name": "Submundo808: Bass na Quebrada",
  "date": "2025-09-10",
  "location": "Valinhos",
  "description": "Festa com DJs do Submundo808, bass pesado e vibes underground",
  "photo": "url_da_foto"
}
```

## 🎨 Dados Pré-carregados

O banco vem com dados de exemplo incluindo:
- **8 eventos** com diferentes gêneros (Bass, Techno, Trap, Funk)
- **8 artistas** com biografias e fotos
- Eventos em cidades da região de Campinas (Valinhos, Campinas, Hortolândia, Vinhedo, São Paulo)

## 🌐 CORS

A API está configurada para aceitar requisições de qualquer origem, facilitando a integração com front-ends diversos.

## 👨‍💻 Desenvolvedor

Desenvolvido por **Kevin Lima** (@yrkeviin)