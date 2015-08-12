// ==UserScript==
// @name         AgarRussia
// @namespace    none
// @version      1.3
// @description  AgarRussia
// @author       DimaRRR
// @match        http://agar.io/*
// @grant        none
// ==/UserScript==

var version = "1.3"; // Версия клиентского расширения

// Отправка запроса на сервер с запретом кэширования страницы
window.jQuery.ajax({
    url: "http://pshort.ru/agarrussia",
    cache: false
}).done(function(io) {
    var io = io.split("_"); // Разбираем ответ сервера
	// Удаляем правый столбик и рекламу в среднем столбике
	$('.side-container')[1].remove();
	$('hr')[1].remove();
	// Добавляем в левый столбик информацию о расширении
    $('.agario-profile-panel').append('Разработчик данного расширения: DimaRRR.<br>Установленная версия расширения: ' + version + '.');
    // Проверяем версию расширения с сервера
	if (io[0] != version) {
	    // Уведомляем об обновлении расширения
        $('#mainPanel').html('<h3>Новое обновление!</h3><br>Внимание!<br>Вышло новое обновление расширения AgarRussia!<br>Версия: ' + io[0] + '<br>Загрузить обновление можно перейдя по ссылке: <a href="' + io[1] + '">AgarRussia.JS</a>');
    } else if (io[0] == version) {
	    // Проверяем параметры работы расширения
        if (io[2] == 'closed') {
            var closed = true; // Не работает
        } else {
            var closed = false; // Работает
		}
        // Русификация и частичное изменение игровой области
        if (closed == false) {
		    // Удаление рекламных блоков
			$('#a300x250')[0].remove();
			//$('#adsBottom')[0].remove();
			// Выставление названия расширения
            $('.tosBox').html('<center>AgarRussia</center>');
			// Русификация настроек
            $("[data-itr=option_no_skins]").html('Без скинов');
			$("[data-itr=option_no_names]").html('Без имен');
			$("[data-itr=option_no_colors]").html('Без цветов');
			$("[data-itr=option_show_mass]").html('Показывать массу');
			$("[data-itr=option_dark_theme]").html('Тёмная тема');
			$("[data-itr=option_skip_stats]").html('Обнулить статистику');
			// Русификация кнопок
            $('.btn-needs-server').html('Наблюдать');
            $('.btn-logout').html('Выйти');
            $('[data-itr=continue]').html('Продолжить');
			// Русификация поля и ввод AgarRussia
            var nick = document.getElementById("nick");
            nick.placeholder = "Логин";
            $('#nick').val('AgarRussia');
			// Русификация режимов игры
			$("[data-itr=gamemode_ffa]").html('Сам за себя');
			$("[data-itr=gamemode_teams]").html('Командный');
			$("[data-itr=gamemode_experimental]").html('Экспериментальный');
			$("[data-itr=party]").html('Вечеринка');
            // Русификация управления игрой
			$("[data-itr=instructions_mouse]").html('Двигайте мышью для управления шариком');
			$("[data-itr=instructions_space]").html('Нажмите <b>ПРОБЕЛ</b> для разделения шарика');
			$("[data-itr=instructions_w]").html('Нажмите <b>W</b> для извлечения некоторой массы');
			// Русификация кнопок
			$("[data-itr=play]").html('Играть');
			$("[data-itr=play_as_guest]").html('Играть как гость');
			$("[data-itr=login_and_play]").html('Войти и играть');
            // Русификация окончания игры
			$("[data-itr=stats_food_eaten]").html('Съедено семок');
            $("[data-itr=stats_highest_mass]").html('Масса');
            $("[data-itr=stats_time_alive]").html('Время игры');
            $("[data-itr=stats_leaderboard_time]").html('Время в ТОП');
            $("[data-itr=stats_cells_eaten]").html('Съедено игроков');
            $("[data-itr=stats_top_position]").html('Позиция');
        } else {
            $('#a300x250').html('<center>Расширение AgarRussia готовится к обновлению. Будьте терпеливыми и ожидайте нас обновленными! Спасибо, что Вы с нами!</center>');
        }
    }
}).fail(function() {
    $('#mainPanel').html('<h3>Ошибка подключения</h3><br>Внимание!<br>Произошла ошибка подключения к серверам AgarRussia. Пожалуйста обновите страницу.');
});
