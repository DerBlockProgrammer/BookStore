let books = [
    {
        "bild": "img/tribute.jpg",
        "name": "Die Geheimnisse des Ozeans",
        "author": "Clara Meer",
        "likes": 1250,
        "liked": false,
        "price": 19.99,
        "publishedYear": 2018,
        "genre": "Fantasy",
        "delivery": "5,00€",
        "comments": [
            {
                "name": "Leser123",
                "comment": "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat."
            },
            {
                "name": "Bookworm84",
                "comment": "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat."
            },
        ]

    },

    {
        "bild": "img/newworld.jpg",
        "name": "Der vergessene Pfad",
        "author": "Maximilian Schwarz",
        "likes": 980,
        "liked": false,
        "price": 14.50,
        "publishedYear": 2021,
        "genre": "Fantasy",
        "delivery": "5,00€",
        "comments": [
            {
                "name": "Leser123",
                "comment": "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat."
            },
            {
                "name": "Bookworm84",
                "comment": "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat."
            },
        ]

    },

    {
        "bild": "img/cod.jpg",
        "name": "Die Farben des Himmels",
        "author": "Laura Blau",
        "likes": 1520,
        "liked": false,
        "price": 22.95,
        "publishedYear": 2019,
        "genre": "Romantik",
        "delivery": "5,00€",
        "comments": [
            {
                "name": "Leser123",
                "comment": "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat."
            },
            {
                "name": "Bookworm84",
                "comment": "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat."
            },
        ]

    },

]

function render() {
    let contentbooks = document.getElementById('contentbooks');
    contentbooks.innerHTML = "";

    for (let i = 0; i < books.length; i++) {
        const book = books[i];
        contentbooks.innerHTML += /*html*/`
        
    <div id="contentbooks" onload="renderComments(${i})">
                <div class="card">
                    <h2>${book.name}</h2>
                

                    <div class="bsp">
                        <img src=${book.bild} alt="">
                    </div>

                    <div class="tabel">
                        <table>
                            <tr>
                                <td>Zwischensumme:${book.price}</td>
                              
                            </tr>
                            <tr>
                                <td>Lieferkosten:${book.delivery}</td>
                                
                            </tr>
                            <tr>
                                <td>Gesamt:${book.price + 5.00}</td>
                                
                            </tr>
                            <tr>
                                <td>Autor: ${book.author}</td>
                              
                            </tr>
                          
                        </table>

                        <div class="buddon">
                        <p id="likecounter${i}"> ${book.likes}</p>
                            <img id="heartfull${i}" class="" onclick="like(${i})" src="./img/herzz.jpg" alt="">
                                <img id="heartempty${i}" class="dnone"onclick="like(${i})" src="./img/herz.png" alt="">
                                

                        </div>
                        <div class="comment-box">
                            <h3>Kommentare:</h3>
                                <div class="comments">
                                    <table id="commentsId${i}"></table>
                                </div>
                                <div class="comment-input">
                                    <input class="inputFieldComment" id="inputFieldComment${i}" type="text">
                                    <img onclick="addComment(books[${i}], ${i})" id="sendButton" src="./img/senden.jpg" alt="send_icon">
                                </div>
                            </div>
                        
                        </div>`
    }
}

    function renderComments(i){
    const commentBox = document.getElementById('commentsId' + i)
    commentBox.innerHTML = ""
    for (let index = 0; index < books[i].comments.length; index++) {
        const element = books[i].comments[index];
        commentBox.innerHTML += getComments(element)

    }
}

function getComments(element) {
    return /*html*/`
        <tr>
        <td>${element.name}:</td>
        <td>${element.comment}</td>
    </tr>
    `;
}



function like(i) {
    if (books[i].liked) {
        books[i].liked = false;
        document.getElementById(`likecounter${i}`).innerHTML = `${(books[i].likes -= 1)}`;
        document.getElementById(`heartfull${i}`).classList.add('dnone');
        document.getElementById(`heartempty${i}`).classList.remove('dnone');

    }
    else {
        books[i].liked = true;
        document.getElementById(`likecounter${i}`).innerHTML = `${(books[i].likes += 1)}`;
        document.getElementById(`heartfull${i}`).classList.remove('dnone');
        document.getElementById(`heartempty${i}`).classList.add('dnone');
    }
}
