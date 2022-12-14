let cars = [
    {id: 1,
     brandTitle: 'BMW',
     modelTitle: 'X3',
     imgURL: 'https://img-c.drive.ru/models.large.main.images/0000/000/000/001/bd1/48d9a839c962aa55-main.jpg',
     description: 'BMW X3 — люксовый компактный кроссовер немецкой компании BMW. X3 первого поколения разработан и выпускался совместно с компанией Magna Steyr на заводе в Граце, Австрия.',
     price: '30000 $',
    },

    {id: 2,
     brandTitle: 'Audi',
     modelTitle: 'SQ7',
     imgURL: 'https://avatars.mds.yandex.net/get-verba/787013/2a0000016c95369482c9d4d28387feda4a1c/cattouchret',
     description: 'Сердцем Audi SQ7 TDI является 4,0-литровый двигатель V8 TDI с двойным турбонагнетателем. Он развивает мощность 422 л.с. и максимальный крутящий момент 900 Нм и разгоняет Audi SQ7 TDI с 0 до 100 км/ч за 4,8 секунды.',
     price: '70000 $',
    },

    {id: 3,
     brandTitle: 'Mercedes',
     modelTitle: 'GLC',
     imgURL: 'https://dvizhok.su/i/files2/auto/2022/07/Mercedes_GLC_2022_sales-start_2.jpg',
     description: 'Двигатель GLC 350 e 4MATIC — это первый в сегменте гибрид, заряжаемый от сети. Он оснащён 211-сильным мотором и электродвигателем с пиковой отдачей в 116 л.с. и 340.',
     price: '50200 $',
    },

    {id:4,
     brandTitle: 'Range Rover',
     modelTitle: 'Velar',
     imgURL: 'https://images.drive.ru/i/0/5fe34608ec6b857bf44ba9a8.jpg',
     description: 'Range Rover Velar (L560) — это компактный кроссовер сегмента «люкс», производства британской автомобильной компании Jaguar Land Rover. Четвертая модель в линейке Range Rover , Velar был представлен ​​1 марта 2017 года в Лондоне, Англия.',
     price: '999000 $',
    },

    {id: 5,
     brandTitle: 'Jaguar',
     modelTitle: 'F-Pace',
     imgURL: 'https://cdn.atlantm.com/static/889/2541/jaguar_f_pace_7.jpg',
     description: 'Jaguar F-Pace — компактный престижный кроссовер, выпускающийся британской компанией Jaguar Cars с 2016 года, первый кроссовер компании. Jaguar F-PACE обеспечивает превосходную управляемость и повышенную топливную эффективность.',
     price: '90300 $',
    },

    {id: 6,
     brandTitle: 'GMC',
     modelTitle: 'Yukon',
     imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkFdDReiX8n7KPPTG1hUc3kubVPmFXguah0Q&usqp=CAU',
     description: 'Начало выпуска 2020, Мощность : с 360 лс до 426 лс, Длина 5721 мм (225.24 in.); Ширина 2058 мм (81.02 in.); Высота 1943 мм (76.5 in.); Колесная база 3407 мм (134.13 in.);',
     price: '80100 $',
     
    }
]

let str = "";

function getCars() {
    
    for (let i of cars) {
        str += `<div class="card" style="width: 18rem;">
        <img src=${i.imgURL} class="card-img-top" alt="car">
        <div class="card-body">
        <h5 class="card-title">${i.brandTitle}</h5>
        <h6 class="card2-title">${i.modelTitle}</h6>
        <p class="card-text">${i.description}</p>
        <h5 class="price">${i.price}</h5>
        </div>
    </div>`;
    } 
    const app = document.getElementById('app');
    console.log(app);
    app.innerHTML = str;
}; 

// function getCars() {
//     const app = document.getElementById('app');
    
//     const res = cars.getCars((prev, car) => {
//         const { img, brandTitle, modelTitle, description, price} = car;

//         return prev += `<div class="card" style="width: 18rem;">
//             <img src=${img} class="card-img-top" alt="car">
//             <div class="card-body">
//                 <h5 class="card-title">${brandTitle}</h5>
//                 <h6 class="card2-title">${modelTitle}</h6>
//                 <p class="card-text">${description}</p>
//                 <h5 class="price">${price}</h5>
//             </div>
//         </div>`
//     }, '')

//     app.innerHTML = res;
// }


// function max() {
//     cars.sort(function(a, b){
//         return b.price-a.price
//     }); 
// } 

function min(){cars.sort((a,b) => a.price.localeCompare(b.price));
    const app = document.getElementById('app');
    console.log(app);
    app.innerHTML = str;}



function send() {
    const brand = document.form.brandTitle.brand;
    const model = document.form.modelTitle.model;
    const img = document.form.img.img;
    // const descr = document.form.description.description;
    const descr = document.getElementsByName('description');
    const price = document.form.price.price;

    cars.push({
        brand, model, img, description, price
    })
};