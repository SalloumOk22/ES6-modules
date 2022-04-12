import Car from "./Car";

class WishList {
  constructor() {
    this.cars = [];
    this.nextId = 1;
  }

  add(make, model, year) {
    let newCar = new Car(this.nextId++, make, model, year);
    this.cars.push(newCar);

    console.log(this.cars);

    this.addToDOM(newCar);
  }

  remove(id) {
    this.cars = this.cars.filter((car) => car.id != id);

    this.removeFromDOM(id);
  }

  addToDOM(car) {
    let ul = document.querySelector("#wishListContainer > ul");
    let li = document.createElement("li");
    li.textContent = car.model;
    li.id = `car${car.id}`;
    li.addEventListener("click", (event) => {
      car.display();
      let removeBtn = document.querySelector("#removeBtn");
      removeBtn.disabled = false;
      removeBtn.onclick = (event) => {
        car.hideDisplay();
        this.remove(car.id);
        removeBtn.disabled = true;
      };
    });
    ul.appendChild(li);
  }

  removeFromDOM(id) {
    let ul = document.querySelector("#wishListContainer > ul");
    let li = document.querySelector(`#car${id}`);
    ul.removeChild(li);
  }
}

export default WishList;