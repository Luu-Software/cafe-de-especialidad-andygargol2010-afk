import { preguntar } from './lib/consola.ts';

let totalTexto: string = preguntar('Total de la cuenta: ');
let esEstudiante: string = preguntar('¿Son estudiantes de ORT? si/no: ');
let personasTexto: string = preguntar('Dividir la cuenta entre: ');

let totalPorPersona: number = 0;

if (esEstudiante.toLowerCase() !== 'no' && esEstudiante.toLowerCase() !== 'si') {
    console.log('Respuesta no válida.');
}
else {
    if (esEstudiante.toLowerCase() === 'si') {
        totalTexto = (parseFloat(totalTexto) * 0.9).toString();
    }

    totalPorPersona = parseFloat(totalTexto) / parseInt(personasTexto);
    console.log(`Total por persona: $${totalPorPersona}`);
}   