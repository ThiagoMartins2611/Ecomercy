function carregar(){
    fetch('ListarLivros/livros.json')
        .then(response => response.json())
        .then(livros =>{
            const main = document.querySelector('#main');

            livros.map(livro => {
                 const card = document.createElement('div');
                 card.classList.add('card');

                 const content = document.createElement('div');
                 content.classList.add('content')

                 const img = document.createElement('img');
                 img.src = livro.imagem;
                 img.alt = livro.nome;

                 const titulo = document.createElement('h3');
                 titulo.textContent = livro.nome

                 const precos = document.createElement('h4');
                 precos.textContent = livro.preco

                 const button = document.createElement('button');
                 button.textContent = 'Comprar'

                 content.appendChild(img);
                 content.appendChild(titulo);
                 content.appendChild(precos);
                 content.appendChild(button)
                 card.appendChild(content)
                 main.appendChild(card);
                 

            })
        })
}

carregar()