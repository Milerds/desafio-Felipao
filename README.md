
# DIO | Descobrindo o nível do Herói

## DESAFIO🤓
Em um determinado jogo, o herói precisa derrotar os vilões para adquirir XP - Pontos de Experiência - e subir seu nível.

O desafio é simples, nomear o nosso personagem e encontrar seu nível de acordo com a quantidade de XP adquirida.

Para isso, vamos precisar de uma tabela que indique a quantidade de XP para cada nivel. 

Vamos usar a tabela abaixo:
|Quantidade de XP|Nivel|
|----------------| -----|
|Se XP for maior ou igual a 0 e menor do que 1000 | Ferro |
|Se XP for entre 1001 e 2000 | Bronze |
|Se XP for entre 2001 e 5000 | Prata |
|Se XP for entre 5001 e 7000 | Ouro |
|Se XP for entre 7001 e 8000 | Platina |
|Se XP for entre 8001 e 9000 | Ascendente |
|Se XP for entre 9001 e 10.000 | Imortal |
|Se XP for maior que 10.001 | Radiante |

A proposta final é que seja exibida uma mensagem semelhante a essa: 

|O herói de nome Daniel está no nível Ouro|
|--------------------------------------------------------------|


## SOLUCIONANDO O DESAFIO💡

Para começarmos a resolver o desafio, iniciaremos declarando as variáveis.

 Os dados que precisaremos são o **nome do herói**, a **quantidade de XP** e os **níveis** que o personagem pode alcançar.

 Desse modo, temos:
 |variáveis| Utilidade |
 |---------|-----------|
 |**let** nomeDoHeroi| Guarda o nome do nosso personagem|
 |**let** xpDoHeroi| Guarda o XP adquirido|
 |**let** nivelDoHeroi| Guarda os niveis que o herói pode alcançar|

 Agora escolha o nome do seu personagem, insira um valor de XP para testar quando criarmos o código e também coloque os niveis alcançaveis na variável.

 Meu personagem se chamará felipão e terá 4500 XP. Veja como fiz:
```
let nomeDoHeroi = 'Felipão';

let xpDoHeroi = 4500;

let nivelDoHeroi = ['Ferro', 'Bronze', 'Prata', 'Ouro', 'Platina', 'Ascendente', 'Imortal', 'Radiante'];
```

 Agora iremos utilizar a estrutura condicional **if** para testar os valores.

 O código ficará assim:
```
if ((xpDoHeroi >= 0) && (xpDoHeroi <= 1000)) {

    console.log('O herói de nome ' + nomeDoHeroi + ' está no nível ' + nivelDoHeroi[0])
 }
```

Esse código testará apenas a condição "*Se XP for maior ou igual a 0 e menor do que 1000*". Entretanto, caso o XP do herói seja maior que 1000, precisamos testar outras condições. Desse modo, utilizaremos **else if** e por fim **else**. Veja o código completo no [Arquivo javascript](index.js)

## Considerações finais

É importante frisar que o resultado poderia ser alcançado de distintas formas.

Ainda não domino completamente as linguagens, portanto não conheço outras maneiras, mas se você conseguiu de modos diferentes, por favor, compartilhe, feedback somado a conhecimento é sempre bem vindo! 😁

## Links para ajudar no desafio
[Guia do felipão para o desafio](https://web.dio.me/lab/classificador-de-nivel-de-heroi/learning/45058400-f8ff-4c7f-b4d2-fe56d05aad7e)

[Como utilizar o if](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else)







