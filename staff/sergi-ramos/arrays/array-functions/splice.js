


function splice(array, start, deleteCount, ...args) {// 1,2
    debugger
    var array = [1,2,3,4,5];
    var arrChange = []
    var cont = 0;
    for (var i = start; i < start + deleteCount; i++) {
       
        arrChange[cont] = array[i];
        cont++
    }
  
    return arrChange

}


var arr = splice(array,1,2);
