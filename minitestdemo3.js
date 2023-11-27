function laySoDuongTuMang(mang) {
    let mangDuong = [];
    for (let i = 0; i < mang.length; i++) {
        if (mang[i] > 0) {
            mangDuong.push(mang[i]);
        }
    }
    return mangDuong;
}
let mangSo = [-2, 5, 0, -8, 10, -3, 7];
let mangDuong = laySoDuongTuMang(mangSo);
console.log("Mảng số dương:", mangDuong);