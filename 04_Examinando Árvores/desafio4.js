//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.


let amostra = gets().split(',').map(Number);

//TODO: Print no console, para cada índice da lista, os parâmetros
//se a amostra está bom, aceitável ou inaceitável


for (let i = 0; i < amostra.length; i++){
    if(amostra[i] >= 75){
        console.log("Descartar da lista");
    }
    else if(amostra[i] >= 50 && amostra[i] < 75){
        console.log("Manter sob observação");
    } 
    else{
        console.log("Isolar e iniciar protocolo de cuidados");
    }
}


// Bom (mais de 75% de saúde na amostra)
// Imprima "Descartar da lista"
// Aceitável (mais de 50% e menos de 75%)
// Imprima "Manter sob observação"
// Inaceitável (menos de 50%)
// Imprima "Isolar e iniciar protocolo de cuidados"

// Isolar e iniciar protocolo de cuidados
// Manter sob observação
// Descartar da lista      