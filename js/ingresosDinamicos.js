// funciones para agregar ingresos dinamicamente

// rocorriendo el array dataEntry
const runningDataEntry = () => {
    let EntryVal = '';

    for (let value of dataEntry) {
        EntryVal += createEntry(value);
    }
    //agregando el contenido creado a la lista <ol> de ingresos
    document.getElementById('entry-list').innerHTML = `Ingresos ${EntryVal}`;
}

// creando el contenido html y asignando valores
const createEntry = (value) => {
     let newBlock = `
        <li>
            <div class="container">
                <label for="texto">
                    <input id="texto" type="text" value="${value.description}">
                </label>    
                <label for="numero">
                    <input id="numero" type="text" value="${currencyCoin(value.value)}">
                </label>
                <span class="close">x</span>
            </div>
        </li> `;
        return newBlock;
}
