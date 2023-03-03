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
                <td><button class="plus-btn">+</button></td>
                <td><button class="minus-btn">-</button></td>
                <td><div class="totals">${item.total}</div></td>
                <td><button class="zero-btn">X</button></td>
            </tr>`;

        takeoffContainer.innerHTML += takeoffElem;
      });
    })
    .catch((err) => console.log(err));
}

getInteriors();
