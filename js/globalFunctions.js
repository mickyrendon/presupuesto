document.body.onload = HeaderonLoad;

// invocando a las funciones que hacen el calculo del presupuesto en el header
function HeaderonLoad(){
    let budget = `${totalEntry()} - ${totalEgress()}`;
    let percentage = `${totalEgress()}/${totalEntry()}`

    document.getElementById('budget').innerHTML = budget;
    document.getElementById('percentage').innerHTML = percentage;
}

const totalEntry = () =>{
    let totalCounter = 0;
    for(let i of dataEntry){
        //recorriendo el aray dataEntry
        totalCounter += i.val;
    }
    return totalCounter;
}
const totalEgress = () =>{
    let totalCounter = 0;
    for(let i of dataEgress){
        //recorriendo el aray dataEntry
        totalCounter += i.val;
    }
    return totalCounter;
}

// calculos
// let 
