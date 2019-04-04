export function convertArrToString(array) {
    var result = "";
    var index = array.indexOf("4");
    if(index > -1){
        array.splice(index,1);
        array.push("4");
    }
    for (var i = 0; i < array.length; i++) {
        if (array[i] === "1") {
            result += "Music, ";
        }
        else if (array[i] === "2") {
            result += "Sport, ";
        }
        else if (array[i] === "3") {
            result += "Picnic, ";
        }
        else if (array[i] === "4") {
            result += "Other, ";
        }
    }
    result = result.substr(0, result.length - 2);
    return result;
}