 let addData = () => {
     let formulario = document.forms['new-item'];
     let selectType = formulario['selector'];
     let newDescription = formulario['input-description'];
     let newValue = formulario['input-number'];

     if(newDescription.value !== '' &&  newValue.value !== ''){
         if(selectType.value === 'ingreso'){
                // + = number()/ convirtiendo un string en number
            dataEntry.push(new Entry(newDescription.value, +newValue.value));
            HeaderonLoad();
            runningDataEntry();
         }else if(selectType.value === 'egreso'){
            dataEgress.push(new Egress(newDescription.value, +newValue.value));
            HeaderonLoad();
            runningDataEgress();
         };
        }
        return formulario.reset();
 };

document.getElementById('btn-add').addEventListener('click', addData, true);