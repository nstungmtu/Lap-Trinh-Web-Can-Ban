//sự kiện nút bấm testbtn
document.getElementById("xhrTestBtn").onclick = function(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("xhrTestTxt").value = xhr.responseText;
        }
    };
    xhr.open("GET", "10_testTXT.txt", true);
    xhr.send();
}
