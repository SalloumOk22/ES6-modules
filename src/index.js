import WishList from "./WishList";

let wishList = new WishList();
let form = document.querySelector("#submitForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let make = document.querySelector("#makeInput");
  let model = document.querySelector("#modelInput");
  let year = document.querySelector("#yearInput");

  wishList.add(make.value, model.value, year.value);

  make.value = "";
  model.value = "";
  year.value = "";
});