// const kullanici= {
//     name: prompt("Adınızıdı girin: "),
//     old: prompt("yaşınızı girin"),
//     job: prompt("mesleğinizi girin"),


// }

// console.log(kullanici)
 

/// array

const sepetim = [];

function urunEkle(){
    const urun = prompt("istediğiniz ürünü girin");
    const fiyat = prompt("ürün fiyyati girin");

    sepetim.push({
        name: urun,
        para: fiyat
    });
    
    console.log(`${urun} sepettedir. ${fiyat} tl tutumuştur`);

    const  devamsorusu = prompt("Sepete ürün eklemek iser misiniz? (evet veya hayır yazın.)");

    if(devamsorusu ==="evet"){
        urunEkle();
    }
    else{
        sepetiGoster();
        silme();
    }

}

function silme() {
    const silinecekIndex = Number(prompt("silmek istediğiniz ürünün kodunu belirtin")) - 1;
    
    sepetim.splice(silinecekIndex, 1);
    console.log("ürün silindi");
}

function sepetiGoster() {
    console.log("Sepetinizdeki Ürünler:");
    
    sepetim.forEach((urun, i) => {
        console.log(`${i+1}. ${urun.name}: ${urun.para} TL`);
    });
    const toplam = sepetim.reduce((acc, urun) => acc + Number(urun.para), 0);
    console.log(`Toplam Tutar: ${toplam} TL`);
}

urunEkle();
sepetiGoster();
