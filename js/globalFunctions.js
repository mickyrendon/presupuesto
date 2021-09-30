document.body.onload = HeaderonLoad;

// invocando a las funciones que hacen el calculo del presupuesto en el header
function HeaderonLoad(){
    let budget = totalEntry() - totalEgress();
    let percentage = totalEgress() / totalEntry();
// el encapsulamiento funciona por el return de las funciones currrenncycoin y percentageDigits  
    document.getElementById('budget').innerHTML = `${currencyCoin(budget)}`;
    document.getElementById('ing').innerHTML = `Ingresos  ${currencyCoin(totalEntry())}`;
    document.getElementById('egr').innerHTML = `Egresos  ${currencyCoin(totalEgress())} ${percentageDigits(percentage)}`;

// invocando a la funcion running data del script ingresos Dinamicos
    runningDataEntry();
    runningDataEgress();
    readOnly()
}

const totalEntry = () =>{
    let totalCounter = 0;

    //recorriendo el array dataEntry
    for(let i of dataEntry){
        totalCounter += i.value;
    }
    return totalCounter;
}
const totalEgress = () =>{
    let totalCounter = 0;
    //recorriendo el array dataEgress
    for(let i of dataEgress){
        totalCounter += i.value;
    }
    return totalCounter;
}

//moneda
const currencyCoin = (val) => {
    return val.toLocaleString('es-AR', {
        style:'currency',
        currency:'ARS',
        minimumFractionDigits: 2
    })
}
const percentageDigits = (val) => {
    //si el valor es NaN mostrar 0
    if(isNaN(val)){
        val = 0;
        console.log('invalido');
    }
    return val.toLocaleString('es-AR', {
        style:'percent',
        minimumFractionDigits: 2
    })
}
const readOnly = () => {
    // mejorar la funcion para que el forEach no se repita y se pueda aplicar a los elementos
    let element1 = document.querySelectorAll('.entry-container > label > input');
    let element2 = document.querySelectorAll('.egress-container > label > input');
    
    element1.forEach(element => {
        element.setAttribute('readonly', true);
        element.style.outline = 'none';
    }) ;
    element2.forEach(element => {
        element.setAttribute('readonly', true);
        element.style.outline = 'none';

    }) ;
};