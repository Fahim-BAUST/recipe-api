document.getElementById('warn').style.display = 'none';
const searchFood = () => {
    const foodName = document.getElementById('food-name');
    document.getElementById('warn').style.display = 'none';

    if (foodName.value == '') {
        alert("enter any food name first please");
    }
    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName.value}`;

        fetch(url)
            .then(res => res.json())
            .catch(error => displayError(error))
            .then(data => loadFood(data.meals))
            ;


    }

    foodName.value = '';
    toggleTpinner('block');

};

const toggleTpinner = (data) => {
    document.getElementById('spin').style.display = data;

};

const displayError = error => {
    document.getElementById('warn').style.display = 'block';

};

const loadFood = names => {

    const div1 = document.getElementById('add-food');
    div1.textContent = '';

    if (names == null) {
        div1.innerHTML = `
        <h1 class="text-white bg-danger"
        >No results found</h1>
        `;
        toggleTpinner('none');
    }

    for (const name of names) {

        const div = document.createElement('div');
        div.classList.add("col");

        div.innerHTML = `
        <div onclick="openFoodDetails(${name.idMeal})"  class="card h-100 " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <img src="${name.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${name.strMeal}</h5>
                <p class="card-text" >${name.strInstructions.slice(0, 200)}<span class="fw-bold text-info">...See more</span></p>
            </div>
        </div>`
        div1.appendChild(div);

    }
    toggleTpinner('none');

};

const openFoodDetails = async id => {

    const url1 = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

    res = await fetch(url1);
    data = await res.json();
    loadall(data.meals);


};
const loadall = name => {

    const div2 = document.getElementById('food-modal');


    div2.innerHTML = `
    <div class="modal-content ">
        <div class="modal-header">
            <h5 class="modal-title text-dark fs-4 fw-bold " id="staticBackdropLabel">${name[0].strMeal} Recipe</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
    <div class="modal-body" >
        <center><img src="${name[0].strMealThumb}" class="w-75 mb-2"></center>
        <p class="fs-5"><span class="fw-bold">Catagory: </span>${name[0].strCategory}</p>
        <p class="fs-5"><span class="fw-bold">Area: </span>${name[0].strArea}</p>
        
        <p class="fs-5 fw-bold">Ingridients: </p>
        <ul id="modalBody"> </ul>
        
         <p class="fs-5"> <span class="fw-bold">Description: </span> ${name[0].strInstructions}</p>
    </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
        </div>
    </div>

    `
    const modalBody = document.getElementById('modalBody');
    if (name[0].strIngredient1 != "") {
        let li = document.createElement('li');
        li.innerText = `${name[0].strIngredient1} = ${name[0].strMeasure1}`;
        modalBody.appendChild(li);

        if (name[0].strIngredient2 != "") {
            let li = document.createElement('li');
            li.innerText = `${name[0].strIngredient2} = ${name[0].strMeasure2}`;
            modalBody.appendChild(li);

            if (name[0].strIngredient3 != "") {
                let li = document.createElement('li');
                li.innerText = `${name[0].strIngredient3} = ${name[0].strMeasure3}`;
                modalBody.appendChild(li);

                if (name[0].strIngredient4 != "") {
                    let li = document.createElement('li');
                    li.innerText = `${name[0].strIngredient4} = ${name[0].strMeasure4}`;
                    modalBody.appendChild(li);

                    if (name[0].strIngredient5 != "") {
                        let li = document.createElement('li');
                        li.innerText = `${name[0].strIngredient5} = ${name[0].strMeasure5}`;
                        modalBody.appendChild(li);

                        if (name[0].strIngredient6 != "") {
                            let li = document.createElement('li');
                            li.innerText = `${name[0].strIngredient6} = ${name[0].strMeasure6}`;
                            modalBody.appendChild(li);

                            if (name[0].strIngredient7 != "") {
                                let li = document.createElement('li');
                                li.innerText = `${name[0].strIngredient7} = ${name[0].strMeasure7}`;
                                modalBody.appendChild(li);

                                if (name[0].strIngredient8 != "") {
                                    let li = document.createElement('li');
                                    li.innerText = `${name[0].strIngredient8} = ${name[0].strMeasure8}`;
                                    modalBody.appendChild(li);

                                    if (name[0].strIngredient9 != "") {
                                        let li = document.createElement('li');
                                        li.innerText = `${name[0].strIngredient9} = ${name[0].strMeasure9}`;
                                        modalBody.appendChild(li);

                                        if (name[0].strIngredient10 != "") {
                                            let li = document.createElement('li');
                                            li.innerText = `${name[0].strIngredient10} = ${name[0].strMeasure10}`;
                                            modalBody.appendChild(li);

                                            if (name[0].strIngredient11 != "") {
                                                let li = document.createElement('li');
                                                li.innerText = `${name[0].strIngredient9} = ${name[0].strMeasure9}`;
                                                modalBody.appendChild(li);

                                                if (name[0].strIngredient12 != "") {
                                                    let li = document.createElement('li');
                                                    li.innerText = `${name[0].strIngredient12} = ${name[0].strMeasure12}`;
                                                    modalBody.appendChild(li);

                                                    if (name[0].strIngredient13 != "") {
                                                        let li = document.createElement('li');
                                                        li.innerText = `${name[0].strIngredient13} = ${name[0].strMeasure13}`;
                                                        modalBody.appendChild(li);

                                                        if (name[0].strIngredient14 != "") {
                                                            let li = document.createElement('li');
                                                            li.innerText = `${name[0].strIngredient14} = ${name[0].strMeasure14}`;
                                                            modalBody.appendChild(li);

                                                            if (name[0].strIngredient15 != "") {
                                                                let li = document.createElement('li');
                                                                li.innerText = `${name[0].strIngredient15} = ${name[0].strMeasure15}`;
                                                                modalBody.appendChild(li);

                                                                if (name[0].strIngredient16 != "") {
                                                                    let li = document.createElement('li');
                                                                    li.innerText = `${name[0].strIngredient16} = ${name[0].strMeasure16}`;
                                                                    modalBody.appendChild(li);

                                                                    if (name[0].strIngredient17 != "") {
                                                                        let li = document.createElement('li');
                                                                        li.innerText = `${name[0].strIngredient17} = ${name[0].strMeasure17}`;
                                                                        modalBody.appendChild(li);

                                                                        if (name[0].strIngredient18 != "") {
                                                                            let li = document.createElement('li');
                                                                            li.innerText = `${name[0].strIngredient18} = ${name[0].strMeasure18}`;
                                                                            modalBody.appendChild(li);

                                                                            if (name[0].strIngredient19 != "") {
                                                                                let li = document.createElement('li');
                                                                                li.innerText = `${name[0].strIngredient19} = ${name[0].strMeasure19}`;
                                                                                modalBody.appendChild(li);

                                                                            }

                                                                            if (name[0].strIngredient20 != "") {
                                                                                let li = document.createElement('li');
                                                                                li.innerText = `${name[0].strIngredient20} = ${name[0].strMeasure20}`;
                                                                                modalBody.appendChild(li);

                                                                            }

                                                                        }

                                                                    }

                                                                }

                                                            }

                                                        }

                                                    }



                                                }

                                            }

                                        }

                                    }


                                }

                            }

                        }

                    }

                }

            }

        }
    }

    // for (let i = 1; i < 10; i++) {
    //     const str = `strIngredient${i}`;
    //     const str1 = `strMeasure${i}`;
    //     console.log(name[0].strIngredient1);

    //     if (name[0].str != null || name[0].str != "") {
    //         const li = document.createElement('li');
    //         li.innerText = `${name[0].str} = ${name[0].str1}`;
    //         modalBody.appendChild(li);

    //     }
    //     else {
    //         break;
    //     }

    // }

};

