const handleAddBtn = document.querySelector(".add-btn");
const handleInputModal = document.querySelector("#modal-bg");
const handleSaveBtn = document.querySelector("#save-btn");
const handleCloseBtn = document.querySelector("#close-btn");

const viewModal = () => {
    handleInputModal.style.display = "block"
    
}

const unViewModal = () => {
    handleInputModal.style.display = "none"
}

function handleAddList() {
    
    
    unViewModal();
}

const handleSubmitBtn = (e) => {
    e.preventDefault();  
    const name = document.querySelector("#name").value;
    const img = document.querySelector("#image").value;
    const content = document.querySelector("#contents").value;
}



handleAddBtn.addEventListener("click",viewModal)
handleCloseBtn.addEventListener("click",unViewModal)
handleSaveBtn.addEventListener("click",handleAddList)