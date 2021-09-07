document.body.onload = HeaderonLoad;

// invocando a las funciones que hacen el calculo del presupuesto en el header
function HeaderonLoad(){
    let budget = totalEntry() - totalEgress();
    let percentage = totalEgress() / totalEntry();
// el encapsulamiento funciona por el return de las funciones currrenncycoin y percentageDigits
    document.getElementById('budget').innerHTML = `${currencyCoin(budget)}`;
    document.getElementById('ing').innerHTML = `Ingresos  ${currencyCoin(totalEntry())}`;
    document.getElementById('egr').innerHTML = `Egresos  ${currencyCoin(totalEgress())} ${percentageDigits(percentage)}`;
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
    return val.toLocaleString('es-AR', {
        style:'percent',
        minimumFractionDigits: 2
    })
}
