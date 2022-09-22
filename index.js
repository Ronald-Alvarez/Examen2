function calcular(){
    var pes = (document.convertidor.pesos.value)*1;
    var tot= pes / 6.96;
    tot = tot.toFixed(2);
    document.convertidor.dolar.value = tot;

}