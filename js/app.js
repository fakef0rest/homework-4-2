// Select elements from DOM 
let elWrapper = document.querySelector("#wrapper");
let elForm = document.querySelector("#form");
var elSearchInput = document.querySelector("#search_input")
let elCategorySelect = document.querySelector("#category-select");
let elRating = document.querySelector("#rating");
let elBtn = document.querySelector("#btn");
let elTitle = document.querySelector("#search-result");
let elTemplate = document.querySelector("#template").content;

console.log(elTemplate)

// Get movies list 
let slicedMovies = movies.slice(0, 100);



let normolizedMovies = slicedMovies.map(item => {
    return {
        title: item.Title.toString(),
        categories: item.Categories,
        year: item.movie_year,
        rating: item.imdb_rating,
        imageLink: `https://i.ytimg.com/vi/${item.ytid}/mqdefault.jpg`,
        ytLink: `https://www.youtube.com/watch?v=${item.ytid}`
    }
})

function renderMovies(movies) {
    elWrapper.innerHTML = null;
    let elFragment = document.createDocumentFragment()

    movies.forEach(item => {
        let templateDiv = elTemplate.cloneNode(true);

        templateDiv.querySelector('.card-img-top').src = item.imageLink
        templateDiv.querySelector('.card-title').textContent = item.title
        templateDiv.querySelector('.card-year').textContent = item.year
        templateDiv.querySelector('.card-rate').textContent = item.rating
        templateDiv.querySelector('.card-link').src = item.ytLink

        elFragment.appendChild(templateDiv)
    })
    elWrapper.appendChild(elFragment)
}

renderMovies(normolizedMovies)


elForm.addEventListener('submit', evt => {
    evt.preventDefault()

    let foundText = elSearchInput.value

    let foundMovies = normolizedMovies.filter(item => item.title.includes(foundText))

    renderMovies(foundMovies)
})






// var normolizedMovieList = slicedMovies.map(movieItem => {
//     return {
//         title: movieItem.Title.toString(),
//         categories: movieItem.Categories,
//         rating: movieItem.imdb_rating,
//         year: movieItem.movie_year,
//         imageLink: `https://i.ytimg.com/vi/${movieItem.ytid}/mqdefault.jpg`,
//         youtubeLink: `https://www.youtube.com/watch?v=${movieItem.ytid}`  
//     }
// })



// Create categories
// function generateCategories(movieArray) {
//     let categoryList = []

//     movieArray.forEach(function(item) {
//         let splittedItem = item.categories.split("|");
        
//         splittedItem.forEach(function (item) {
//             if (!categoryList.includes(item)) {
//                 categoryList.push(item)
//             }
//         })
//     })
//     categoryList.sort()
    
//     let categoryFragment = document.createDocumentFragment()
    
//     categoryList.forEach(function (item) {
//         let categoryOption = document.createElement("option");
//         categoryOption.value = item
//         categoryOption.textContent = item
//         categoryFragment.appendChild(categoryOption)
//     })
    
//     elCategorySelect.appendChild(categoryFragment)
// }
// generateCategories(normolizedMovieList)

// Create render function
// function renderMovies(movieArray, wrapper){
//     wrapper.innerHTML = null;
//     let elFragment = document.createDocumentFragment()
    
//     movieArray.forEach(movie => {
//         let templateDiv = elTemplate.cloneNode(true)
        
//         templateDiv.querySelector(".card-img-top").src = movie.imageLink
//         templateDiv.querySelector(".card-title").textContent = movie.title
//         templateDiv.querySelector(".card-year").textContent = movie.year
//         templateDiv.querySelector(".card-rate").textContent = movie.rating
//         templateDiv.querySelector(".card-link").href = movie.youtubeLink
        
//         elFragment.appendChild(templateDiv);
//     });
//     wrapper.appendChild(elFragment)
    
//     elTitle.textContent = movieArray.length;
// }

// renderMovies(normolizedMovieList , elWrapper);


// elForm.addEventListener("submit", function(evt) {
//     evt.preventDefault()
    
//     let ratingInput = elRating.value.trim()
//     let filteredArray = normolizedMovieList.filter(item => item.rating >= ratingInput)
//     console.log(filteredArray);
//     renderMovies(filteredArray , elWrapper);
// })

// elForm.addEventListener("submit", function(evt) {
//     evt.preventDefault()
    
//     var selectOption = elCategorySelect.value
//     let categorisedMovies = []

//     if (selectOption === "All") {
//         categorisedMovies = normolizedMovieList
//     }else {
//         categorisedMovies = normolizedMovieList.filter(function (item) {
//             return item.categories.split("|").includes(selectOption) 
//         })
//     }
    
//     renderMovies(categorisedMovies , elWrapper);
// })


