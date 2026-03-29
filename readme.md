# Projeto Carrinho Shopee (Backend)

## 🛒 Objetivo
Criar um sistema de carrinho de compras baseado na lógica do e-commerce da Shopee. O sistema armazena produtos, gerencia quantidades e realiza o cálculo de subtotais e do valor total da compra de forma automática no terminal.

## 📦 Entidades do Domínio
* **Item:** Representa um produto. Possui nome, preço, quantidade e uma função para calcular seu próprio subtotal.
* **Carrinho (Cart):** Gerencia a lista de itens do usuário e centraliza as operações da compra.

## 🚀 Funcionalidades
* **Adicionar Item (`addItem`):** Insere um novo produto na lista do carrinho.
* **Remover Item (`removeItem`):** Diminui a quantidade de um produto no carrinho em uma unidade. Se a quantidade for 1, o item é removido da lista.
* **Deletar Item (`deleteItem`):** Remove um produto completamente do carrinho pelo nome, independentemente de sua quantidade.
* **Exibir Carrinho (`displayCart`):** Mostra uma lista formatada no console com todos os itens, quantidades, preços unitários e subtotais.
* **Calcular Total (`calcTotal`):** Soma o subtotal de todos os itens e exibe o valor final a ser pago.

## 💻 Tecnologias
* JavaScript (ES Modules)
* Node.js

## 🛠️ Como executar
1. Clone este repositório na sua máquina.
2. Abra o terminal na pasta raiz do projeto.
3. Execute o comando principal para ver a simulação do carrinho rodando:
   ```bash
   node src/index.js