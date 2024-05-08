let Allbutton = document.querySelectorAll(".btn-outline-danger");
console.log(Allbutton);

Allbutton.forEach((button) => {
  button.addEventListener("click", (e) => {
    spotID = e.target.id;

    if (e.target.innerText == "+ 加入收藏") {
      console.log("上");
      e.target.innerHTML = "已收藏!";
      addLike(e, spotID);
      noSpot();
    } else {
      console.log("下");
      e.target.innerHTML = "+ 加入收藏";
      let likeOne = document.getElementsByClassName(spotID);
      likeOne[0].remove();
      noSpot();
    }
  });
});

let likeDiv = document.querySelector(".likeDiv");
function addLike(e, spotID) {
  console.log("經過addLike");
  // let likeDiv = document.querySelector(".likeDiv");
  let likeOne = document.createElement("div");
  likeOne.classList.add("likeOne");
  likeOne.classList.add(spotID);
  let likeCard = document.createElement("div");
  likeCard.classList.add("likeCard");
  let CardImgDiv = document.createElement("div");
  CardImgDiv.classList.add("CardImgDiv");
  let CardImg = document.createElement("div");
  CardImg.classList.add("CardImg");
  let Img = document.createElement("img");
  let CardImgWord = document.createElement("a");
  let write = document.createElement("textarea");
  write.classList.add("write");
  write.setAttribute("placeholder", "筆記欄...");
  let btnDiv = document.createElement("div");
  btnDiv.classList.add("btnDiv");
  let newButton = document.createElement("button");
  newButton.classList.add("trash-button");
  let newItag = document.createElement("i");
  newItag.classList.add("fa");
  newItag.classList.add("fa-trash");
  newItag.classList.add("fa-2x");
  likeDiv.appendChild(likeOne);
  likeOne.appendChild(likeCard);
  likeOne.appendChild(btnDiv);
  likeCard.appendChild(CardImgDiv);
  likeCard.appendChild(write);
  CardImgDiv.appendChild(CardImg);
  CardImgDiv.appendChild(CardImgWord);
  CardImg.appendChild(Img);
  btnDiv.appendChild(newButton);
  newButton.appendChild(newItag);

  //垃圾桶功能
  let allTrash = document.querySelectorAll(".trash-button");
  let button2 = document.getElementById(spotID);
  console.log(button2);

  allTrash.forEach((trash) => {
    trash.addEventListener("click", (e) => {
      console.log(e.target.parentElement.parentElement.parentElement);
      e.target.parentElement.parentElement.parentElement.classList.add(
        "remove"
      );
      e.target.parentElement.parentElement.parentElement.remove();
      button2.innerHTML = "+ 加入收藏";
      noSpot();
    });
  });
  // console.log(e.target.parentElement.parentElement);
}

// function delLike(e, spotID) {
//   let likeOne = document.getElementsByClassName(spotID);
//   likeOne[0].remove();
// }

let noSpot = () => {
  console.log("經過nospot");
  function hasElementsWithClassName(likeOne) {
    let elements = document.getElementsByClassName(likeOne);
    return elements.length > 0;
  }
  hasElementsWithClassName("likeOne");
  if (hasElementsWithClassName("likeOne") == true) {
    let no = document.querySelector(".no");
    no.remove();
    console.log("經過nospot remove");
  } else {
    let h3 = document.createElement("h3");
    h3.classList.add("no");
    h3.innerHTML = "暫無台北收藏景點";
    likeDiv.appendChild(h3);
    console.log("經過nospot +h3");
  }
};
