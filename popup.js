document.getElementById("view").addEventListener("click", () => {
  chrome.storage.local.get(null, (data) => {
    const list = document.getElementById("data");
    list.innerHTML = "";

    for (let site in data) {
      let li = document.createElement("li");
      li.textContent = `${site}: ${(data[site] / 1000).toFixed(2)} sec`;
      list.appendChild(li);
    }
  });
});
