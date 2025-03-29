// Функция для копирования текста по нажатию кнопки
function copyTextID(id) {
    var $tmp = $("<textarea>");
    $("body").append($tmp);
    $tmp.val($("#" + id).text()).select();
    document.execCommand("copy");
    $tmp.remove();
}

