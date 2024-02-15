Pizzaria Node Backend
Bem-vindo ao Pizzaria Node Backend! Este repositório abriga o backend de um sistema de pedidos de pizza desenvolvido com Node.js e Prisma. Aqui estão as instruções para começar a usar e explorar as funcionalidades:

Como Iniciar
Clone o Repositório:

git clone https://github.com/seu-usuario/pizzaria-node-backend.git

Instale as Dependências:

cd pizzaria-node-backend
npm install

Configure o Banco de Dados:

Copie o arquivo .env.example para um novo arquivo chamado .env. Configure as variáveis de ambiente necessárias para o banco de dados no arquivo .env.

Execute as Migrações do Prisma:

npx prisma migrate dev

Inicie o Servidor:

npm run dev

Ou usando Docker:

docker-compose up -d

Funcionalidades Principais
Autenticação de Usuário:
Registre-se e faça login para obter acesso. Recupere informações do usuário autenticado.

Gestão de Categorias e Produtos:
Crie categorias para organizar seus produtos. Adicione novos produtos com detalhes como nome, preço e descrição.

Pedidos Simplificados:
Realize pedidos indicando a mesa. Adicione ou remova itens do pedido. Acompanhe o status do pedido e envie para preparo.

Explore a documentação completa da API no código-fonte e aproveite a experiência de pedidos de pizza automatizada com Pizzaria Node Backend!
