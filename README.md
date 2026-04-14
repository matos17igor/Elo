# 🛟 Elo - Registro de Pessoas Desaparecidas

## 1 - Apresentação da Ideia
Este projeto foi desenvolvido como solução para o desafio de mitigar os impactos causados por enchentes e desastres naturais. Ao analisar o cenário de evacuações de emergência, identifiquei que a separação de famílias e a perda de contacto são problemas críticos que agravam o caos. A falta de uma fonte de dados centralizada e fiável motivou a criação desta plataforma, focada em organizar a informação e agilizar o reencontro de pessoas.

## 2 - Problema Escolhido
Durante inundações, a infraestrutura de comunicação torna-se instável e a informação espalha-se de forma fragmentada em redes sociais e grupos de mensagens.

* **Dificuldade enfrentada:** Dados desencontrados, duplicados ou desatualizados sobre o paradeiro de sobreviventes e desaparecidos.
* **Pessoas impactadas:** Familiares em busca de entes queridos e equipas de voluntários/Defesa Civil que operam em abrigos.
* **Relevância:** Centralizar estes dados reduz o tempo de resposta das equipas de apoio e alivia o desgaste emocional das famílias, permitindo uma gestão logística mais eficiente dos resgatados.

## 3 - Solução Proposta
O **Elo** é um sistema de registro e consulta de pessoas afetadas por desastres, projetado para funcionar com rapidez e simplicidade.

* **Funcionamento Geral:** A plataforma permite que cidadãos registrem pessoas desaparecidas (com descrição e local onde foram vistas pela última vez) e que voluntários em abrigos registrem pessoas acolhidas.
* **Resolução do Problema:** O sistema atua como um facilitador, cruzando os dados de quem é procurado com os dados de quem deu entrada nos pontos de apoio. 
* **Diferencial:** Foco em usabilidade e facilidade (essencial em cenários de crise), interface intuitiva com feedback visual por cores.

## 4 - Estrutura do Sistema
O projeto foi estruturado seguindo as melhores práticas de desenvolvimento para garantir manutenção e segurança:

### **Front-end (React)**
* Interface limpa com formulários de cadastro rápido e um dashboard para voluntários.
* Consumo da API de forma assíncrona para garantir fluidez.

### **Back-end (Node.js + Express)**
* **Arquitetura:** Organizado em camadas (**Controllers, Services e Repositories**) para uma separação clara de responsabilidades.
* **Segurança:** Implementação de autenticação para voluntários utilizando **JWT (JSON Web Tokens)** e proteção de dados sensíveis com **bcrypt**.
* **Funcionalidades:** Endpoints para CRUD de pessoas, gestão de abrigos e lógica de procura aproximada.

### **Banco de Dados (SQLite + Prisma)**
* **SQLite:** Escolhido pela sua portabilidade e rapidez de implementação em protótipos de utilidade pública.
* **Modelagem:** Estruturado com tabelas de `Users` (voluntários), `Persons` (registos de desaparecidos/encontrados) e `Locations` (pontos de acolhimento).
