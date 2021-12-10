class nomeAluno
{
    constructor(nome, nroFaltas, notas) {
        this.nome       = nome;
        this.nroFaltas  = nroFaltas;
        this.notas      = notas;
                                        }
    // fazer média //
    calcularMedia() {
        return this.notas.reduce((nota,notaSeguinte) => nota + notaSeguinte) / this.notas.length;
                    }
    faltas() {this.nroFaltas++;}
}; module.exports = nomeAluno;
