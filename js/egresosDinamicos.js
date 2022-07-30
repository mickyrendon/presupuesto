// funciones para agregar Egresos dinamicamente

// rocorriendo el array dataEgress
const runningDataEgress = () => {
    let egressVal = '';

    for (let value of dataEgress) {
        egressVal += createEgress(value);
    };
    //agregando el contenido creado a la lista <ol> de ingresos
    document.getElementById('egress-list').innerHTML = `Egresos ${egressVal}`;
};

// creando el contenido html y asignando valores
const createEgress = (value) => {
     let newBlock = `
        <li>
            <button class="close" onclick="getCloseBtn(${value.id})"><i class="bi bi-x-circle"></i></button>
            <div class="egress-container">
                <label for="texto">
                    <input id="texto" class="input-text" type="text" value="${value.description}" readonly>
                </label>    
                <label for="numero">
                    <input id="numero" class="numero" type="text" value="${currencyCoin(value.value)}" readonly>
                </label>
                <span class="percentage">${percentageDigits(value.value/totalEgress())}</span>
            </div>
        </li>`;

        return newBlock;
};

// eliminando ingresos
const getCloseBtn = (id) => {
    let index = dataEgress.findIndex(egr => egr.id === id);
    dataEgress.splice(index, 1);
    
    HeaderonLoad();
    runningDataEgress();

    return console.log('clickeando el btn ' + index);
};