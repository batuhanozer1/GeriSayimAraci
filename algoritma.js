function kural(n) {
    let basla = 1;

    while (n !== 1) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }
        basla++;
    }

    return basla;
}

function bul(sayi) {
    let maxdeger = 0;
    let maxtekrar = 0;

    for (let i = 1; i < sayi; i++) {
        let elemansayi = kural(i);

        if (elemansayi > maxtekrar) {
            maxtekrar = elemansayi;
            maxdeger = i;
        }
    }

    return maxdeger;
}

console.log(bul(1000000));