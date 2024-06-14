console.log("Hello world!");
let form = document.querySelector("#ramen-form");
function buttonSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData);
  console.log(formValues);
  fetch("http://localhost:8080/ramen", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(formValues),
  });
}
form.addEventListener("submit", buttonSubmit);
