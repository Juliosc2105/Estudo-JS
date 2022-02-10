function capturarAlunos(){
    alunos = []
    for (let i = 0; i < 1; i++) {
        nome = prompt("Qual o nome do aluno?")
        notas = []
        for (let x = 0; x < 2; x++) {
            nota = prompt("Digite a nota número " + (x+1) + ":")
            nota = parseInt(nota)
            notas.push(nota)            
        }
        aluno = {}
        aluno.nome = nome
        aluno.notas = notas
        alunos.push(aluno)      
    }
    return alunos
}