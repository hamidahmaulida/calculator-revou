// Luas Segitiga
function luasTriangle(){
    //menginputkan nilai pada rumus
    const alas = parseFloat(document.getElementById('alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);

    const Luas = 0.5 * alas * tinggi;

    const result = `L = ${Luas}`;
    document.getElementById("luas-segitiga").textContent = result;
    return false;
}
 


function kelilingTriangle(){
    const S1 = parseFloat(document.getElementById('S1').value);
    const S2 = parseFloat(document.getElementById('S2').value);
    const S3 = parseFloat(document.getElementById('S3').value);

    Keliling = S1 + S2 + S3;
    const result = `K = ${Keliling}`;
    document.getElementById("keliling-segitiga").textContent = result;
    return false;
}

function luasJajargenjang(){
    const a = parseFloat(document.getElementById('a').value);
    const t = parseFloat(document.getElementById('t').value);

    Luas = a * t;
    const result = `L = ${Luas}`;
    document.getElementById("luas-jajargenjang").textContent = result;
    return false;
}

function kelilingJajargenjang(){
    const AB = parseFloat(document.getElementById('AB').value);
    const BC = parseFloat(document.getElementById('BC').value);

    Luas = 2 * (AB + BC);
    const result = `L = ${Luas}`;
    document.getElementById("keliling-jajargenjang").textContent = result;
    return false;
}
