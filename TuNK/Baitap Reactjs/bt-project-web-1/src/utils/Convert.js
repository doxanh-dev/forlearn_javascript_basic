export function convertArrToString(array) {
    // console.log("array: "+ JSON.stringify(array))
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
    //console.log("result: "+ result)
    return result;
}