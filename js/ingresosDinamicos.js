// funciones para agregar ingresos dinamicamente

// rocorriendo el array dataEntry
const runningDataEntry = () => {
    let entryVal = '';

    for (let value of dataEntry) {
        entryVal += createEntry(value);
    }
    //agregando el contenido creado a la lista <ol> de ingresos
    document.getElementById('entry-list').innerHTML = `Ingresos ${entryVal}`;
}

// creando el contenido html y asignando valores
const createEntry = (value) => {
     let newBlock = `
        <li>
            <button class="close" onclick="getCloseBtnEntry(${value.id})"><i class="bi bi-x-circle"></i></button>
            <div class="entry-container">
                <label for="texto">
                    <input id="texto" type="text" value="${value.description}">
                </label>    
                <label for="numero">
                    <input id="numero" type="text" value="${currencyCoin(value.value)}">
                </label>
            </div>
        </li> `;
        return newBlock;
}

const getCloseBtnEntry = (id) => {
    let index = dataEntry.findIndex(ingr => ingr.id === id);
    dataEntry.splice(index, 1);
    
    HeaderonLoad();
    runningDataEntry();

    return console.log('clickeando el btn ' + index);
}