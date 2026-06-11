//ozgaruvchilar
var yourage = +prompt("yoshiniz kiriting")
if (yourage<0) {
    alert("siz hali yoshsiz oqing bilim oling")
}
else if (yourage < 18) {
    alert("siz hali yoshsiz oqing bilim oling")
}
else if (yourage < 50) {
    alert("siz hali iwlang baquvatsiz")
}
else if (yourage < 59) {
    alert("hudo hohlasa uyogi pensiya")
}
else if (yourage < 150) {
    alert("e qoyil 1 asr yashab qoyibsiz bobo")
}
else{
    alert("oka yoshizni sorayapiz hayotiz qizumas")
}
