let surname = prompt('Введите вашу фамилию');

while (surname == '') {
    surname = prompt('Введите вашу фамилию');
} surname = String(surname);

const name = prompt('Введите ваше имя');
const patronymic = prompt('Введите ваше отчество');
let age = parseInt(prompt('Введите ваш возраст в годах'));

while (!age) {
    age = prompt("Введите ваш возраст цифрой");
}
age = Number(age);

const gender = confirm('Ваш пол - мужской?');

const ageDay = age * 365;
const ageFive = age + 5;

function gend1(argument) {
    if (argument) {
        return "мужской";
    } else {
        return "женский";
    }
}

function pension(arg) {
    if (gender == true) {
        if (age >= 63) {
            return "да";
        } else {
            return "нет";
        }
    } else {
        if (age >= 58) {
            return "да";;
        } else {
            return "нет";
        }
    }
}

alert('ваше ФИО: ' + surname + ' ' + name + ' ' + patronymic + '\n' + 'ваш возраст в годах: ' + age + '\n' + 'ваш возраст в днях: ' + ageDay + '\n' + 'через 5 лет вам будет: ' + ageFive + '\n' + 'ваш пол: ' + gend1(gender) + '\n' + 'вы на пенсии: ' + pension(gender));
