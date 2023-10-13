let nomeUsuario = "Lucas Silva"
let nivelDeExperiencia = 2001
let patente = ""

if (nivelDeExperiencia <= 1000){
    patente += "Ferro"
    console.log("O herói de nome " + nomeUsuario + " está no nível de " + patente)
}
 else if (nivelDeExperiencia <= 2000){
    patente += "Bronze"
    console.log("O herói de nome " + nomeUsuario + " está no nível de " + patente)
}
 else if (nivelDeExperiencia <= 5000){
    patente += "Prata"
    console.log("O herói de nome " + nomeUsuario + " está no nível de " + patente)
}
else if (nivelDeExperiencia <= 7000){
    patente += "Ouro"
    console.log("O herói de nome " + nomeUsuario + " está no nível de " + patente)
}
else if (nivelDeExperiencia <= 8000){
    patente += "Platina"
    console.log("O herói de nome " + nomeUsuario + " está no nível de " + patente)
}
else if (nivelDeExperiencia <= 9000){
    patente += "Ascendente"
    console.log("O herói de nome " + nomeUsuario + " está no nível de " + patente)
}
else if (nivelDeExperiencia <= 10000){
    patente += "Imortal"
    console.log("O herói de nome " + nomeUsuario + " está no nível de " + patente)
}
else if (nivelDeExperiencia > 10000){
    patente += "Radiante"
    console.log("O herói de nome " + nomeUsuario + " está no nível de " + patente)
}