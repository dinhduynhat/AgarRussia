// ==UserScript==
// @name         AgarRussia
// @namespace    none
// @version      1.0
// @description  AgarRussia
// @author       DimaRRR
// @match        http://agar.io/*
// @grant        none
// ==/UserScript==

$('#overlays').append('<div style="position: absolute;bottom: 0;left: 0;background-color: #FFF;border-radius: 0px 5px 0px 0px;padding: 5px 10px;"><center>AgarRussia</center></div>');
$('.tosBox').html('<center>AgarRussia</center>');
$('#adsBottom').html('<div id="adsBottomInner" style="margin: 0px auto;width: 728px;height: 21px;border: 5px solid white;border-radius: 5px 5px 0px 0px;background-color: #FFFFFF;box-sizing: content-box;"><div id="a728x90"><center>Реклама удалена с помощью расширения AgarRussia.</center></div></div>');
$('#options').html('<label><input type="checkbox" onchange="setSkins(!$(this).is(\':checked\'));"><span data-itr="option_no_skins">Без скинов</span></label><label><input type="checkbox" onchange="setNames(!$(this).is(\':checked\'));"><span data-itr="option_no_names">Без ников</span></label><label><input type="checkbox" onchange="setColors($(this).is(\':checked\'));"><span data-itr="option_no_colors">Без цветов</span></label><label><input type="checkbox" onchange="setShowMass($(this).is(\':checked\'));"><span data-itr="option_show_mass">Показывать очки</span></label><label><input type="checkbox" onchange="setDarkTheme($(this).is(\':checked\'));"><span data-itr="option_dark_theme">Темная тема</span></label><label><input type="checkbox" onchange="setSkipStats($(this).is(\':checked\'));"><span data-itr="option_skip_stats">Обнулить статистику</span></label>');
$('#a300x250').html('<center>Реклама удалена с помощью расширения AgarRussia.</center>');
$('.btn-needs-server').html('Наблюдать');
$('.btn-logout').html('Выйти');
var nick = document.getElementById("nick");
nick.placeholder = "Логин";
$('#nick').val('AgarRussia');
$('#gamemode').html('<option selected="" value="" data-itr="gamemode_ffa">Сам за себя</option><option value=":teams" data-itr="gamemode_teams">Командный</option><option value=":experimental" data-itr="gamemode_experimental">Экспериментальный</option><option value=":party" data-itr="party">Вечеринка</option>');
$('.text-muted').html('<span data-itr="instructions_mouse">Двигайте мышью для управления шариком</span><br><span data-itr="instructions_space">Нажмите <b>ПРОБЕЛ</b> для разделения шарика</span><br><span data-itr="instructions_w">Нажмите <b>W</b> для сброса маленькой части шарика</span><br>');
$('#agario-main-buttons').html('<button type="button" onclick="$(\'#settings, #instructions\').toggle();return false;" class="btn btn-info btn-settings"><i class="glyphicon glyphicon-cog"></i></button><button type="submit" onclick="setNick(document.getElementById(\'nick\').value); return false;" class="btn btn-play btn-primary btn-needs-server" data-itr="play">Играть</button><button type="submit" onclick="setNick(document.getElementById(\'nick\').value); return false;" class="btn btn-play-guest btn-success btn-needs-server" data-itr="play_as_guest">Играть как гость</button><button onclick="facebookLogin(); return false;" class="btn btn-login btn-primary" style="line-height: 24px;" data-original-title="" title=""><span class="social social-facebook" style="font-size:24px;margin-top:-6px;margin-left:-8px;vertical-align:middle;margin-right:5px;"></span><span data-itr="login_and_play">Войти и играть</span></button><br clear="both">');
$('.agario-promo').css('background-image','url()');
$('.agario-promo').html('<div class="agario-panel agario-side-panel"><div class="clearfix" style="margin-bottom: 16px;"><center><span class="text-muted">Разработчик данного расширения: DimaRRR.</span></center></div>');
