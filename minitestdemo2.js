function in15ChiaHetchon(n) {
    let soChiaHetCho3 = 0;
    while (soChiaHetCho3 < 15) {
        if (n % 3 === 0) {
            console.log(n);
            soChiaHetCho3++;
        }
        n++;
    }
}
let soBatDau = prompt("Nhập số n:");
in15ChiaHetchon(parseInt(soBatDau, 10));