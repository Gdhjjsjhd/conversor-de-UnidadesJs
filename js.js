import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})



rl.question('Qual dos conversor que você gsotaria de usar: \n 1 - Temperatura(Celcios/Farinraite)\n 2 - Distancia(m/km/milhas) 3 - Tempo(s/min/h)', (conversores) => {
    if(conversores === '1'){
        rl.question('Digite \n c - Celcio para Farinraite \nn f - Farinrate para Celcio', (temperatura) => {
            if( temperatura === 'c'){
               rl.question('Qual o valor?', (valor) => {
                    let temperaturaC = valor * 5/9 + 32
                    console.log(`${valor} Celcio para Farinraite é ${temperaturaC} Farinraite`);
                    
               })
            }else if(temperatura === 'f'){
                rl.question('Qual o valor?', (valor) => {
                    let temperaturaF = (valor - 32) * 5/9
                    console.log(`${valor} Farinraite para Celcio é ${temperaturaF} Celcio`);
                })
            }
        })
    }else if(conversores === '2'){
        rl.question('Digite \n m/km - Metro para Quilometro \nm/milhas - Metro para Milhas \n km/milhas - Quilometros para Milhas \n km/m - Quilometro para metro \n milhas/m - Milhas para metro \n milhas/km - Milhas para Quilometro  ', (distancia) => {
                if(distancia === 'm/km'){
                    rl.question('Qual o valor?', (valor) => {
                        let distanciaM = valor / 1000
                        console.log(`${valor} Metro para Quilometro é ${distanciaM} Quilometro`);
                    })

                }else if(distancia === 'm/milhas'){
                    rl.question('Qual o valor?', (valor) => {
                        let distanciaM = valor / 1609.34
                        console.log(`${valor} Metro para Milhas é ${distanciaM} Milhas`);
                    })
                }else if(distancia === 'km/milhas'){
                    rl.question('Qual o valor?', (valor) => {
                        let distanciaM = valor * 0.621371
                        console.log(`${valor} Quilometro para Milhas é ${distanciaM} Milhas`);
                    })
                }else if(distancia === 'km/m'){
                    rl.question('Qual o valor?', (valor) => {
                        let distanciaM = valor * 1000
                        console.log(`${valor} Quilometro para Metro é ${distanciaM} Metro`);
                    })
                }else if(distancia === 'milhas/m'){
                    rl.question('Qual o valor?', (valor) => {
                        let distanciaM = valor * 1609.34
                        console.log(`${valor} Milhas para Metro é ${distanciaM} Metro`);
                    })
                } else if(distancia === 'milhas/km'){
                    rl.question('Qual o valor?', (valor) => {
                        let distanciaM = valor / 0.621371
                        console.log(`${valor} Milhas para Quilometro é ${distanciaM} Quilometro`);
                    })
                }

        })
    }else if(conversores === '3'){
        rl.question('Digite \n s/min - Segundos para Minutos \n s/h - Segundos para Horas \n min/s - Minutos para Segundos \n min/h - Minutos para Horas \n h/s - Horas para Segundos \n h/min - Horas para Minutos', (tempo) => {
            if(tempo === 's/min'){
                rl.question('Qual o valor?', (valor) => {
                    let tempoS = valor / 60
                    console.log(`${valor} Segundos para Minutos é ${tempoS} Minutos`);
                })
            }else if(tempo === 's/h'){
                rl.question('Qual o valor?', (valor) => {
                    let tempoS = valor / 3600
                    console.log(`${valor} Segundos para Horas é ${tempoS} Horas`);
                })
            }else if(tempo === 'min/s'){
                rl.question('Qual o valor?', (valor) => {
                    let tempoS = valor * 60
                    console.log(`${valor} Minutos para Segundos é ${tempoS} Segundos`);
                })
            }else if(tempo === 'min/h'){
                rl.question('Qual o valor?', (valor) => {
                    let tempoS = valor / 60
                    console.log(`${valor} Minutos para Horas é ${tempoS} Horas`);
                })
            }else if(tempo === 'h/s'){
                rl.question('Qual o valor?', (valor) => {
                    let tempoS = valor * 3600
                    console.log(`${valor} Horas para Segundos é ${tempoS} Segundos`);
                })
            }else if(tempo === 'h/min'){
                rl.question('Qual o valor?', (valor) => {
                    let tempoS = valor * 60
                    console.log(`${valor} Horas para Minutos é ${tempoS} Minutos`);
                })
            }
        })
    }else{
        console.log('Opção inválida, por favor escolha uma opção válida.');
    }
})