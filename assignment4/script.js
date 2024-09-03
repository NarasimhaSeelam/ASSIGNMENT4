const btn = document.getElementById("btn-1");

// adding_DIV
const newBox = document.createElement('h3');
newBox.className = 'title';
newBox.textContent = `DEMO`;
document.querySelector('.add').appendChild(newBox);
const img1 = document.getElementById('img-1');
img1.className = 'img-0';

btn.addEventListener("click",async ()=>{
    // Promise
find()
.then((data1) =>{
    let img = document.getElementById("img-1");
    img.src = data1;
})
.catch(err =>{
    let title = document.getElementsByClassName("title")[0];
    title.textContent = err;
});

});

function find(){
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
        // fetching data
        let url = `https://www.themealdb.com/api/json/v1/1/random.php`;
        let data = await fetch(url);
        let {meals} = await data.json();
        if (data.ok) {
            let title = document.getElementsByClassName("title")[0];
            title.textContent = meals[0].strMeal;
            resolve(`${meals[0].strMealThumb}`);
        } else {
            reject(`data.error`);
          }
        }, 1000);
      });
}