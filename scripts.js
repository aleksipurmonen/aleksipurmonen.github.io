const nimi = document.getElementById("nimi");
let colors = [0,0,0,0,0,0];setInterval(() => {
nimi.style.color = color();
}, 10);
function color(){
      var hex = '48ADF';
        var color = '#';
        for (var i = 0; i < 3; i++) {
            colors[i] += Math.round(Math.random() * (1 - (-1)) + -1);
            if(colors[i] > hex.length){
                colors[i] = hex.length;
            }
            if(colors[i] < 0){
                colors[i] = 0;
            }
            color += hex[colors[i]];
        }
        return color;
}
    