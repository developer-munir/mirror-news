/* ---------------------------
    categories section 
------------------------------ */
const categoriesData = () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => categories(data.data.news_category))
      .catch((error) => console.log(error));
}
const categories = datas => {
    const categoryLinkContainer = document.getElementById("categories-links");
    datas.forEach(data => {
        const categoryName = data.category_name;
        const li = document.createElement('li');
        li.innerHTML = `
            <a class="nav-link" href="#">${categoryName}</a>
        `;
        categoryLinkContainer.appendChild(li);
    });
}
categoriesData();