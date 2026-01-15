let mainContainer = document.querySelector("#mainContainer");
let bookContainer = document.querySelector("#bookContainer");
let addBookFormContainer = document.querySelector("#addBookFormContainer");

let title = document.querySelector("#title");
let author = document.querySelector("#author");
let pages = document.querySelector("#pages"); 
let submit = document.querySelector("#submit");



let myLibrary = [];


function Book(title, author, pages) {

  if (!new.target) {
    throw Error("must use the 'NEW' keyword");
  }

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.bookId = crypto.randomUUID();

  this.isRead = false;

  this.info = function(){
    return(`${this.title} by ${this.author} Has ${this.pages} pages ID: ${this.bookId}`);
  }
}

function addBookToLibrary() {
  const bookName = new Book(title.value, author.value, pages.value);
  myLibrary.push(bookName);
  displayBook();
  title.value = "";
  author.value = "";
  pages.value = "";
}
submit.addEventListener("click", addBookToLibrary);


function displayBook() {
  bookContainer.replaceChildren();

  for (let myLib of myLibrary) {

    let div = document.createElement("div");

    let titlePara = document.createElement("p");
    let byPara = document.createElement("p");
    let authorPara = document.createElement("p");
    let pagesPara = document.createElement("p");
    let bookIdPara = document.createElement("p");

    let para = document.createElement("p");
    let button = document.createElement("button");
    let input = document.createElement("input");
    let span = document.createElement("span");
    let label = document.createElement("label");
    let index = myLibrary.indexOf(myLib);

    div.setAttribute("id", "bookInfo");

    titlePara.setAttribute("id", "titlePara");
    byPara.setAttribute("id", "byPara");
    authorPara.setAttribute("id", "authorPara");
    pagesPara.setAttribute("id", "pagesPara");
    bookIdPara.setAttribute("id", "bookIdPara");

    input.setAttribute("type", "checkbox");
    input.setAttribute("id", "isRead");
    label.setAttribute("for", "isRead");

    para.textContent = index;
    label.textContent = "Not Read Yet!";
    button.textContent = "REMOVE";

    titlePara.textContent = myLib.title;
    byPara.textContent = "Written By";
    authorPara.textContent = myLib.author;
    pagesPara.textContent = `Has ${myLib.pages} pages`;
    bookIdPara.textContent = `ID: ${myLib.bookId}`;

    div.classList.toggle("eachBookDiv");
    button.classList.toggle("eachBookButton");

    span.appendChild(label)
    //div.appendChild(para);
    div.appendChild(titlePara);
    div.appendChild(byPara);
    div.appendChild(authorPara);
    div.appendChild(pagesPara);
    div.appendChild(bookIdPara);

    div.appendChild(input);
    div.appendChild(span);
    div.appendChild(button);
    bookContainer.appendChild(div);

    if (myLibrary[index].isRead === false) {
      input.defaultChecked = false;
      label.innerText = "Not Read Yet!\nCheck To Read";
    }
    else{
      input.defaultChecked = true;
      label.innerText = "Already READ!\nUncheck To Unread";
    }

    input.addEventListener("click", function () {
      if (input.checked === true) {
        myLibrary[index].isRead = true;
        input.defaultChecked = true;
        label.innerText = "Already READ!\nUncheck To Unread";
      }
      else if(input.checked === false){
        myLibrary[index].isRead = false;
        input.defaultChecked = false;
        label.innerText = "Not Read Yet!\nCheck To Read";
      }
    })

    button.addEventListener("click", function () {
      myLibrary.splice(index, 1);
      displayBook();
    })
  }
}