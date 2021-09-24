function a() {
    var n1 = document.querySelector("#n1").value;
    var n2 = document.querySelector("#n2").value;
    var rslt = document.querySelector("#result");

    return rslt.innerHTML = ((+n1 + +n2));
}

function b() {
    var n1 = document.querySelector("#n1").value;
    var n2 = document.querySelector("#n2").value;
    var rslt = document.querySelector("#result");

    return rslt.innerHTML = ((n1 - n2));
}

function c() {
    var n1 = document.querySelector("#n1").value;
    var n2 = document.querySelector("#n2").value;
    var rslt = document.querySelector("#result");

    return rslt.innerHTML = ((n1 / n2));
}

function d() {
    var n1 = document.querySelector("#n1").value;
    var n2 = document.querySelector("#n2").value;
    var rslt = document.querySelector("#result");

    return rslt.innerHTML = ((n1 * n2));
}