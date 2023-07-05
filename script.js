const getLibraries = function () {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore nella chiamata");
      }
    })

    .then((data) => {
      console.log(data);
      let spinner = document.getElementById("spinner");
      spinner.classList.add("d-none");
      let row = document.querySelector(".row");
      data.forEach((element) => {
        let column = document.createElement("div");
        column.classList.add(
          "d-flex",
          "col",
          "col-6",
          "col-md-4",
          "col-lg-3",
          "g-2"
        );
        column.innerHTML = `<div class="card" style='width:100%'>
            <img src=${element.img} class="card-img-top " alt="...">
            <div class="card-body d-flex flex-column justify-content-between">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text fst-italic">Category: ${element.category} </p>
              <p class='card-text text-info'>Price: ${element.price}</p>
              <div>
              <a href="#" class="btn btn-primary">Buy This!</a>
              <button id='remove-button' class='bg-success btn' ><i class="fas fa-trash-alt pt-2" style="color: #ff0000;"></i></button>
              <button id='addToCarr' class=' btn bg-secondary' ><i class="fas fa-shopping-cart"></i></button>

                </div>          
              </div>
            
          </div>`;

        row.appendChild(column);
      });
      let deleteButton = document.querySelectorAll("#remove-button");
      let addButton = document.querySelectorAll("#addToCarr");
      deleteButton.forEach((but) => {
        but.addEventListener("click", () => {
          but.parentElement.parentElement.parentElement.remove();
          console.log(deleteButton.parentElement);
        });
      });

      addButton.forEach((addB) => {
        let ul = document.querySelector("ul");

        addB.addEventListener("click", () => {
          let singleLi = document.createElement("li");
          singleLi.innerText = `${addB.parentElement.parentElement}`;
          console.log(addB.parentElement.parentElement);

          ul.appendChild(singleLi);
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

getLibraries();
