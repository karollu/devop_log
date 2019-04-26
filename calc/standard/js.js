function cWh(pV, pmAh) {
    return Number(pV * pmAh / 1000).toFixed(2);
}

function cmAh(pV1, pV2, pmAh) {
    return Number(pV1 * pmAh / pV2).toFixed(2);
}
function ct(pA, pmAh) {
    var T = Number(pmAh / 1000 / pA).toFixed(2);
    return parseInt(T) + ":" + parseInt(60 * (T - parseInt(T)).toFixed(2)); 
}
function licz(a, b, c, d) {
    var RW = cWh(c, d);
    var OW = cWh(a, b);
    var RAH = cmAh(c, a, d);
    document.querySelectorAll("#OW")[0].textContent = OW + " Wh";
    document.querySelectorAll("#RW")[0].textContent = RW + " Wh";
    document.querySelectorAll("#RRW")[0].textContent = (RW - OW).toFixed(2) + " Wh";

    document.querySelectorAll("#OAH")[0].textContent = document.forms[0][1].value + " mAh";
    document.querySelectorAll("#RAH")[0].textContent = RAH + " mAh";
    document.querySelectorAll("#RRAH")[0].textContent = (RAH - document.forms[0][1].value).toFixed(2) +
        " mAh";
    
    document.querySelectorAll("#CT")[0].textContent = ct(1, document.forms[0][3].value) + " H"; 
}
var l = function (){
    licz(document.forms[0][0].value, document.forms[0][1].value, document.forms[0][2].value, document.forms[
        0][
        3
    ].value);
};
l();
document.querySelectorAll("input").forEach(
    function(el){
        el.addEventListener("input", l);
    }
);