var d = new Date();
var d1 = new Date();
d1.setHours(24);
d1.setMinutes(0);
d1.setSeconds(0);
d1.setMilliseconds(0);
var diff = d1 - d;
var sec = Math.floor(diff / 1000);
var min = Math.floor(sec / 60);
var hou = Math.floor(min / 60);
sec = sec - min * 60;
min = min - hou * 60;
document.writeln("Осталось " + hou + " часов " + min + " минут " + sec + " секунд ");