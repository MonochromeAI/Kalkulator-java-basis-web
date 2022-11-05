function sec(nomre) {
    reqem = document.getElementById("iphoneTotal").innerHTML;
    reqem = reqem + nomre;
    document.getElementById("iphoneTotal").innerHTML = reqem;

}

function menfi() {
    reqem = document.getElementById("iphoneTotal").innerHTML;
    reqem = "-" + reqem;
    document.getElementById("iphoneTotal").innerHTML = reqem;
}

function mod() {
    reqem = document.getElementById("iphoneTotal").innerHTML;
    reqem = reqem * 1 / 100;
    document.getElementById("iphoneTotal").innerHTML = reqem;
}

function noqte() {
    reqem = document.getElementById("iphoneTotal").innerHTML
    reqem = reqem + "."
    document.getElementById("iphoneTotal").innerHTML = reqem;
}

function resetIphone() {
    reset = document.getElementById("iphoneTotal").innerHTML
    reset = "";
    document.getElementById("iphoneTotal").innerHTML = reset;
}

function azaltReqemi() {
    reqem = document.getElementById("iphoneTotal").innerHTML
    document.getElementById("iphoneTotal").innerHTML = reqem.substring(0, reqem.length - 1);


} function times() {
    reqem = document.getElementById("iphoneTotal").innerHTML
    reqem = reqem + "*"
    document.getElementById("iphoneTotal").innerHTML = reqem;
}

function div() {
    reqem = document.getElementById("iphoneTotal").innerHTML
    reqem = reqem + "/"
    document.getElementById("iphoneTotal").innerHTML = reqem;
}
function minus() {
    reqem = document.getElementById("iphoneTotal").innerHTML
    reqem = reqem + "-"
    document.getElementById("iphoneTotal").innerHTML = reqem;

}
function plus() {
    reqem = document.getElementById("iphoneTotal").innerHTML
    reqem = reqem + "+"
    document.getElementById("iphoneTotal").innerHTML = reqem;

}



function yoxlama() {
    if (isNaN(eval(neticemiz)) !== false) {
        alert("Səhflik var")
    }
}

function equal() {
    neticemiz = document.getElementById("iphoneTotal").innerHTML
    yoxlama();
    document.getElementById("iphoneTotal").innerHTML = eval(neticemiz)

}