// const containerElement = document.querySelector(".container");
// const containerColumn = document.createElement("div");
// containerColumn.classList.add("container-column");
// const boxElement = document.createElement("div");
// boxElement.classList.add("box");

const createDivs = function () {
  //we have 12 column
  //the first column start with 1 box and for every column the count of boxes increases one by one
  //the total height is always same

  let boxCount = 1; //first column start with 1 box
  for (let column = 0; column < 12; column++) {
    const containerElement = document.querySelector(".container");
    const containerColumnElement = document.createElement("div");
    containerColumnElement.classList.add("container-column");
    containerElement.appendChild(containerColumnElement);

    //adding boxes for each column

    let boxText = "1"; //the innertexts of boxes starts with 1
    for (let box = 0; box < boxCount; box++) {
      const boxElement = document.createElement("div");
      boxElement.innerText = boxText;
      boxElement.classList.add("box");
      containerColumnElement.appendChild(boxElement);
      boxText++;
    }
    boxCount++;
  }
};

window.onload = function () {
  createDivs();
};
