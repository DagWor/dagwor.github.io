(function () {
    "use strict"
    window.onload = function () {
        document.getElementById("stop").disabled = true;
        document.getElementById("start").onclick = startAnimation;
        document.getElementById("stop").onclick = stopAnimation;
        document.getElementById("size_select").onchange = changeSize;
        document.getElementById("turbo").onclick = changeTurbo;
    }
    var counter = 0;
    var timerInterval;
    var delayMs = 250;
    var frames;
    var frameArr;

    function startAnimation() {
        var animation = document.getElementById("animation");

        frames = ANIMATIONS[animation.value];
        frameArr = frames.split("=====\n");
        changeTurbo();

        changeSize();
        document.getElementById("start").disabled = true;
        document.getElementById("stop").disabled = false;
    }

    function stopAnimation() {
        window.clearInterval(timerInterval);
        document.getElementById("text-area").value = frames;
        document.getElementById("start").disabled = false;
        document.getElementById("stop").disabled = true;
    }

    function changeSize() {
        var size = document.getElementById("size_select");
        var size_option = size.options[size.selectedIndex].value;
        if(size_option == "Tiny") document.getElementById("text-area").style.fontSize = "5pt";
        if(size_option == "Small") document.getElementById("text-area").style.fontSize = "10pt";
        if(size_option == "Medium") document.getElementById("text-area").style.fontSize = "15pt";
        if(size_option == "Large") document.getElementById("text-area").style.fontSize = "20pt";
        if(size_option == "Extra Large") document.getElementById("text-area").style.fontSize = "25pt";
        if(size_option == "XXL") document.getElementById("text-area").style.fontSize = "30pt";
    }

    function changeTurbo() {
        clearInterval(timerInterval);
        var isTurbo = document.getElementById("turbo").checked;
        if (isTurbo) delayMs = 40;
        else delayMs = 195;
        timerInterval = setInterval(animation_callback, delayMs);
    }

    function animation_callback(){
        if(frameArr == null) counter = 0
        else if(counter >= frameArr.length) counter = 0;
        else{
            document.getElementById("text-area").value = frameArr[counter];
            counter++;
        }
    }

}());