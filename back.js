/////////////////////////////////////////////////////////////////
////////////////// Pruba BACK Ejercicio 1 ///////////////////////
/////////////////////////////////////////////////////////////////

////////////////////////Ingresar aqui las palabras a filtrar/////////////////////
var palabras = "abcde,kyoto,Tokyo,London,donlon,Mexico,rome,emor,london, mecoxi";
/////////////////////////////////////////////////////////////////////////////////

var alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];

function task1() {
    let palabrasLower = this.palabras.toLocaleLowerCase();
    let toAnalyzeRep = palabrasLower.split(',');
    console.log(toAnalyzeRep);
    

    let toAnalyze = toAnalyzeRep.filter((item,index)=>{
        return toAnalyzeRep.indexOf(item) === index;
    })
    console.log(toAnalyze);

    var dataMatrix = [];
    for(let i=0; i<toAnalyze.length; i++) {
        dataMatrix[i] = new Array(this.alfabeto.length).fill(0);
    }

    for(let j=0; j<toAnalyze.length; j++){
        let letras = toAnalyze[j].split('');
        for(let k=0; k<letras.length; k++){
            let y = letras[k].charCodeAt(0) - 97;
            dataMatrix[j][y] = dataMatrix[j][y] + 1;
        }
    }
    console.log(dataMatrix);

    let compareMatrix = [];
    for(let l=0; l<dataMatrix.length; l++) {
        compareMatrix[l] = dataMatrix[l].join('');
    }
    console.log(compareMatrix);

    let dataEqual = [];
    let provicional = [];
    for(let m=0; m<compareMatrix.length; m++){
        provicional = provicional.concat(m);
        for(let n=0; n<compareMatrix.length; n++){
            if(compareMatrix[m] === compareMatrix[n] && m!=n){
                provicional = provicional.concat(n);
            }
        }
        dataEqual = dataEqual.concat([provicional]);
        provicional = [];
    }
    console.log(dataEqual);

    let dataEqualOrder = [];
    for(let o=0; o<dataEqual.length; o++) {
        dataEqualOrder[o] = dataEqual[o].sort().join(',');
    }
    console.log(dataEqualOrder);

    let dataFiltered = dataEqualOrder.filter((item,index)=>{
        return dataEqualOrder.indexOf(item) === index;
    })
    console.log(dataFiltered);

    let final = [];
    let prov = [];
    for(let p=0; p<dataFiltered.length; p++) {
        let aux = dataFiltered[p].split(',');
        for(let q=0; q<aux.length; q++){
            prov = prov.concat(toAnalyze[aux[q]]);
        }
        final = final.concat([prov]);
        prov = [];
    }
    console.log(final);
};

task1();

//////////////////////////////////////////////////////////////////////
////////////////// end: Pruba BACK Ejercicio 1 ///////////////////////
//////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////
////////////////// Prueba BACK Ejercicio 2 ///////////////////////
//////////////////////////////////////////////////////////////////

////Ingrese aqui la serie de numeros y el cantidad de numero a eliminar///
var input = "8,5,4,9,3,6,1";
var cantidadARemover = 3;
///////////////////////////////////////////////////////////////////////////

function removeSmallest(){
    let inputArray = input.split(',');
    let inputArrayOrder = input.split(',').sort();
    console.log("1:",inputArray);
    console.log("2:",inputArrayOrder);

    let result;
    if(cantidadARemover >= inputArrayOrder.length){
        result = [];
    }
    if(cantidadARemover <= 0){
        result = inputArray;
    }
    if(cantidadARemover > 0 && cantidadARemover < inputArray.length)
    {
        for(let i=0; i<cantidadARemover; i++){
            var removed = inputArray.splice(inputArray.indexOf(inputArrayOrder[i]), 1);
        }
        result = inputArray
    }
    console.log(result);
};

removeSmallest();

///////////////////////////////////////////////////////////////////////
////////////////// end: Prueba BACK Ejercicio 2 ///////////////////////
///////////////////////////////////////////////////////////////////////