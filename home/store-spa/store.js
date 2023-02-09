let cars = [
    {id: 1,
     brandTitle: 'BMW',
     modelTitle: 'X3',
     imgURL: 'https://img-c.drive.ru/models.large.main.images/0000/000/000/001/bd1/48d9a839c962aa55-main.jpg',
     description: 'BMW X3 — люксовый компактный кроссовер немецкой компании BMW. X3 первого поколения разработан и выпускался совместно с компанией Magna Steyr на заводе в Граце, Австрия.',
     price: '30000',
     rep: 1
    },

    {id: 2,
     brandTitle: 'Audi',
     modelTitle: 'SQ7',
     imgURL: 'https://avatars.mds.yandex.net/get-verba/787013/2a0000016c95369482c9d4d28387feda4a1c/cattouchret',
     description: 'Сердцем Audi SQ7 TDI является 4,0-литровый двигатель V8 TDI с двойным турбонагнетателем. Он развивает мощность 422 л.с. и разгоняет Audi SQ7 TDI с 0 до 100 км/ч за 4,8 секунды.',
     price: '70000',
     rep: 1
    },

    {id: 3,
     brandTitle: 'Mercedes',
     modelTitle: 'GLC',
     imgURL: 'https://dvizhok.su/i/files2/auto/2022/07/Mercedes_GLC_2022_sales-start_2.jpg',
     description: 'Двигатель GLC 350 e 4MATIC — это первый в сегменте гибрид, заряжаемый от сети. Он оснащён 211-сильным мотором и электродвигателем с пиковой отдачей в 116 л.с. и 340.',
     price: '50200',
     rep: 1
    },

    {id:4,
     brandTitle: 'Range Rover',
     modelTitle: 'Velar',
     imgURL: 'https://images.drive.ru/i/0/5fe34608ec6b857bf44ba9a8.jpg',
     description: 'Range Rover Velar (L560) — это компактный кроссовер сегмента «люкс», производства британской автомобильной компании Jaguar Land Rover. Четвертая модель в линейке Range Rover , Velar был представлен ​​1 марта 2017 года в Лондоне, Англия.',
     price: '99000',
     rep: 1
    },

    {id: 5,
     brandTitle: 'Jaguar',
     modelTitle: 'F-Pace',
     imgURL: 'https://cdn.atlantm.com/static/889/2541/jaguar_f_pace_7.jpg',
     description: 'Jaguar F-Pace — компактный престижный кроссовер, выпускающийся британской компанией Jaguar Cars с 2016 года, первый кроссовер компании. Jaguar F-PACE обеспечивает превосходную управляемость и повышенную топливную эффективность.',
     price: '90300',
     rep: 1
    },

    {id: 6,
     brandTitle: 'GMC',
     modelTitle: 'Yukon',
     imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkFdDReiX8n7KPPTG1hUc3kubVPmFXguah0Q&usqp=CAU',
     description: 'Начало выпуска 2020, Мощность : с 360 лс до 426 лс, Длина 5721 мм (225.24 in.); Ширина 2058 мм (81.02 in.); Высота 1943 мм (76.5 in.); Колесная база 3407 мм (134.13 in.);',
     price: '80100',
     rep: 1
    }
]


let app = document.getElementById('app');
let arrBasket = [];
let basket = document.querySelector('.bst');
let choice = document.querySelector('.choice');

function getCars() {
    let child = app.querySelectorAll('.card');

    for (let m = 0; m < child.length; m++) {  // цикл, чтобы карточкм не накапливались
        child[m].remove();
        
    }

    for (let i = 0; i < cars.length; i++) {
        let divCard = document.createElement("div");
        divCard.className = "card";
        app.appendChild(divCard);

        let img = document.createElement("img");
        img.className = "card-img";
        divCard.appendChild(img);
        img.src = cars[i].imgURL;

        let cardBody = document.createElement("div");
        cardBody.className = "card-body";
        divCard.appendChild(cardBody);

        let brand = document.createElement("h3");
        cardBody.appendChild(brand);
        brand.textContent = cars[i].brandTitle;

        let model = document.createElement("h4");
        cardBody.appendChild(model);
        model.textContent = cars[i].modelTitle;

        let description = document.createElement("p");
        cardBody.appendChild(description);
        description.textContent = cars[i].description;

        let price = document.createElement("h3");
        cardBody.appendChild(price);
        price.textContent = `Стоимость ${cars[i].price} $`;

        let a1 = document.createElement("a");
        a1.setAttribute('data-id', cars[i].id);
        cardBody.appendChild(a1);
        a1.className="btn btn-primary";
        a1.href="#";
        a1.textContent="Добавить в корзину";
        a1.onclick = handleClick;
        
    }
}

// function getCars() {
//     let str = "";
//     for (let i of cars) {
//         str += `<div class="card" style="width: 18rem;">
//         <img src=${i.imgURL} class="card-img-top" alt="car">
//         <div class="card-body">
//         <h5 class="card-title">${i.brandTitle}</h5>
//         <h6 class="card2-title">${i.modelTitle}</h6>
//         <p class="card-text">${i.description}</p>
//         <h5 class="price">${i.price}</h5>
//         </div>
//     </div>`;
//     } 
    
//     app.innerHTML = str;
// }; 



function max() {   // по убыванию
    cars.sort((a,b) => b.price.localeCompare(a.price));
    console.log(cars);
    getCars();
}

