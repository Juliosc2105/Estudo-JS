    function mostrarAlunos(alunos){
        for (let i = 0; i < alunos.length; i++) {
            aluno = alunos[i]
            mostrarNaTela("Notas do(a) " + aluno.nome)
            somaDasNotas = 0
            for (let x = 0; x < aluno.notas.length; x++) {
                nota = aluno.notas[x]
                somaDasNotas = somaDasNotas + nota
                mostrarNaTela("Nota " + (x+1) + ": " + nota)
            }
            media = somaDasNotas/aluno.notas.length
            mostrarNaTela("A média foi: " + media)
            mostrarNaTela("--------------------------------")
        }
    }