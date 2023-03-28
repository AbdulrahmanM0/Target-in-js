let typeContainer = document.getElementById('type');

getType = (e) => {
    typeContainer.innerHTML = e.target.tagName;
}