function min() {  // по возрастанию
    cars.sort((a,b) => a.price.localeCompare(b.price));
    console.log(cars);
    getCars();
}

"use strict";

window.onhashchange = switchToStateFromURLHash;

var SPAState = {};


function switchToStateFromURLHash() {
    var URLHash = window.location.hash;

    var stateStr = URLHash.substr(1);


    var pageHTML = "";
    switch (stateStr) {
        case 'Main':
            pageHTML += send();
            break;
        case 'About':
            pageHTML += renderMain();
            // pageHTML += rendomBasket();
            break;
    }
    document.getElementById('IPage').innerHTML = pageHTML;
}

function switchToState(newState) {
    var stateStr = newState.pagename;
    location.hash = stateStr;
}

function switchToMainPage() {
    switchToState({ pagename: 'Main' });
}

function switchToAboutPage() {
    switchToState({ pagename: 'About' });
}

switchToStateFromURLHash();

function renderMain(){
    return (
        `<div class="bst">
         <h5>&#128722;</h5>
         <div class="choice"></div>
         <div class="allPrice"></div>
         </div>`
    )
}

function send() {  // добавление новых машин

    let brandTitle = document.querySelector("input[name='brandTitle']").value;
    let modelTitle = document.querySelector("input[name='modelTitle']").value;
    let img = document.querySelector("input[name='img']").value;
    let description = document.querySelector("input[name='description']").value;
    let price = document.querySelector("input[name='price']").value;

    if (brandTitle == "" || modelTitle == "" || img == "" || description == "" || isNaN(price) == true) {
        alert ('Введите все поля')
    } else {
        cars.push({
            brandTitle, modelTitle, img, description, price
        }); 
        getCars();
    }

    render(cars)
    localStorage.cars = JSON.stringify(cars)
};

function handleClick(e){  // добавить в корзину
          
    for(k=0; k<cars.length; k++) {
      
      if(cars[k].id==e.target.dataset.id) {
        if(!arrBasket.includes(cars[k])) {
          arrBasket.push(cars[k]);
        } else {
          
          for(let s=0; s<arrBasket.length; s++) {
            if(arrBasket[s].id==e.target.dataset.id) {
              arrBasket[s].rep++;
              
            }
          }
        }
        
      }

    }
    rendomBasket();
}

function rendomBasket() {  // строю корзину
    let sum=0; // сколько машин в корзине
    let price=0; // итоговая сумму в корзине

    const loc = JSON.stringify(arrBasket);
    localStorage.setItem('arrBasket', loc);

    if(arrBasket.length==0) {
      price=0;
      document.querySelector(".allPrice").textContent=`Итого: ${price} $`;
      
    }

    let divBasketDelete = document.querySelectorAll('.divBasket'); // все предыдущие карточки, если они есть, для того чтоб удалить
    for( let r=0; r<divBasketDelete.length; r++) { //Создала цикл,чтоб карточки не накапливались
        divBasketDelete[r].remove();              
    }
     
    for (let m=0;m<arrBasket.length;m++) {
      sum++;
      price+=arrBasket[m].price*arrBasket[m].rep; //Итоговая стоимость


        function minusCar(e){
            console.log(e.target.dataset.id)

            if(arrBasket[m].rep-1==0) {
                function fff (v) {
                    return v.id!=e.target.dataset.id;
                }
                arrBasket= arrBasket.filter( fff);

            rendomBasket();
            console.log(arrBasket)
            return;
            }
            
            
            arrBasket[m].rep--;
            rendomBasket()
        }

        let divBasket=document.createElement("div");
        divBasket.className="divBasket";
        choice.appendChild(divBasket);

        let brandTitleBasket=document.createElement("span");
        divBasket.appendChild(brandTitleBasket);
        brandTitleBasket.textContent=sum+") "+arrBasket[m].brandTitle;

        let modelTitleBasket=document.createElement("span");
        divBasket.appendChild(modelTitleBasket);
        modelTitleBasket.textContent=" "+arrBasket[m].modelTitle;

        let priceBasket=document.createElement("span");
        divBasket.appendChild(priceBasket);
        priceBasket.textContent="-"+(arrBasket[m].price*arrBasket[m].rep)+"$";

        let repeat=document.createElement("span");
        repeat.className="repeat";
        divBasket.appendChild(repeat);
        repeat.textContent=`(${arrBasket[m].rep} шт.)`
        

        let allPrice=document.querySelector(".allPrice");
        allPrice.textContent=`Итого: ${price} $`;

        // let btnDelete=document.createElement("button");
        // btnDelete.className="btnDelete";
        // divBasket.appendChild(btnDelete);
        // let imgDelete=document.createElement("img");
        // btnDelete.appendChild(imgDelete);
        // imgDelete.setAttribute("src", "delete.png");
        // imgDelete.setAttribute('data-id', arrBasket[m].id);
        // btnDelete.onclick= deleteCar;

        // let btnMinus=document.createElement("button");
        // btnMinus.className="btnMinus";
        // divBasket.appendChild(btnMinus);
        // let imgMinus=document.createElement("img");
        // btnMinus.appendChild(imgMinus);
        // imgMinus.setAttribute("src", "minus.png");
        // imgMinus.setAttribute('data-id', arrBasket[m].id);

        // btnMinus.onclick= minusCar;


    } 
}

function deleteCar(e){
    function ff (v) {
        return v.id!=e.target.dataset.id;
    }
    arrBasket= arrBasket.filter
}


