let input = document.querySelector('input')
let passDiv = document.querySelector('.paint')
let inputValues = [];
let width = 0;


input.addEventListener('keyup', function(e){
    if ( e.code !== "Backspace"){
        inputValues.push(input)
        colorPassDiv()
    }else if (e.code === "Backspace"){
        inputValues.pop()
        decolorPassDiv()
    }
})


function colorPassDiv(){
    width += 10
    if( width <= 30){
        passDiv.style.width = width + "%"
        passDiv.style.background = "red"
    } else if( width <= 60){
        passDiv.style.width = width + "%"
        passDiv.style.background = "orange"
    }else if( width <= 100){
        passDiv.style.width = width + "%"
        passDiv.style.background = "green"
    } else if( width == 100){
        passDiv.style.background = "green"
    } 
}

function decolorPassDiv(){
    width -= 10
    if( width <= 30){
        passDiv.style.width = width + "%"
        passDiv.style.background = "red"
    } else if( width <= 60){
        passDiv.style.width = width + "%"
        passDiv.style.background = "orange"
    }else if( width <= 100){
        passDiv.style.width = width + "%"
        passDiv.style.background = "green"
    } else if( width == 100){
        passDiv.style.background = "green"
    } 
}