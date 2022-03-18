const submit = document.getElementById("create")
submit.onmousedown = function(){
    // submit.style.borderColor = "gray";
    submit.style.border = "2px solid gray"
    submit.onmouseup = function (){
        // submit.style.borderColor = "rgb(57, 51, 109)"
        submit.style.border = "2px solid rgb(57, 51, 109)"
    }
}

