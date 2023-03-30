/*<aside>
💡 Principais pontos abordados nesse desafio:

- Estrutura de dados com objetos;
- Estrutura de repetição;
- Criação de funções;
- Operadores comparativos;

</aside>

Bora praticar e rever tudo o que foi ensinado na aula? **💜**

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

*/

Students = [
  {
  Name: 'Daniel',
  grade1: 5,
  grade2: 6,
},

{
  Name: 'Pedro',
  grade1: 6.9,
  grade2: 7,
},

{
  Name: 'Marília',
  grade1: 10,
  grade2: 10,
}
]

let avarage;
let index = 0


function calculateAvarage(grade1, grade2){
 return (grade1 + grade2) /2
}

function printAvarage(){  
  avarage = calculateAvarage(Students[index].grade1,Students[index].grade2)
  if(avarage >= 7){
    alert(`Parabéns, o aluno ${Students[index].Name} tirou nota ${avarage} e foi aprovado`)
    index++  
  } else{
    alert(`Que pena, o aluno ${Students[index].Name} tirou nota ${avarage} e não foi aprovado`)
    index++
  }
}

for(student of Students){
 printAvarage()
 
}

  
  
  


