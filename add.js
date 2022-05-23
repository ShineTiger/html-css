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
  const cardList = document.querySelector("#cards");
  const newCard = document.createElement("div");
  const listItem = document.createElement("li");
  newCard.classList.add("card");
  newCard.querySelector("#viewimg").src= `${image}`;
  newCard.querySelector("span").innerText= `${content}`;

  cardList.appendChild(newCard);
  list.innerText= `${name}`;
  list.appendChild(listItem)

};

const handleSaveList = (event) => {
  unViewModal();
  event.preventDefault();
  const name = document.querySelector("#name").value;
  const image = document.querySelector("img").value;
  const content = document.querySelector("#contents").value;
  handleSaveItem(name, image, content);
}

handleAddBtn.addEventListener("click", viewModal);
handleCloseBtn.addEventListener("click", unViewModal);
handleSaveBtn.addEventListener("click", handleSaveList);
