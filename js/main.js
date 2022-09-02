/* ---------------------------
    categories section 
------------------------------ */
const categoriesData = () => {
  const url = `https://openapi.programming-hero.com/api/news/categories`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => categories(data.data.news_category))
    .catch((error) => console.log(error));
};
const categories = (datas) => {
  const categoryLinkContainer = document.getElementById("categories-links");
  datas.forEach((data) => {
    const categoryId = data.category_id;
    // console.log(categoryId);
    const categoryName = data.category_name;
    const li = document.createElement("li");
    li.innerHTML = `
            <a class="nav-link" href="#" onclick="createNewsId(${categoryId})">${categoryName}</a>
        `;
        categoryLinkContainer.appendChild(li);
  });
};
categoriesData();

/*------------------------------------
 all news section 
 -------------------------------------*/
const createNewsId = (id) => {
  const url = `https://openapi.programming-hero.com/api/news/category/0${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => news(data.data))
    .catch((error) => console.log(error));
};
const news = (datas) => {
  const cardContainer = document.getElementById("card-container");
  // founding news
  const foundItems = document.getElementById("foundItems");
  const result = cardContainer.children.length;
  if (cardContainer.children.length === 0) {
    foundItems.innerText = 'no news found';
  } else {
    foundItems.innerText = `${result} result found `
  }
    cardContainer.textContent = ``;
  datas.forEach((data) => {
    console.log(data);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
            <div class="card h-100">
              <img src="${data.image_url}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${data.title}</h5>
                <p class="card-text">${data.details.slice(0, 200)}...</p>
                <div class="row">
                <div class="d-flex align-items-center justify-content-evenly col-12 mb-2">
                <img src="${
                  data.author.img
                }" class = "img-fluid rounded rounded-pill w-25" alt=".." />
                <div>
                    <p>${data.author?.name? data.author.name:'no name found'}</p>
                    <p>${data.author?.published_date? data.author.published_date : 'date is not available'}</p>
                </div>
                </div>
                <div class="col-6 text-center">
                    <p><i class="fa-solid fa-eye"></i> <span>follow<span><p></p>
                </div>
                <div class="col-6 text-center">
                    <i class="fa-solid fa-right-to-bracket"></i>
                </div>
            </div>
                `;
      cardContainer.appendChild(div);
    });
};
/* ------------------------------------
searching count 
-------------------------------------- */
