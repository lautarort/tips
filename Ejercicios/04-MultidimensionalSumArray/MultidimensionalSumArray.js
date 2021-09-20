function mdArraySum(arr) {
  // Your code here:
    // Iniciamos la suma en 0
    let sum = 0;
    // Iteramos sobre el arreglo
    for (let i = 0; i < arr.length; i += 1) {
        // si es un arreglo le sumamos lo que devuelve llamar otra vez la función sobre ese arreglo
        if (Array.isArray(arr[i])) sum += mdArraySum(arr[i])
        // si no le sumamos al total
        else sum += arr[i]  
    }
    // devolvemos el total
    return sum;
}



module.exports = mdArraySum;
