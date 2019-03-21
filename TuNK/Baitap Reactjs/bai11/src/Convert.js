export function convertArrToString(array) {
    var result = "";
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

export function convertStringToArray(value){
    var result = [];
    result = value.split(',');
    for (var i = 0; i < result.length; i++) {
        if(result[i].trim() === "Music"){
            result[i] = "1";
        }
        else if(result[i].trim() === "Sport"){
            result[i] = "2";
        }
        else if(result[i].trim() === "Picnic"){
            result[i] = "3";
        }
        else if(result[i].trim() === "Other"){
            result[i] = "4";
        }
    }
    return result;
}