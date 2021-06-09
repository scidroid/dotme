const container = document.querySelector("#blog");

const addElement = (title, description, url) => {
  container.insertAdjacentHTML(
    "beforeend",
    `<section><h3><a  href="${url}">${title}</a></h3><p>${description}</p></section>`
  );
};

fetch("https://dev.to/api/articles?username=scidroid")
  .then(resp => resp.json())
  .then((resp) => {
    for (let index = 0; index < resp.length || index > 4; index++) {
      addElement(resp[index].title, resp[index].description, resp[index].url);
    }
  })
.catch(err => {
  console.error(err)
  addElement("API error", "check your internet connection", "https://dev.to/api/articles?username=scidroid")
});
