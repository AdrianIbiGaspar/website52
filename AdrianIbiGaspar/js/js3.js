let hora_inicial = 14;
let frecuencia = 2;

let toma_inicial = 24 / frecuencia;


let horario = hora_inicial;

for (let i = 1;i <= toma_inicial; i++) {
    console.log(`Toma: ` + i + " a las " + (horario) + ":00 hrs|");
    horario = horario + frecuencia;
    if (horario >= 24) {
        horario = horario - 24;
    };
};