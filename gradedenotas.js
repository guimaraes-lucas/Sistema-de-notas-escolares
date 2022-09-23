/* ### Transformar notas escolares

Crie um algoritivo que transforme as notas do sistema numérico
para sistemas de notas em caracteres tipo ABC

* de 90 para cima = A
* entre 80 - 89   = B
* entre 70 - 79   = C
* entre 60 - 69   = D
* menor que 60    = F

*/

function getScore(score) {

    if(score >= 90 && score <= 100) {
        console.log('A')
    } else if(score >= 80 && score <= 89) {
        console.log('B')
    } else if(score >= 70 && score <= 79) {
        console.log('C')
    } else if(score >= 60 && score <= 69) {
        console.log('D')
    } else if(score <60   && score >= 0) {
        console.log('F')
    }
}
    getScore(70)