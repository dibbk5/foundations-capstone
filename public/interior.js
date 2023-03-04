const takeoffContainer = document.querySelector("#takeoff-container");

const baseURL = "http://localhost:4444/api";

function getInteriors() {
  axios
    .get(`${baseURL}/interior`)
    .then((res) => {
      res.data.forEach((item) => {
        const takeoffElem = `
            <tr>
                <td><div class="description">${item.description}</div></td>
                <td><div>${item.unit}</div></td>
                <td><button class="plus-btn type="plus" id="${item.id}" onclick="updateTakeoff">+</button></td>
                <td><button class="minus-btn" type="minus" onclick="updateTakeoff">-</button></td>
                <td><div class="totals" >${item.total}</div></td>
                <td><button class="zero-btn">X</button></td>
            </tr>`;

        takeoffContainer.innerHTML += takeoffElem;
      });
    })
    .catch((err) => console.log(err));
}

function updateTakeoff(id, type) {
  if (type === "plus") {
  }
}

getInteriors();
