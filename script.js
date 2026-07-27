// Selecting Elements

const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const subjectInput = document.getElementById("subject");
const colorInput = document.getElementById("color");

const createBtn = document.getElementById("createBtn");
const themeBtn = document.getElementById("themeBtn");
const hideBtn = document.getElementById("hideBtn");
const resetBtn = document.getElementById("resetBtn");

const card = document.getElementById("profileCard");

const cardName = document.getElementById("cardName");
const cardAge = document.getElementById("cardAge");
const cardSubject = document.getElementById("cardSubject");

// Create Profile

createBtn.addEventListener("click", function(){

    if(
        nameInput.value==="" ||
        ageInput.value==="" ||
        subjectInput.value==="" ||
        colorInput.value===""
    ){

        alert("Please fill all fields.");

        return;
    }

    cardName.textContent=nameInput.value;

    cardAge.textContent="Age: "+ageInput.value;

    cardSubject.textContent="Favorite Subject: "+subjectInput.value;

    card.style.backgroundColor=colorInput.value;

});


// Change Theme

themeBtn.addEventListener("click",function(){

    document.body.classList.toggle("dark");

});


// Hide / Show Profile

hideBtn.addEventListener("click",function(){

    if(card.style.display==="none"){

        card.style.display="block";

        hideBtn.textContent="Hide Profile";

    }
    else{

        card.style.display="none";

        hideBtn.textContent="Show Profile";

    }

});


// Reset

resetBtn.addEventListener("click",function(){

    nameInput.value="";
    ageInput.value="";
    subjectInput.value="";
    colorInput.value="";

    cardName.textContent="Student Name";
    cardAge.textContent="Age:";
    cardSubject.textContent="Favorite Subject:";

    card.style.display="block";

    hideBtn.textContent="Hide Profile";

    card.style.background="#fff0f8";

    document.body.classList.remove("dark");

});