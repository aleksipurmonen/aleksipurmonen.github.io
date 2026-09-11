// return
const nimi = document.getElementById("nimi");
let colors = [0,0,0,0,0,0];setInterval(() => {
nimi.style.color = color();
nimi.style.textShadow = `${Math.random() * 20 - 10}px 0 ${Math.random() * 20}px`;
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
    