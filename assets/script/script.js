let trocaHBO = document.querySelector('.series-HBO')
let trocaDC = document.querySelector('.series-DC')
let trocaCN = document.querySelector('.series-CN')
let trocaMax = document.querySelector('.series-Max')
let trocaWB = document.querySelector('.series-WB')
let trocaUCL = document.querySelector('.series-UCL')

//HBO//
trocaHBO.addEventListener('mouseenter', function(){
    trocaHBO.src = "assets/images/hbo-hover_0.webp"
})
trocaHBO.addEventListener('mouseout', function(){   
    trocaHBO.src = "assets/images/hbo-default_0.webp"  
})


//CARTOON NETWORK//
trocaCN.addEventListener('mouseenter', function(){
    trocaCN.src = "assets/images/CN-hover.png"
})
trocaCN.addEventListener('mouseout', function(){   
    trocaCN.src = "assets/images/CN-default.webp"  
})


//MAX ORIGINALS//
trocaMax.addEventListener('mouseenter', function(){
    trocaMax.src = "assets/images/MAX-hover.webp"
})
trocaMax.addEventListener('mouseout', function(){   
    trocaMax.src = "assets/images/MAX-default.webp"  
})


//DC//
trocaDC.addEventListener('mouseenter', function(){
    trocaDC.src = "assets/images/DC-hover.webp"
})
trocaDC.addEventListener('mouseout', function(){   
    trocaDC.src = "assets/images/DC_Default.webp"  
})


//WARNER BROS//
trocaWB.addEventListener('mouseenter', function(){
    trocaWB.src = "assets/images/WB-hover.webp"
})
trocaWB.addEventListener('mouseout', function(){   
    trocaWB.src = "assets/images/WB-Default.webp"  
})


//UCL//
trocaUCL.addEventListener('mouseenter', function(){
    trocaUCL.src = "assets/images/UCL-hover.webp"
})
trocaUCL.addEventListener('mouseout', function(){   
    trocaUCL.src = "assets/images/UCL-Default.webp"  
})
