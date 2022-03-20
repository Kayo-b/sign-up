const submit = document.getElementById("create")
submit.onmousedown = function(){
    // submit.style.borderColor = "gray";
    submit.style.border = "1px solid rgb(15, 0, 151)"
    submit.onmouseup = function (){
        // submit.style.borderColor = "rgb(57, 51, 109)"
        submit.style.border = "1px solid rgb(57, 51, 109)"
    }
}

