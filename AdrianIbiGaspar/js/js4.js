function divisores(numero) {
    let total = 0;
    for(let i=1; i <=numero; i ++) {
        if(numero % i == 0) {
            total ++;
        }
    }
    return total;
}
/* console.log("Total divisores", divisores(32)); */
const divisoresV2 = function (numero) {
    let total = 0;
    for(let i=1; i <=numero; i ++) {
        if(numero % i == 0) {
            total ++;
        }
    }
    return total;
};

const divisoresV3 = numero =>{
    let total = 0;
    
    for(let i=1; i < numero; i ++){
        if(numero % 1 == 0){
            total++;
        }
    }
    return total;
}
console.log("Total de  divisores", divisores(32));
console.log("Total de  divisores", divisoresV2(32));
console.log("Total de  divisores", divisoresV3(32));

function actimagenes(){
    let numero_imagen = document.getElementById("imagen").value;
    let imgrest = document.querySelector(".img")

    if (numero_imagen == "1"){
        imgrest.innerHTML = '<img src="https://bolavip.com/__export/1648041556452/sites/bolavip/img/2022/03/23/gignac_crop1648041448721.jpg_1159711837.jpg" alt="300" height= 300>'
    }
    else if (numero_imagen == "2"){
        imgrest.innerHTML = '<img src="https://phantom-marca.unidadeditorial.es/d8f7bf5e8b3b6e308fc40a08e59cf2ba/resize/1320/f/jpg/assets/multimedia/imagenes/2022/04/22/16505790454267.jpg" alt="300" height= 300>'
    }
    else if (numero_imagen == "3"){
        imgrest.innerHTML = '<img src="https://pbs.twimg.com/media/EwC4h5sXAAUrFTY.jpg" alt="300" heigth= 300>'
    }
    else if(numero_imagen == "4"){
        imgrest.innerHTML = '<img src="https://media.cdnp.elobservador.com.uy/112021/1636292009266/stuani.jpg" alt="300" height= 300>'
    }
    else if(numero_imagen == "5"){
        imgrest.innerHTML = '<img src="https://nuevoleon.travel/wp-content/uploads/2018/11/ESTADIO-UANL-1.jpg" alt="estadio universitario">'
}
}