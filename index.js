const buttom = document.querySelector(".buttonNone");

buttom.addEventListener("click", () => {
  buttom.style.display = "none";
});

const imgLink = document.createElement("div");
imgLink.innerHTML = `<div class='img-apenchild-div'>
<img src='https://fastly.picsum.photos/id/405/1400/800.jpg?hmac=4CRI7OpfDWtP4EydVd4Z-1NKSGhBmpZq8OaEXVu3be8'
  alt='foto Link'
   class='img-apenchild-js'>
  </div> 
   `;

const bodyAdd = document.querySelector("#fotoApenchildCont");
bodyAdd.appendChild(imgLink);

const characters = [
  {
    first_name: "Harry",
    last_name: "Potter",
    house: "Gryffindor",
    image: "http://hp-api.herokuapp.com/images/harry.jpg",
    actor: "Daniel Radcliffe",
  },
  {
    first_name: "Hermione",
    last_name: "Granger",
    house: "Gryffindor",
    image: "http://hp-api.herokuapp.com/images/hermione.jpeg",
    actor: "Emma Watson",
  },
  {
    first_name: "Ron",
    last_name: "Weasley",
    house: "Gryffindor",
    image: "http://hp-api.herokuapp.com/images/ron.jpg",
    actor: "Rupert Grint",
  },
  {
    first_name: "Draco",
    last_name: "Malfoy",
    house: "Slytherin",
    image: "http://hp-api.herokuapp.com/images/draco.jpg",
    actor: "Tom Felton",
  },
];

const characterMap = characters.map((elements) => {
  return ` <div class='div-in-map'> 
  <article class='buttons'>
  <button class='buttonHidden' > <p class='click'> click </p> </button>
  <button class='buttonInfo'> info </button>
  </article>
   <article class='text'>  
   <h1> ${elements.first_name + elements.last_name} </h1>
   <p> ${elements.house} </p>
   </article>
   <img src='${elements.image}' alt='image in masiv' class='image-in-masiv'> 
  </div> 
  
  

  `;
});

const divInhtml = document.querySelector("#characters-list");
divInhtml.innerHTML = characterMap.join("");

const textInButton = document.createElement("p");
textInButton.innerText = `back`;
textInButton.classList.add("click");
const buttomApenchildText = document.querySelectorAll(".buttonHidden");
const textInButtonFirst = document.querySelectorAll(".click");
let tvla = 0;
buttomApenchildText.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (tvla >= 2) {
      tvla = 1;
    } else {
      tvla++;
    }

    if (tvla === 1) {
      buttomApenchildText[index].appendChild(textInButton);
      textInButtonFirst[index].style.display = "none";
    } else if (tvla === 2) {
      buttomApenchildText[index].removeChild(textInButton);
      textInButtonFirst[index].style.display = "block";
    }
  });
});

const buttomHiddenJs = document.querySelectorAll(".buttonHidden");
buttomHiddenJs.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const textJs = document.querySelectorAll(".text");
    const imgJs = document.querySelectorAll(".image-in-masiv");

    textJs[index].classList.toggle("hidden-elements");
    imgJs[index].classList.toggle("hidden-elements");
  });
});

const buttonInfoJs = document.querySelectorAll(".buttonInfo");
const oldDivNone = document.querySelector(".div-in-map");
// buttonInfoJs.addEventListener("click", () => {
//   const characterMapInfo = characters.map((elemenst) => {
//     return `
//         <div class='characterMapInfoDiv'>

//         </div>

//         `;
//   });

//   oldDivNone.style.display = "none";
// });

buttonInfoJs.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const characterMapInfo = characters.map((elements) => {
      alert(" ვერ მოვასწარი სხვა დროს აუცილებლად დავამთავრებ :D");
      return `
       
     <div class='characterMapInfoDiv'>

     </div>
     `;
    });

    // oldDivNone.style.display = "none";
  });
});
