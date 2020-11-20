let arr = new Array();
let player = 1;
function init() {
    let html = "";
    for (let i = 0; i < 10; i++) {
        arr[i] = [];
        html += "<tr>";
        for (let j = 0; j < 10; j++) {
            arr[i][j] = "*";
            html += '<td onclick="play(this)" id="' + i + '-' + j + '">' + '</td>';
        }
        html += "</tr>";
    }
    document.getElementById('game-board').innerHTML = html;
}
function play(e){
    // nhập giá trị từ bàn phín
    // let x = +prompt('Mời bạn nhập giá trị của x:');
    // let y = +prompt("Mời bạn nhập giá trị của y:");
    // lấy giá trị tọa độ từ giá trị cột hàng theo tọa i j
    // lấy giá trị i j theo địa chỉ id
    let posi = e.getAttribute('id');
    let array = posi.split("-");
    x = array[0];
    y = array[1];
    if(player==1){
        arr[x][y] = 'o';
       document.getElementById(x+'-'+y).innerHTML = 'o';
       player = 2;
    } else if(player==2) {
        arr[x][y] = "x";
        document.getElementById(x+'-'+y).innerHTML = 'x';
        player =1;
    }
}
init();
function checkWin(){

}