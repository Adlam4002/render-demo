console.log("Hello world!");
let form = document.querySelector("#ramen-form");
function buttonSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData);
  console.log(formValues);
  fetch("https://render-demo-39yd.onrender.com/ramen", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  });
}
form.addEventListener("submit", buttonSubmit);

async function fetchAndRenderRamen() {
  const response = await fetch(
    "https://render-demo-39yd.onrender.com/ramen-list"
  );
  const ramenList = await response.json();
  const ramenListDiv = document.getElementById("ramen-list");
  ramenListDiv.innerHTML = "";

  ramenList.forEach((ramen) => {
    const ramenDiv = document.createElement("div");
    ramenDiv.innerHTML = `<p>ID: ${ramen.id}, Flavour: ${ramen.flavour}, Price: ${ramen.price}, Spiciness: ${ramen.spiciness}, Time to cook: ${ramen.time_to_cook}</p>`;
    ramenListDiv.appendChild(ramenDiv);
  });
}
fetchAndRenderRamen();
