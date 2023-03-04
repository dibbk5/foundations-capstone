const takeoffContainer = document.querySelector("#takeoff-container");

const baseURL = "http://localhost:4444";

function getInteriors() {
  axios
    .get(`${baseURL}/interior`)
    .then((res) => {
      res.data.forEach((item) => {
        const takeoffElem = `
            <tr>
                <td><div class="description">${item.description}</div></td>
                <td><div>${item.unit}</div></td>
                <td><button class="plus-btn" onclick="updateTakeoff(${item.id}, 'plus')">+</button></td>
                <td><button class="minus-btn" type="minus" onclick="updateTakeoff(${item.id}, 'minus')}">-</button></td>
                <td><div class="totals">${item.total}</div></td>
                <td><button class="zero-btn">X</button></td>
            </tr>`;

        takeoffContainer.innerHTML += takeoffElem;
      });
    })
    .catch((err) => console.log(err));
}

async function updateTakeoff(id, type) {
  if (type === "plus") {
    axios
      .put(`${baseURL}/interior/${id}`, id)
      .then()
      .catch((err) => console.log(err));
  }
}

getInteriors();
