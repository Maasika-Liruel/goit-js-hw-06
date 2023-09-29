const categories = document.querySelectorAll("li.item");
console.log("Number of categories: ", categories.length);
console.log("");

categories.forEach(function (item) {
    const name = item.querySelector("h2");
    const numberName = item.querySelectorAll("li");

    console.log("Category:", name.textContent);
    console.log("Elements:", numberName.length);
    console.log("");

})