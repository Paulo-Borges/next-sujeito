🚀🪐 Star Wars & Pokémon Data FetcherUm projeto de estudo do Next.js que demonstra o uso de Server Components para realizar a busca de dados (data fetching) em diferentes APIs públicas, como Sta1r Wars API (SWAPI), DummyJSON e PokeAPI, e exibi-los em diversas rotas da aplicação.

✨ Funcionalidades
Este projeto exemplifica as seguintes práticas e funcionalidades:
Next.js App Router: Utilização do novo sistema de roteamento do Next.js.Server Components: Implementação de componentes assíncronos para buscar dados diretamente no servidor.
Data Fetching: Requisições fetch com tipagem robusta em TypeScript.
Tipagem com TypeScript: Uso de tipos e interfaces para garantir a segurança e a clareza do código.
Estilização com Tailwind CSS:
Design responsivo e rápido com classes utilitárias.
Estrutura de Rotas: Navegação entre as rotas /, /posts e /dashboard.

🛠️ Tecnologias UtilizadasNext.js (Framework React)TypeScript (Linguagem de Programação)Tailwind CSS (Framework CSS)Geist Fonts (Fontes utilizadas no RootLayout)

💻 Estrutura do ProjetoO projeto é organizado com as seguintes rotas e componentes:
Rota / ArquivoComponente Principal API Consumida Descrição app/page.tsx Home https://swapi.dev/api/planets?limit=3Exibe nome, diâmetro e clima de 3 planetas de Star Wars.app/posts/page.tsx
Post shttps://dummyjson.com/posts?limit=5Exibe o título e corpo de 5 posts de exemplo.app/dashboard/page.tsx
Dashboard https://pokeapi.co/api/v2/pokemon?limit=5 Exibe o nome e a URL de 5 Pokémon.
app/layout.tsx RootLayout N/A Define a estrutura base, incluindo a Header e Footer.
components/header.tsxHeaderN/AComponente de navegação fixa com links.
⚙️ Instalação e ExecuçãoPara rodar este projeto localmente, siga os passos abaixo:
Pré-requisitos Node.js (versão LTS recomendada)
npm ou yarn PassosClone o repositório:
Bashgit clone [URL_DO_SEU_REPOSITORIO]
cd [NOME_DO_SEU_REPOSITORIO]
Instale as dependências:Bash npm install

# ou

yarn install
Inicie o servidor de desenvolvimento:Bash npm run dev

# ou

yarn dev
Abra seu navegador e acesse: http://localhost:3000🤝

ContribuiçãoContribuições são sempre bem-vindas!

Sinta-se à vontade para abrir uma issue ou enviar um pull request com melhorias.

Faça o fork do projeto.

Crie uma branch para sua funcionalidade (git checkout -b feature/AmazingFeature).

Faça o commit das suas alterações (git commit -m 'Add some AmazingFeature').

Faça o push para a branch (git push origin feature/AmazingFeature).

Abra um Pull Request.
