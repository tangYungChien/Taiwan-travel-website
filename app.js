let Allbutton = document.querySelectorAll(".btn-outline-danger");
console.log(Allbutton);

Allbutton.forEach((button) => {
  button.addEventListener("click", (e) => {
    spotID = e.target.id;

    if (e.target.innerText == "+ 加入收藏") {
      console.log("上");
      e.target.innerHTML = "已收藏!";
      addLike(e, spotID);
      checkElementExistence();
    } else {
      console.log("下");
      e.target.innerHTML = "+ 加入收藏";
      let likeOne = document.getElementsByClassName(spotID);
      likeOne[0].remove();
      checkElementExistence();
    }
  });
});

let likeDiv = document.querySelector(".likeDiv");
function addLike(e, spotID) {
  // console.log("經過addLike");
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

  // //加入a tag
  if (likeOne.classList.contains("PalaceMuseum")) {
    CardImgWord.innerHTML = "國立故宮博物院";
    CardImgWord.setAttribute("href", "#PalaceMuseum");
  } else if (likeOne.classList.contains("Chiang-Kai-shek-Memorial-Hall")) {
    CardImgWord.innerHTML = "國立中正紀念堂";
    CardImgWord.setAttribute("href", "#Chiang-Kai-shek-Memorial-Hall");
  }
  //監聽a移到螢幕中間
  let allLinks = document.querySelectorAll(".CardImgDiv a");
  console.log(allLinks);
  allLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("監聽a");
      const targetId = link.getAttribute("href");
      if (targetId) {
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    });
  });

  //垃圾桶功能
  let allTrash = document.querySelectorAll(".trash-button");
  let button2 = document.getElementById(spotID);
  console.log(allTrash);

  allTrash.forEach((trash) => {
    trash.addEventListener("click", () => {
      console.log(trash.parentElement.parentElement);
      trash.parentElement.parentElement.classList.add("remove");
      button2.innerHTML = "+ 加入收藏";
    });
  });
  allTrash.forEach((trash) => {
    let form = trash.parentElement.parentElement;
    form.addEventListener("transitionend", (e) => {
      e.target.remove();
      checkElementExistence();
    });
  });
}

//無收藏景點
function checkElementExistence() {
  console.log("經過checkElementExistence");
  let likeOneDiv = document.getElementsByClassName("likeOne")[0]; // 获取第一个具有类名 'likeOne' 的元素
  let noAttractionsMessage = document.getElementById("noAttractionsMessage");
  console.log(!likeOneDiv);
  if (!likeOneDiv) {
    noAttractionsMessage.style.display = "block";
  } else {
    noAttractionsMessage.style.display = "none";
  }
}

// 讓atag在畫面中間
function aTag() {
  let allLinks = document.querySelectorAll("CardImgDiv.a");
  allLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("監聽a");
      const targetId = link.getAttribute("href");
      if (targetId) {
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    });
  });
}

// // 在 likeOne 类中使用 aTag 函数
// document.querySelectorAll(".likeOne").forEach((likeOne) => {
//   // 定义 aTag 函数
//   function aTag() {
//     likeOne.addEventListener("click", (e) => {
//       if (!likeOne.contains(e.target)) {
//         return; // 如果点击的不是 likeOne 的直接子元素，则返回
//       }

//       e.preventDefault(); // 阻止默认行为
//       console.log("監聽a");
//       const targetId = e.target.getAttribute("href"); // 获取到锚点的 ID
//       if (targetId) {
//         const targetElement = document.querySelector(targetId); // 获取到锚点所在的元素
//         // 将页面滚动到锚点所在的元素的位置（屏幕中间）
//         if (targetElement) {
//           targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
//         }
//       }
//     });
//   }

//   // 调用 aTag 函数
//   aTag();
// });
