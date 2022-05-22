let promedio, nt1, nt2, nt3: number;

let nombre = prompt("Ingrese el nombre del Alumno");
console.log("Alumno :" + nombre);

while (nombre !== "") {
  nt1 = Number(prompt("ingrese calificacion de la PRACTICA"));
  nt2 = Number(prompt("ingrese calificacion del PROBLEMA"));
  nt3 = Number(prompt("ingrese calificacion del TEORICO"));
  console.log(
    "Calificacion Practica:" + nt1,
    "Calificacion Problema:" + nt2,
    "Calificacion Teorico :" + nt3
  );

  if (nt1 > -1 && nt2 > -1 && nt3 > -1 && nt1 <= 10 && nt2 <= 10 && nt3 <= 10) {
    promedio = console.log(
      "Promedio de",
      nombre,
      "es",
      nt1 * 0.1 + nt2 * 0.5 + nt3 * 0.4
    );
  } else {
    console.log("ERROR, INGRESO UN VALOR ERRONEO");
  }
  nombre = prompt("Ingrese el nombre del Alumno;");
  if (nombre !== "") {
    console.log("Alumno :" + nombre);
  }
}
