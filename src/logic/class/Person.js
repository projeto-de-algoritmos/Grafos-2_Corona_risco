class Person {
    constructor(nome) {
        this.nome = nome;
        this.mascara = Math.random() < 0.5; //50% probability of getting true
        this.pegou = Math.random() < 0.3; //30% probability of getting true
    }

    getNome(){
        return this.nome;
    }
    getMascara(){
        return this.mascara;
    }
    getPegou(){
        return this.pegou;
    }
}
module.exports = Person;