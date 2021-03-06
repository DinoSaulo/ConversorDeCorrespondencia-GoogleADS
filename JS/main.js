function obtemTextoSeparado(){
    let inputText = document.getElementById("inputTextArea").value;
    let termosDeBuscaSeparados = inputText.split(/[\n|\n\r]/)
    return termosDeBuscaSeparados;
}


function addMais() {
    let termosDeBuscaSeparados = obtemTextoSeparado()
    let  finalArray = []

    for(let i = 0; i < termosDeBuscaSeparados.length; i++) {
        let palavrasDosTermosDeBuscaSeparados = termosDeBuscaSeparados[i].split(' ')

        for(let j = 0; j < palavrasDosTermosDeBuscaSeparados.length; j++) {
            finalArray += ('+').concat(palavrasDosTermosDeBuscaSeparados[j]).concat(' ')
            if( j === palavrasDosTermosDeBuscaSeparados.length - 1) finalArray = finalArray.concat('\n')   
        }
    }

    document.getElementById("outputTextArea").innerHTML = finalArray;
}

function addNormal() {
    let termosDeBuscaSeparados = obtemTextoSeparado()
    let finalArray = ''

    for ( let i = 0; i < termosDeBuscaSeparados.length; i++) finalArray += termosDeBuscaSeparados[i].concat('\n')

    document.getElementById("outputTextArea").innerHTML = finalArray;
}

function addAspas() {
    let termosDeBuscaSeparados = obtemTextoSeparado()
    let finalArray = ''

    for(let i = 0; i < termosDeBuscaSeparados.length; i++) {
        let palavrasDosTermosDeBuscaSeparados = termosDeBuscaSeparados[i].split(' ')
        
        for(let j = 0; j < palavrasDosTermosDeBuscaSeparados.length; j++) {
            if( j === 0) finalArray = finalArray.concat('"') 
            
            if( j === palavrasDosTermosDeBuscaSeparados.length - 1) {
                finalArray = finalArray.concat(palavrasDosTermosDeBuscaSeparados[j])
                finalArray = finalArray.concat('"\n')
            } else {
                finalArray = finalArray.concat(palavrasDosTermosDeBuscaSeparados[j]).concat(' ')
            }
        }
    }

    document.getElementById("outputTextArea").innerHTML = finalArray;
}

function addChaves() {
    let termosDeBuscaSeparados = obtemTextoSeparado()
    let finalArray = ''

    for(let i = 0; i < termosDeBuscaSeparados.length; i++) {
        let palavrasDosTermosDeBuscaSeparados = termosDeBuscaSeparados[i].split(' ')
        
        for(let j = 0; j < palavrasDosTermosDeBuscaSeparados.length; j++) {
            if( j === 0) finalArray = finalArray.concat('[') 
            
            if( j === palavrasDosTermosDeBuscaSeparados.length - 1) {
                finalArray = finalArray.concat(palavrasDosTermosDeBuscaSeparados[j])
                finalArray = finalArray.concat(']\n')
            } else {
                finalArray = finalArray.concat(palavrasDosTermosDeBuscaSeparados[j]).concat(' ')
            }
        }
    }

    document.getElementById("outputTextArea").innerHTML = finalArray;
}

function addMenos() {
    let termosDeBuscaSeparados = obtemTextoSeparado()
    let  finalArray = []

    for(let i = 0; i < termosDeBuscaSeparados.length; i++) {
        let palavrasDosTermosDeBuscaSeparados = termosDeBuscaSeparados[i].split(' ')

        for(let j = 0; j < palavrasDosTermosDeBuscaSeparados.length; j++) {
            finalArray += ('-').concat(palavrasDosTermosDeBuscaSeparados[j]).concat(' ')
            if( j === palavrasDosTermosDeBuscaSeparados.length - 1) finalArray = finalArray.concat('\n')   
        }
    }

    document.getElementById("outputTextArea").innerHTML = finalArray;
}


function copiaTexto() {
    var copyText = document.getElementById("outputTextArea");
    copyText.select();
    document.execCommand("copy");
    
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
  }
  
  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }
