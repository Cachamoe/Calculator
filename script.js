(function () {

    let screen = $(".screen");
    let buttons = $(".btn");
    let equal = $(".btn-equal");
    let clear = $(".btn-clear");

    // Get data from buttons clicked
    buttons.forEach(function(button) {
        button.addEventListener("click", function(e) {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    equal.addEventListener("click", function(e) {
        if (screen.value === " ") {
            screen.value = "Please Enter a Value";
        } else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    });

    clear.addEventListener("click", function(e) {
        screen.value =  " ";
    });
})