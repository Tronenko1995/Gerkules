// Берём элемент для вывода таймера
var timer_show = document.getElementById("timer");
 
// Функция для вычисления разности времени
function diffSubtract(date1, date2) {
    return date2 - date1;
}
 
// Массив данных о времени
var end_date = {
    "full_year": "2020", // Год
    "month": "09", // Номер месяца
    "day": "25", // День
    "hours": "12", // Час
    "minutes": "00", // Минуты
    "seconds": "00" // Секунды
}
 
// Строка для вывода времени
var end_date_str = end_date.full_year+" - "+end_date.month+" - "+end_date.day+" T "+end_date.hours+" : "+end_date.minutes+":"+end_date.seconds;

// Запуск интервала таймера
timer = setInterval(function () {
    // Получение времени сейчас
    var now = new Date();
    // Получение заданного времени
    var date = new Date(end_date_str);
    // Вычисление разницы времени 
    var ms_left = diffSubtract(now, date);
    // Если разница времени меньше или равна нулю 
    if (ms_left <= 0) { // То
        // Выключаем интервал
        clearInterval(timer);
        // Выводим сообщение об окончание
        alert("Время закончилось");
    } else { // Иначе
        // Получаем время зависимую от разницы
        var res = new Date(ms_left);
        // Делаем строку для вывода
        var str_timer = res.getUTCFullYear() - 1970+" . "+res.getUTCMonth()+" . "+res.getUTCDate() - 1+" "+res.getUTCHours()+" : "+res.getUTCMinutes()+" : "+res.getUTCSeconds();
        // Выводим время
        timer_show.innerHTML = str_timer;
    }
}, 1000);