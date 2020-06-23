var arr = [10, 20, 30, 40];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var val = arr_1[_i];
    val = val + 10;
    console.log(val);
}
for (var _a = 0, arr_2 = arr; _a < arr_2.length; _a++) {
    var val = arr_2[_a];
    console.log(val);
}
for (var va in arr) {
    console.log(va);
}
