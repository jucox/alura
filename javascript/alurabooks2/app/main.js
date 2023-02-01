let books = [];
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
const booksSection = document.querySelector('#livros');
const priceOfAllAvailableBooks = document.querySelector('#valor_total_livros_disponiveis');
const booksButtons = document.querySelectorAll('.btn');
const sortBooksButton = document.querySelector('#btnOrdenarPorPreco');

booksButtons.forEach(bookButton => bookButton.addEventListener('click', filterBooks));
sortBooksButton.addEventListener('click', sortBooksByPrice);

getBooksFromAPI();

async function getBooksFromAPI() {
    const res = await fetch(endpointAPI);
    books = await res.json();

    let booksWithDescount = applyDescount(books);

    showTheBooksOnScreen(booksWithDescount);
}

function showTheBooksOnScreen(booksList) {
    booksSection.innerHTML = '';

    booksList.forEach(book => {
        const availability = book.quantidade > 0 ? 'livro_imagens' : 'livro_imagens indisponivel';

        booksSection.innerHTML += `
            <div class="livro">
                <img class="${availability}" src="${book.imagem}" alt="${book.alt}" />
                <h2 class="livro__titulo">
                    ${book.titulo}
                </h2>
                <p class="livro__descricao">${book.autor}</p>
                <p class="livro__preco" id="preco">R$${book.preco.toFixed(2)}</p>
                <div class="tags">
                    <span class="tag">${book.categoria}</span>
                </div>
            </div>
        `
    });
}

function applyDescount(booksList) {
    const descount = 0.3;

    booksWithDescount = booksList.map(book => {
        return {...book, preco: book.preco - (book.preco * descount)};
    })

    return booksWithDescount;
}

function filterBooks () {
    const bookID = document.getElementById(this.id);
    const bookCategory = bookID.value;
    
    let filteredBooks = bookCategory == 'disponivel' ? filterByCategory(bookCategory) : filterByAvailability(bookCategory);

    showTheBooksOnScreen(filteredBooks);

    if (bookCategory == 'disponivel') {
        const totalPrice = calculateTotalPriceOfAllAvailableBooks(filteredBooks);
        showPriceOfAllAvailableBooks(totalPrice);
    }
}

function filterByAvailability(bookCategory) {
    return books.filter(book => book.categoria == bookCategory);
}

function filterByCategory() {
    return books.filter(book => book.quantidade > 0);
}

function sortBooksByPrice () {
    let sortedBooks = books.sort((a, b) => a.preco - b.preco);
    showTheBooksOnScreen(sortedBooks);
}

function showPriceOfAllAvailableBooks (totalPrice) {
    priceOfAllAvailableBooks.innerHTML = `
        <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${totalPrice}</span></p>
        </div>
    `
}

function calculateTotalPriceOfAllAvailableBooks (booksList) {
    return booksList.reduce((acc, book) => acc + book.preco, 0).toFixed(2);
}