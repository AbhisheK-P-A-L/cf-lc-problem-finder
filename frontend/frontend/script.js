const backendURL = "http://localhost:4000";

function search() {
  const q = document.getElementById("query").value;
  fetch(`${backendURL}/search?q=${q}`)
    .then(res => res.json())
    .then(data => {
      const resDiv = document.getElementById("results");
      resDiv.innerHTML = "";
      data.forEach(p => {
        const el = document.createElement("div");
        el.innerText = p.name || p.title;
        resDiv.appendChild(el);
      });
    });
}