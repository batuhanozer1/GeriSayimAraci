let saniyegosterge = document.getElementById('sayac');
let sayacinput = document.getElementById('sayac_input');
let baslabuton = document.getElementById('baslat');
let sifirlabuton = document.getElementById('sifirla');

let durdur;

function sayac(){
    let saniye = Number(sayacinput.value);
    saniyegosterge.innerText= saniye;
    

   durdur= setInterval( () =>{
        if(saniye>0){
            saniye--;
            saniyegosterge.innerText= saniye;
    
        }
        else{
            console.log('değer gir');
            clearInterval(durdur);
            
           
        }
    }, 1000);
    

}

function sifirla(){
    saniyegosterge.innerText= 0;
    clearInterval(durdur);
    sayacinput.value="";
}

baslabuton.addEventListener('click', sayac);
sifirlabuton.addEventListener('click', sifirla);
