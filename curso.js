
const nomeAluno = require('./aluno');
const estudantes = require('./estudante');
const curso = {
    curso: 'Desenvolvimento de sistemas',
    NotaMinimaParaAprovacao: 7,
    MaximoDeFalta: 5,
    listaEstudantes: estudantes,
    
    adicionaAluno(nome, nroFaltas, notas) {
        let newAluno = new nomeAluno(nome, nroFaltas, notas);
        this.listaEstudantes.push(newAluno);
    },
    AlunoAprovado(student) {
        let mediaEspecial = this.notaDeAprovacao*1.1;
        let mediaFinal = student.calcularMedia();
        let faltas = student.nroFaltas;
        if(faltas > this.MaximoDeFalta && mediaFinal < mediaEspecial)
        
        {
            console.log(`Estudante ${student.nome} >> reprovado`)
            return false;
        } else if(mediaFinal < this.NotaMinimaParaAprovacao){
            console.log(`Estudante ${student.nome} >> reprovado`)
            return false;
        } else {
            console.log(`Estudante ${student.nome} >> aprovado`)
            return true;
        }
    },    
    AprovadoLista() {
        for( let i = 0; i < this.listaEstudantes.length; i++ ) {
            curso.AlunoAprovado(this.listaEstudantes[i]);            
                }
    },
};

curso.AprovadoLista();

