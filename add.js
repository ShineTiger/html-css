const handleAddBtn = document.querySelector(".add-btn");
const handleInputModal = document.querySelector("#modal-bg");
const handleSaveBtn = document.querySelector("#save-btn");
const handleCloseBtn = document.querySelector("#close-btn");

const viewModal = () => {
  handleInputModal.style.display = "block";
};

const unViewModal = () => {
  handleInputModal.style.display = "none";
};

const handleSaveItem = (name, image, content) => {
  const list = document.querySelector("ul");
  const listItem = document.createElement("li");

  const cardList = document.querySelector(".cards");
  const newCard = document.createElement("div");
  const newCardImg = document.createElement("img");
  const newCardSpan = document.createElement("span");

  newCard.classList.add("card");
  newCardImg.src= `${image}`;
  newCardSpan.innerText= `${content}`;
  listItem.innerText= `${name}`;

  list.appendChild(listItem);  
  cardList.appendChild(newCard);
  newCard.appendChild(newCardImg);
  newCard.appendChild(newCardSpan);

};

const handleSaveList = (event) => {
  unViewModal();
  event.preventDefault();
  //const insertInput = document.querySelector("#modal input");
  const name = document.querySelector("#name").value;
  const image = document.querySelector("img").value;
  const content = document.querySelector("#contents").value;
  handleSaveItem(name, image, content);
}

handleAddBtn.addEventListener("click", viewModal);
handleCloseBtn.addEventListener("click", unViewModal);
handleSaveBtn.addEventListener("click", handleSaveList);
