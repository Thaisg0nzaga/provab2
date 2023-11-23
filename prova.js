function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso normal';
    } else if (imc >= 18.5 && imc <= 24.9) {
        return 'Peso normal';
    } else if (imc >= 25.0 && imc <= 29.9) {
        return 'Excesso de peso';
    } else if (imc >= 30.0 && imc <= 34.9) {
        return 'Obesidade Classe I';
    } else if (imc >= 35.0 && imc <= 39.9) {
        return 'Obesidade Classe II';
    } else {
        return 'Obesidade Classe III';
    }
}

function coletarDadosUsuario(numeroUsuario) {
    let nome = prompt('Digite o nome do usuário ' + numeroUsuario + ':');
    let peso = parseFloat(prompt('Digite o peso do usuário ' + numeroUsuario + ' (em kg):'));
    let altura = parseFloat(prompt('Digite a altura do usuário ' + numeroUsuario + ' (em metros):'));

    return { nome, peso, altura };
}

function calcularResumo(usuarios) {
    let quantidadeUsuarios = usuarios.length;
    let usuarioMaiorIMC;
    let maiorIMC = -1;
    let somaIMC = 0;

    for (let i = 0; i < quantidadeUsuarios; i++) {
        let usuario = usuarios[i];
        let imc = calcularIMC(usuario.peso, usuario.altura);

        somaIMC += imc;

        if (imc > maiorIMC) {
            maiorIMC = imc;
            usuarioMaiorIMC = usuario.nome;
        }

        let classificacao = classificarIMC(imc);
        alert(usuario.nome + ' tem IMC de ' + imc.toFixed(2) + ' - ' + classificacao);
    }

    let mediaIMC = somaIMC / quantidadeUsuarios;

    alert('Quantidade de usuários coletados: ' + quantidadeUsuarios);
    alert('Usuário com maior IMC: ' + usuarioMaiorIMC + ' com IMC de ' + maiorIMC.toFixed(2));
    alert('Média dos IMCs dos usuários: ' + mediaIMC.toFixed(2));
}

// Coleta de dados
let quantidadeUsuarios = prompt('Digite a quantidade de usuários que serão avaliados:');
let usuarios = [];

for (let i = 1; i <= quantidadeUsuarios; i++) {
    let usuario = coletarDadosUsuario(i);
    usuarios.push(usuario);
}

// Exibe os resultados finais
calcularResumo(usuarios);
