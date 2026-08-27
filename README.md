Projeto Integrador

GUIA DO ALUNO

Instruções para edição e apresentação do projeto

---

### 1. Como abrir o projeto

Este guia mostra como editar e apresentar o seu projeto. Siga os passos abaixo para garantir que tudo funcione corretamente.

1. Abra o link do projeto no navegador (fornecido pelo professor).
2. Clique em **"Fork"** no canto superior direito para criar sua própria cópia de trabalho.
3. O editor de código abrirá automaticamente no seu navegador — **não é necessário instalar nada** no computador da escola.

### 2. Como editar o seu projeto

Abra o arquivo `src/PAGINAS/inicio.tsx` e edite **APENAS** o bloco localizado no topo do arquivo. Este é o local onde todas as informações do seu grupo devem ser inseridas.


Importante: O bloco abaixo é a parte mais importante do código para o seu grupo.


```tsx
// 
//  ✏️ EDITAR AQUI — DADOS DO SEU GRUPO
//  Troque os textos entre as aspas
// 

const DADOS_DO_GRUPO = {
  titulo: "TÍTULO DO TRABALHO",                    // ← Troque pelo título
  descricao: "DESCRIÇÃO BÁSICA DO SEU TRABALHO",   // ← Troque pela descrição
  materias: ["Programação", "Física", "Robótica"], // ← Troque pelas matérias
  videoYouTube: "dQw4w9WgXcQ",                    // ← ID do vídeo do YouTube
  imagem: "imagem-principal.jpg",                  // ← Nome da imagem na pasta IMAGENS
};

// 
//  ⚙️ NÃO EDITAR NADA ABAIXO DESTA LINHA
// 
```


Atenção: NÃO altere nada abaixo da linha "NÃO EDITAR NADA ABAIXO DESTA LINHA", pois isso pode quebrar o funcionamento do site.


### 3. Como trocar a imagem

Para personalizar o fundo do seu projeto com uma imagem própria:

1. Arraste o seu arquivo de imagem para dentro da pasta `src/IMAGENS/`.
2. No bloco `DADOS_DO_GRUPO` (mostrado acima), troque o nome do arquivo na linha da imagem.
3. Exemplo: `imagem: "SUA_IMAGEM.jpg"`.

*Formatos aceitos: .jpg, .png, .webp*

### 4. Como trocar o vídeo do YouTube

O vídeo será exibido quando alguém clicar no botão de reprodução:

1. Abra o vídeo desejado no YouTube.
2. Copie o **ID** da URL (o código que vem logo após o `v=`).
   *Exemplo: https://www.youtube.com/watch?v=**AQUI_ESTA_O_ID***
3. No bloco `DADOS_DO_GRUPO`, substitua o código antigo pelo seu:
   `videoYouTube: "SEU_ID_AQUI"`


Nota: O vídeo precisa ter a opção "Permitir incorporação" ativada nas configurações do YouTube Studio para funcionar no site.


### 5. Como trocar as matérias

Você pode ajustar a lista de matérias conforme a necessidade do seu grupo na linha `materias`:

*   **Para 3 matérias:** `materias: ["Programação", "Física", "Robótica"],`
*   **Para 4 matérias:** `materias: ["Programação", "Física", "Robótica", "Química"],`
*   **Para 2 matérias:** `materias: ["Programação", "Física"],`

### 6. Como trocar as cores

Se o grupo desejar mudar a identidade visual, abra o arquivo `src/estilos.css` e edite os valores na seção `:root`. Os valores utilizam o formato **HSL** (Matiz, Saturação, Luminosidade).

```css
:root {
  --background: 0 0% 100%;        /* Cor de fundo */
  --foreground: 220 13% 18%;      /* Cor do texto principal */
  --primary: 220 13% 18%;         /* Cor de destaque */
  --muted: 220 13% 95%;           /* Cor de fundo suave */
  --muted-foreground: 220 9% 46%; /* Cor de texto suave */
}
```

### 7. Como apresentar o projeto

No dia da apresentação para os pais e professores:

1. Abra o link final do seu projeto no navegador.
2. Clique no ícone de janela (**"Open in new tab"**) localizado no canto do preview.
3. O site abrirá em tela cheia, ocultando o código.
4. Clique no botão **"▶ Assistir vídeo"** para iniciar a apresentação audiovisual.

### 8. Estrutura do projeto

Para sua referência, aqui está como os arquivos estão organizados:

```text
projeto/
├── public/              ← Arquivos estáticos (vazia)
├── src/
│   ├── IMAGENS/         ← Coloque sua imagem aqui
│   │   └── imagem-principal.jpg
│   ├── PAGINAS/         ← Páginas do site
│   │   ├── inicio.tsx          ← EDITAR AQUI (dados do grupo)
│   │   └── NaoEncontrado.tsx   ← Página 404 (não editar)
│   ├── App.tsx          ← Rotas (não editar)
│   ├── estilos.css      ← Editar cores aqui
│   ├── main.tsx         ← Inicialização (não editar)
│   └── vite-env.d.ts    ← Tipos (não editar)
├── index.html           ← HTML base (não editar)
├── package.json         ← Dependências (não editar)
└── ...
```

### 9. Resumo — O que cada grupo precisa fazer

1.  Abrir o link e clicar em **"Fork"**.
2.  Abrir o arquivo `src/PAGINAS/inicio.tsx`.
3.  Editar **APENAS** o bloco `DADOS_DO_GRUPO` (Título, Descrição, Matérias, ID do Vídeo).
4.  Fazer o upload da imagem para a pasta `src/IMAGENS/`.
5.  (Opcional) Personalizar as cores em `src/estilos.css`.
6.  Salvar as alterações e conferir o resultado no preview lateral.
7.  No momento da apresentação, utilizar o modo tela cheia.

### 10. Dúvidas e Problemas Comuns

Se o site parar de funcionar ou não carregar as informações:

*   Verifique se você não apagou acidentalmente as **aspas** (`" "`) ou as **vírgulas** (`,`) ao final das linhas.
*   Confirme se o nome da imagem no código é exatamente igual ao nome do arquivo na pasta (incluindo `.jpg` ou `.png`).
*   Certifique-se de que o ID do vídeo do YouTube está correto.
*   Caso o erro persista, verifique a aba **"Problems"** no rodapé do editor ou peça AJUDAA - estou aqui prof Fernando haha.

---
### 11. 📌 Como abrir o projeto no dia da apresentação
Para apresentar o seu projeto, abra o link abaixo no navegador:

https://stackblitz.com/github/SEU_USUARIO/NOME_DO_REPOSITORIO

Atenção: substitua SEU_USUARIO pelo seu login do GitHub e NOME_DO_REPOSITORIO pelo nome do repositório que você criou ao fazer o Fork(COPIA).
Exemplo:
https://stackblitz.com/github/maria-silva/projeto-integrador-grupo-1

Passo a passo:
1-Abra o link no navegador (Chrome, Edge ou Firefox)
2-O projeto começa a carregar automaticamente
3-Aguarde — na primeira vez pode demorar de 1 a 2 minutos para configurar o ambiente
4-Quando terminar, você verá o editor de código à esquerda e o preview do site à direita
5-Clique no ícone de janela ("Open in new tab") no canto do preview para abrir o site em tela cheia
6-Pronto para apresentar!

💡 Dica: abra o link antes da apresentação começar, para deixar o projeto carregado e evitar atrasos.

---