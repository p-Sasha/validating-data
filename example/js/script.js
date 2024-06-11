Telegram.WebApp.MainButton.showProgress(true);
Telegram.WebApp.ready();
const initData = Telegram.WebApp.initData || "";
const initDataUnsafe = Telegram.WebApp.initDataUnsafe || {};

// if (initDataUnsafe.query_id && initData) {
    $.ajax("https://snake.interso.ru/users/auth/", {
        type: "POST",
        data: { initData },
        dataType: "json",
        success: function (result) {
            if (result.ok) {
                $(".page").removeClass("bot-stand-by");
                $(".page").removeClass("bot-sad");
                $(".page").addClass("bot-happy");
            } else {
                $(".page").removeClass("bot-stand-by");
                $(".page").removeClass("bot-happy");
                $(".page").addClass("bot-sad");
            }
        },
        error: function (jqXHR, exception) {
            console.log('Произошла ошибка! Обновите страницу и повторите отправку формы!');
        },
    });
    Telegram.WebApp.MainButton.hideProgress();
// }

Telegram.WebApp.MainButton.setText('BACK TO BOT').show().onClick(Telegram.WebApp.close);
