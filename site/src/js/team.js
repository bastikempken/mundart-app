const cardBodys = document.querySelectorAll(".card-body")

for (let i = 0; i < cardBodys.length; i++) {
    cardBodys[i].addEventListener("click", function () {
        const img = cardBodys[i].querySelector("img")
        if (img) {
            if (img.src.includes('down')) {
                img.src = img.src.replace('down', 'up')
            } else {
                img.src = img.src.replace('up', 'down')
            }
            const listItem = cardBodys[i].querySelector('.list-group-item__toggle')
            listItem.classList.toggle("list-group-item--hidden");
        }
    });
}