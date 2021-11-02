var utama = 'https://gamesnacks.com/';
var folder = 'embed/';
var widget = utama + folder;
var widgetHtml = '<iframe id="ifr" src="' + widget + '" style="border:0;width:100%;height:675px;"></iframe>';
var isNew = document.getElementById("permainan");
document.getElementById("permainan").innerHTML = widgetHtml;