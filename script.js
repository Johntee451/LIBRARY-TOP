let mainContainer = document.querySelector("#mainContainer");
let bookContainer = document.querySelector("#bookContainer");
let addBookFormContainer = document.querySelector("#addBookFormContainer");

let title = document.querySelector("#title");
let author = document.querySelector("#author");
let pages = document.querySelector("#pages"); 
let submit = document.querySelector("#submit");
/* console.log(isRead.checked = true);
console.log(isRead); */

/* isRead.addEventListener("click", function (e) {
  console.log(isRead.checked);
})
 */


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
    //const readTrue = "Already READ!";
    //const readFalse = "Not READ Yet!";
    return(`${this.title} by ${this.author}, ${this.pages} pages, ID: ${this.bookId}`);

    /* if(isRead === true){
    return(`${this.title} by ${this.author}, ${this.pages} pages, ${readTrue}, ID: ${this.bookId}`);
    }
    else{
      return(`${this.title} by ${this.author}, ${this.pages} pages, ${readFalse}, ID: ${this.bookId}`);
    } */
  }
}

function addBookToLibrary() {
  const bookName = new Book(title.value, author.value, pages.value);
  myLibrary.push(bookName);
  displayBook();
  title.value = "";
  author.value = "";
  pages.value = "";
  //isRead.checked = false;
  console.log(myLibrary);
}
submit.addEventListener("click", addBookToLibrary);




function displayBook() {
  bookContainer.replaceChildren();

  for (let myLib of myLibrary) {

    let div = document.createElement("div");
    let para = document.createElement("p");
    let button = document.createElement("button");
    let input = document.createElement("input");
    let span = document.createElement("span");
    let label = document.createElement("label");
    let index = myLibrary.indexOf(myLib);

    input.setAttribute("type", "checkbox");
    input.setAttribute("id", "isRead");
    label.setAttribute("for", "isRead");
    console.log(input);
    //input.textContent = "jsdgjchgkajsgk";


    para.textContent = index;
    label.textContent = "Not Read Yet!";
    button.textContent = "REMOVE";
    div.textContent = myLib.info();

    div.classList.toggle("eachBookDiv");
    button.classList.toggle("eachBookButton");

    span.appendChild(label)
    div.appendChild(para);
    div.appendChild(input);
    div.appendChild(span);
    div.appendChild(button);
    bookContainer.appendChild(div);

    if (myLibrary[index].isRead === false) {
      input.defaultChecked = false;
    }
    else{
      input.defaultChecked = true;
    }



    //console.log(input.checked);
    input.addEventListener("click", function () {
      
      if (input.checked === true) {
        myLibrary[index].isRead = true;
        console.log(input.checked);
        //displayBook();
        input.defaultChecked = true;
      }
      else if(input.checked === false){
        myLibrary[index].isRead = false;
        console.log(input.checked);
        input.defaultChecked = false;
      }
      console.log(myLibrary);
      
      
    })

    button.addEventListener("click", function () {
      console.log(index);
      myLibrary.splice(index, 1);
      console.log(myLibrary);
      displayBook();
    })
  }
  
}


/* addBookToLibrary("A man called god", "Michael King", 507, false);
displayBook();
addBookToLibrary("ANCIENT man", "POPE King", 419, true);
displayBook();
addBookToLibrary("My sweet Boy", "okpara victor", 110, false);
displayBook();
addBookToLibrary("Biography", "Achebe Prince", 867, true);
displayBook();
addBookToLibrary("FIGHTER", "Chanie vic", 992, false);
displayBook();
addBookToLibrary("LEAVE ME", "ORGY KALU", 721, true);
displayBook();
addBookToLibrary("Life tree", "treedom lands", 345, false);
displayBook(); */