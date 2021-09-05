let textInfo;
let myName = document.querySelector("#myName")
let myTime = document.querySelector("#myClock")
let isim

do {
    isim = prompt("Adınızı yazınız")
} while (isim == "");

function tarih() {
    const d = new Date();
    const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let gun = days[d.getDay()];
    let saat = d.getHours();
    let dakika = d.getMinutes();
    let saniye = d.getSeconds();
    
    return `${saat}:${dakika}:${saniye} ${gun}`    
}


myName.innerHTML = `${isim}`
myTime.innerHTML = tarih()