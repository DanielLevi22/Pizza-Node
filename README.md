Pizzaria Node Backend
Bem-vindo ao Pizzaria Node Backend! Este repositório contém o código para o backend de um sistema de pedidos de pizza construído com Node.js e Prisma. Abaixo, você encontrará informações sobre como usar as diferentes rotas e funcionalidades fornecidas por este backend.

Como Começar
Para usar este backend, siga as etapas abaixo:

Clone este repositório em sua máquina local.
Instale as dependências necessárias com npm install.
Configure seu banco de dados no arquivo .env.
Execute a migração do Prisma com npx prisma migrate dev.
Inicie o aplicativo com npm dev.
Alternativamente, você pode usar o Docker e o Docker Compose:

bash
Copy code
docker-compose up -d
Isso iniciará os containers tanto para o servidor Node.js quanto para o banco de dados.

Documentação da API
1. Registro de Usuário
http
Copy code
POST http://localhost:3333/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "senha123"
}
2. Login de Usuário
http
Copy code
POST http://localhost:3333/session
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "senha123"
}
3. Obter Usuário Atual
http
Copy code
POST http://localhost:3333/me
Content-Type: application/json
Authorization: Bearer <token>
4. Criar Categoria
http
Copy code
POST http://localhost:3333/category
Content-Type: application/json
Authorization: Bearer <token>

{
  "name": "Bebidas"
}
5. Listar Categorias
http
Copy code
GET http://localhost:3333/category
Content-Type: application/json
Authorization: Bearer <token>
6. Criar Produto
http
Copy code
POST http://localhost:3333/product
Content-Type: multipart/form-data
Authorization: Bearer <token>

{
  "name": "Pizza Margherita",
  "price": "15.99",
  "description": "Pizza margherita clássica",
  "banner": "pizza_margherita.png",
  "category_id": "159f5e0d-c555-42cd-a4e2-1e78f15f3b89"
}
7. Criar Pedido
http
Copy code
POST http://localhost:3333/order
Content-Type: application/json
Authorization: Bearer <token>

{
  "table": 25
}
8. Excluir Pedido
http
Copy code
DELETE http://localhost:3333/order?order_id=903e7939-ee2a-4c43-a1e4-ec2df6a8fda0
Content-Type: application/json
Authorization: Bearer <token>
9. Adicionar Item ao Pedido
http
Copy code
POST http://localhost:3333/order/add
Content-Type: application/json
Authorization: Bearer <token>

{
  "amount": 5,
  "order_id": "605cfee9-71c3-4d62-8043-26602227a4bd",
  "product_id": "35b560b5-d758-4dc2-b50c-60b5cfb6c2e5"
}
10. Excluir Item do Pedido
http
Copy code
DELETE http://localhost:3333/order/delete?item_id=07300333-7dcc-46d7-b515-ec6198258de2
Content-Type: application/json
Authorization: Bearer <token>
11. Enviar Pedido
http
Copy code
PUT http://localhost:3333/order/send
Content-Type: application/json
Authorization: Bearer <token>

{
  "order_id": "605cfee9-71c3-4d62-8043-26602227a4bd"
}
12. Listar Pedidos
http
Copy code
GET http://localhost:3333/orders
Content-Type: application/json
Authorization: Bearer <token>
13. Detalhes do Pedido
http
Copy code
GET http://localhost:3333/order/detail?order_id=605cfee9-71c3-4d62-8043-26602227a4bd
Content-Type: application/json
Authorization: Bearer <token>
14. Finalizar Pedido
http
Copy code
POST http://localhost:3333/order/finish
Content-Type: application/json
Authorization: Bearer <token>

{
  "order_id": "605cfee9-71c3-4d62-8043-26602227a4bd"
}
