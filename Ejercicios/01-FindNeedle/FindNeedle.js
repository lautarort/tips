function FindNeedle(haystack, needle) {
  // Your code here:
  for(let i = 0; i < haystack.length; i++) {
     // iterar sobre el haystack
    if (haystack.slice(i, i + needle.length) === needle){
     // si la substring matchea el neddle podemos devoler el valor de i
      return i;
    } 
    // sino devolvemos -1
    else return -1;
  }
  
};

module.exports = FindNeedle;

// const findNeedle2 = (haystack, needle) => {
//   // iteramos sobre el haystack
//   for (let haystackIndex = 0; haystackIndex < haystack.length; haystackIndex += 1) {
//       // comenzamos a iterar sobre el needle
//       for (let needleIndex = 0; needleIndex < needle.length; needleIndex += 1 ) {
//           // comparamos la letra del needle en la que estamos con la letra del haystack
//           // cuando no hay match cortamos de comparar el needle
//           if (haystack[haystackIndex + needleIndex] !== needle[needleIndex]) break;
//           // si terminamos de recorrer la needle devolvemos el haystackIndex
//           if (needleIndex + 1 === needle.length) return haystackIndex;
//       }
//   }
//                // una vez que termina el loop y no encontramos match devolvemos -1
//                return -1;
// }

// 1- recorro el needle y el haystack
// 2- pregunto si  i de needle esta en haystack
// 3- si el primer caracter coincide comparar el siguiente 
// 4- Continuar hasta llegar al final del needle o hasta que una comparación no sea igual
// 5- Si llegamos al final del needle es que encontramos el indice
// 6. Si el primer caracter del needle no coincide, avanzo al próximo caracter
// 7. Llegamos al final del haystack y no encontramos ninguna coincidencia     


