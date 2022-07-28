//#region Principal
let años, meses, dias, horas, minutos, segundos, milisegundos, tiempo;

window.onload = () => {
    años = document.querySelector("#años");
    meses = document.querySelector("#meses");
    dias = document.querySelector("#dias");
    horas = document.querySelector("#horas");
    minutos = document.querySelector("#minutos");
    segundos = document.querySelector("#segundos");
    milisegundos = document.querySelector("#milisegundos");
    tiempo = document.querySelector(".tiempo");

    setInterval(() => { actualizar(new Date()) }, 1);
}
//#endregion

//#region Actualización
function actualizar(fecha) {
    let datos = {
        año: fecha.getFullYear(),
        mes: fecha.getMonth(),
        diaSemana: fecha.getDay(),
        dia: fecha.getDate(),
        hora: fecha.getHours(),
        min: fecha.getMinutes(),
        seg: fecha.getSeconds(),
        mls: fecha.getMilliseconds()
    }

    actualizarTamaños(datos);

    document.querySelector(".hora").innerHTML = `${ajustarCifras(datos.hora)}:${ajustarCifras(datos.min)}:${ajustarCifras(datos.seg)}`;
    document.querySelector(".milis").innerHTML = `.${ajustarMilis(datos.mls)}`;
    document.querySelector(".tramo").innerHTML = `${obtenerTramo(datos.hora)}`;
    document.querySelector(".fecha").innerHTML = `${obtenerDia(datos.diaSemana)}, ${datos.dia} de ${obtenerMes(datos.mes)} de ${datos.año}`;
}

function actualizarTamaños(datos) {
    tamaño(años, datos.año-1999, 365/100);
    tamaño(meses, datos.mes, 365/12);
    tamaño(dias, datos.dia, 365/diasDelMes(datos.mes, datos.año));
    tamaño(horas, datos.hora, 365/24);
    tamaño(minutos, datos.min, 365/60);
    tamaño(segundos, datos.seg, 365/60);
    tamaño(milisegundos, datos.mls, 365/1000);
}
function tamaño(elemento, porcentaje, degradado) {
    let angulo = porcentaje * degradado;
    elemento.style.background = `conic-gradient(
        #008000 ${angulo}deg,
        #90ee90 ${angulo}deg
    )`;
}

function diasDelMes(mes, año) { return new Date(año, mes+1, 0).getDate(); }
function ajustarMilis(milis) { return milis == 1000 ? 000 : (milis >= 100 ? milis : (milis >= 10 ? "0"+milis : "00"+milis)) }
function ajustarCifras(cifra) { return cifra < 10 ? "0"+cifra : cifra; }
//#endregion

//#region Funciones Estéticas
function obtenerTramo(hora) {
    if(hora < 7) return "Madrugada";
    if(hora >= 7 && hora < 13) return "Mañana";
    if(hora >= 13 && hora < 20) return "Tarde";
    if(hora >= 20) return "Noche";
}

function obtenerDia(dia) {
    switch (dia) {
        case 1: return "Lunes";
        case 2: return "Martes";
        case 3: return "Miércoles";
        case 4: return "Jueves";
        case 5: return "Viernes";
        case 6: return "Sábado";
        case 7: return "Domingo";
        default: return null;
    }
}

function obtenerMes(mes) {
    switch (mes) {
        case 0: return "enero";
        case 1: return "febrero";
        case 2: return "marzo";
        case 3: return "abril";
        case 4: return "mayo";
        case 5: return "junio";
        case 6: return "julio";
        case 7: return "agosto";
        case 8: return "septiembre";
        case 9: return "octubre";
        case 10: return "noviembre";
        case 11: return "diciembre";
        default: return null;
    }
}
//#endregion