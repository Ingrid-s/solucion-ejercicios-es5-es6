// 3 variables llamadas igual para hacer 3 pruebas (usa una variable y las otras 2 comentalas)

                                // ES5

// declara las variables ES5

var array = [2, 4, 6];
// var array = [-3, 2, -8, 12, 5];
// var array = [1, 2, 3, 4, 5];


// declaración de la funcion 

function square () {
  // escribe tu código aqui...
  function square (numbers) {
    // escribe tu código aqui...
    var alCuadrado = numbers.map(function(num){
      if(num % 2 === 0){
        console.log(num * num);
        return num * num;
      }else{
        console.log(num);
        return num;
      }
      console.log(alCuadrado);
      return alCuadrado;
    });
  }
  
  square(array);
}

square(array);


                      //  ES6

// Ahora comenta todo el codigo de arriba y escribelo en ES6


// declara variables (let-const)


// declara la funcion y ejecuta el código
// const square = (numbers) => {
//   const alCuadrado = numbers.map((num) => {
//      if (num % 2 === 0) {
//        console.log(num * num);
//        return num * num;
//      }
//      console.log( num);
//      return num;
//    });
//   console.log( alCuadrado); 
//   return alCuadrado;
//  };		 








// ejecuta la funcion 

