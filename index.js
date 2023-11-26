///O nome, o XP e os níveis que podem ser alcançados estão armazenados nestas variáveis
let nomeDoHeroi = 'Felipão';
let xpDoHeroi = 4500;
let nivelDoHeroi = ['Ferro', 'Bronze', 'Prata', 'Ouro', 'Platina', 'Ascendente', 'Imortal', 'Radiante'];

//Já nesta parte, estamos testando os valores para finalmente descobrir qual o nível do nosso herói
if ((xpDoHeroi >= 0) && (xpDoHeroi <= 1000)) {
    console.log('O herói de nome ' + nomeDoHeroi + ' está no nível ' + nivelDoHeroi[0])
} else if (xpDoHeroi <= 2000) {
    console.log('O herói de nome ' + nomeDoHeroi + ' está no nível ' + nivelDoHeroi[1])
} else if (xpDoHeroi <= 5000) {
    console.log('O herói de nome ' + nomeDoHeroi + ' está no nível ' + nivelDoHeroi[2])
} else if (xpDoHeroi <= 7000) {
    console.log('O herói de nome ' + nomeDoHeroi + ' está no nível ' + nivelDoHeroi[3])
} else if (xpDoHeroi <= 8000) {
    console.log('O herói de nome ' + nomeDoHeroi + ' está no nível ' + nivelDoHeroi[4])
} else if (xpDoHeroi <= 9000) {
    console.log('O herói de nome ' + nomeDoHeroi + ' está no nível ' + nivelDoHeroi[5])
} else if (xpDoHeroi <= 10000) {
    console.log('O herói de nome ' + nomeDoHeroi + ' está no nível ' + nivelDoHeroi[6])
} else {
    console.log('O herói de nome ' + nomeDoHeroi + ' está no nível ' + nivelDoHeroi[7])
}
