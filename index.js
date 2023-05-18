const readline = require('readline-sync');



const TOTAL_ASSENTOS = 24;
const mapaAssentos = {};
let assentosOcupados = 0;



function exibirMenu() {
    console.log("+_ _ _ _ _ _  Companhia Aérea _ _ _ _ _ _+");
    console.log('|                                        |');
    console.log('|      1 - Comprar Passagem              |');
    console.log('|      2 - Consultar Voos                |');
    console.log('|      3 - Exibir Mapa de Assentos       |');
    console.log('|      4 - Emitir Ticket                 |');
    console.log('|      0 - Encerrar Programa             |');
    console.log("|                                        |");
    console.log('+_ _ _ _ _ _  Companhia Aérea _ _ _ _ _ _+');
}



function comprarPassagem() {
    console.log('\n+_ _ _ _ _ Comprar Passagem _ _ _ _ _+');



    const nome = readline.question('Nome: ');
    const sobrenome = readline.question('Sobrenome: ');
    const idade = parseInt(readline.question('Idade: '));
    const assento = readline.question('Assento (ex: A1): ').toUpperCase();
    const origem = readline.question('Origem: ').toUpperCase();
    const destino = readline.question('Destino: ').toUpperCase();



  if (!mapaAssentos[assento] && assento.match(/^[AB][1-9]|1[0-2]$/)) {
    mapaAssentos[assento] = { nome, sobrenome, idade, origem, destino };
    assentosOcupados++;



    let valor;
    if (idade < 18) {
        valor = 50;
    } else if (idade >= 60) {
        valor = 100;
    } else {
        valor = 75;
    }



    console.log('\n+_ _ _ _ _ _ Resumo da Compra _ _ _ _ _ _+');
    console.log(`  |Nome: ${nome} ${sobrenome}`);
    console.log(`  |Idade: ${idade}`);
    console.log(`  |Assento: ${assento}`);
    console.log(`  |Origem: ${origem}`);
    console.log(`  |Destino: ${destino}`);
    console.log(`  |Valor: R$ ${valor.toFixed(2)}`);
    console.log('  +_ _ _ _ _ _ Resumo da Compra _ _ _ _ _ _+')
    } else {
        console.log('\nAssento inválido ou ocupado!');
    }
}



function consultarVoos() {
    console.log('\n+_ _ _ _ _ _ _ _ _ _ Consultar Voos _ _ _ _ _ _ _ _ _ _+');
    console.log('  |                   Voos disponíveis:                  |');
    console.log('  |1. Sao Paulo (GRU) -> Rio de Janeiro (GIG) - 13:30    |');
    console.log('  |2. Curitiba (BSB) -> India (PEK) - 19:20              |');
    console.log('  |3. São Paulo (GRU) -> Belo Horizonte (BOM) - 10:00    |');
    console.log('  |4. Rio de Janeiro (CNF) -> Florianopolis (SYD) - 15:00|');
    console.log('  +_ _ _ _ _ _ _ _ _ _ Consultar Voos _ _ _ _ _ _ _ _ _ _+')
}



function exibirMapaAssentos() {
    console.log('\n+_ _ _ _ _ Mapa de Assentos _ _ _ _ _+');



    for (let i = 1; i <= 12; i++) {
        let linhaA = `A${i}: ${mapaAssentos['A' + i] ? 'X' : '-'}`;
        let linhaB = `B${i}: ${mapaAssentos['B' + i] ? 'X' : '-'}`;
        console.log(`${linhaA}\t\t${linhaB}`);
    }



    console.log(`\nAssentos Disponíveis: ${TOTAL_ASSENTOS - assentosOcupados}`);
    console.log(`Assentos Ocupados: ${assentosOcupados}`);
}



function emitirTicket() {
    console.log('\n+_ _ _ _ _ Emitir Ticket _ _ _ _ _+');



    if (assentosOcupados === 0) {
        console.log('Nenhuma passagem vendida!');
    return;
    }



    const assento = readline.question('Assento (ex: A1): ').toUpperCase();



    if (!mapaAssentos[assento]) {
        console.log('Assento inválido ou não vendido!');
    return;
    }



    const { nome, sobrenome, idade, origem, destino } = mapaAssentos[assento];
    let valor;
    if (idade < 18) {
        valor = 50;
    } else if (idade >= 60) {
        valor = 100;
    } else {
        valor = 75;
    }   

    console.log('+ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _+');
    console.log('|       Companhia Aérea        |');
    console.log('+ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _+');
    console.log(`|Nome: ${nome} ${sobrenome}`);
    console.log(`|Idade: ${idade}`);
    console.log(`|Assento: ${assento}`);
    console.log(`|Origem: ${origem}`);
    console.log(`|Destino: ${destino}`);
    console.log(`|Valor: R$ ${valor.toFixed(2)}`);
    console.log('+ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _+');
}



let opcao;
do {
    exibirMenu();
    opcao = parseInt(readline.question('Opcao: '));
    switch (opcao) {
        case 1:
            comprarPassagem();
            break;
        case 2:
            consultarVoos();
            break;
        case 3:
            exibirMapaAssentos();
            break;
        case 4:
            emitirTicket();
            break;
        case 0:
            console.log('\nPrograma encerrado!');
            break;
        default:
            console.log('\nOpcao inválida!');
    }
} while (opcao !== 0);