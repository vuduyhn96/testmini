function nhapSoNguyenDuong() {
    let x;
    while (true) {
        x = parseInt(prompt("Nhập một số dương:"));
        if (!isNaN(x) && x > 0) {
            break;
        }
    }
    return x;
}
function tinhGiaiThua(n) {
    if (n ===0 || n === 1) {
        return 1;
    } else {
        return n * tinhGiaiThua(n - 1);
    }
}
let nguyenDuong = nhapSoNguyenDuong();
let ketQua = tinhGiaiThua(nguyenDuong);
console.log(`Giai thừa của ${nguyenDuong} là: ${ketQua}`);