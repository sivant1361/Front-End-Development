var a = 5.56789;
function round1(a) {
    a = a * 10000;
    var b = a % 1;
    var c = (a - b) / 10000;
    console.log(c);
}
function round2(a) {
    a = a * 10000;
    var b = a % 10;
    var c = (a - b) / 10000;
    console.log(c);
}
function round3(a) {
    a = a * 10000;
    var b = a % 100;
    var c = (a - b) / 10000;
    console.log(c);
}
function round4(a) {
    a = a * 10000;
    var b = a % 1000;
    var c = (a - b) / 10000;
    console.log(c);
}
function round5(a) {
    a = a * 10000;
    var b = a % 10000;
    var c = (a - b) / 10000;
    console.log(c);
}
round1(a);
round2(a);
round3(a);
round4(a);
round5(a);
