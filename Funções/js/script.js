// for para somar 2 ou mais numeros



    function calcularMedia(){
        let total = 0
        let quantidade = arguments.length;

        for(let i = 0; i < quantidade; i++){
            if (typeof arguments[i] !== "number"){
                throw Error("Somente Números")
            }

            total += arguments[i]
        }

        return total / quantidade
        
    }
console.log(calcularMedia(50, 10))
 
function nomeNatela(nome){

    
   return "Olá " + nome +"," + " Como esta?"
}

console.log(nomeNatela("Eduardo"))
console.log(nomeNatela("João"))
