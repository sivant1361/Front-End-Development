function onStartup() {
    function count() {
        for (var i = 0; i < 10; i++) {
            console.log(i);
        }
        console.log("counted: " + i);
    }
    count();
}
onStartup();
