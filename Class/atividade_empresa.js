// Prática
// Imagine que você está desenvolvendo um sistema para uma empresa que possui diferentes tipos de funcionários, como gerentes e desenvolvedores. Seu objetivo é implementar o código em JavaScript que modele essa situação utilizando classes e herança.

// Você precisa criar as classes Funcionario, Gerente e Desenvolvedor. A classe Funcionario deve ter os atributos nome, idade e cargo, além dos métodos seApresentar() e trabalhar(). A classe Gerente deve herdar da classe Funcionario e ter um atributo adicional departamento, além do método gerenciar(). Já a classe Desenvolvedor deve herdar da classe Funcionario e ter um atributo adicional linguagem, além do método programar().

// Depois de implementar as classes, crie instâncias de um gerente e de um desenvolvedor, definindo valores para seus atributos. Em seguida, chame os métodos apropriados para cada um dos funcionários, exibindo as saídas corretas no console.

// Boa sorte!

// Classe base Funcionario
class Funcionario{
    constructor(nome,idade,cargo){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
        this.trabalhando = false;
    }
    seApresentar(){
        console.log("Olá sou: "+ this.nome + " tenho "+ this.idade+ " anos e meu cargo é: "+this.cargo+".");
    }
    trabalhar(){
        if(this.trabalhando){
            console.log(this.nome + " Já está trabalhando");
            return;
        }
        this.trabalhando = true;
        console.log(this.nome + " Iniciou seu trabalho! Seu cargo é: "+this.cargo);
    }
}

// Classe Gerente que herda de Funcionario
class Gerente extends Funcionario{
    constructor(nome,idade,cargo,departamento){
        super(nome, idade, cargo); // Chama o construtor da classe pai
        this.departamento = departamento;
    }
    gerenciar() {
        console.log(`${this.nome} está gerenciando o departamento de ${this.departamento}.`);
    }
}

// Classe Desenvolvedor que herda de Funcionario
class Desenvolvedor extends Funcionario{
    constructor(nome,idade,cargo,linguagem){
        super(nome, idade, cargo); // Chama o construtor da classe pai
        this.linguagem = linguagem;
    }
    programar() {
        console.log(`${this.nome} está programando na linguagem: ${this.linguagem}.`);
    }
}


// Criando instâncias de Gerente e Desenvolvedor
const gerente = new Gerente('Alice', 45, 'Gerente de Projetos', 'TI');
const desenvolvedor = new Desenvolvedor('Bob', 30, 'Desenvolvedor Frontend', 'JavaScript');

// Chamando os métodos para as instâncias criadas
gerente.seApresentar();
gerente.trabalhar();
gerente.gerenciar();

desenvolvedor.seApresentar();
desenvolvedor.trabalhar();
desenvolvedor.programar();