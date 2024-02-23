'use strict';

const avatarProgress = document.querySelector("#avatarProgress");
const avatarDisplay = document.querySelector("#avatarDisplay");
const avatarInput = document.querySelector("#avatar");
const fileHost = "http://127.0.0.1:8080/";//Địa chỉ máy chủ upload tập tin
const avatarXHR = new XMLHttpRequest();


let aa = undefined;
const stateSelect = document.querySelector("#state");
const stateDataList = document.querySelector("#stateDataList");
const districtDataList = document.querySelector("#districtDataList");
const aaXHR = new XMLHttpRequest();


//Phần 1: Đoạn mã  phục vụ tải ảnh lên máy chủ.
avatarInput.addEventListener("input",uploadAvatar);
function uploadAvatar(){
    if(avatarInput.files[0] == undefined) return;
    avatarXHR.open("POST", fileHost+"upload");
    const formData = new FormData();
    formData.append("uploads", avatarInput.files[0]);
    avatarXHR.send(formData);
}
avatarXHR.addEventListener("load",function(evt){
    /*Câu 1: Viết đoạn mã JS kiểm tra nếu trường hợp tập tin được tải lên thành công thì thay đổi thuộc tính src của avatarDisplay để hiển thị hình ảnh vừa tải lên*/
});
avatarXHR.upload.addEventListener("loadstart",function(){
    avatarProgress.style.setProperty("--percentage", "0%");
});
avatarXHR.upload.addEventListener("progress",function(evt){
    /*Câu 2: Viết đoạn mã hiển thị tiến trình tải lên của tập tin*/
});


//Phần 2: Đoạn mã phục vụ tải danh mục địa bàn hành chính
window.addEventListener("load",getAA);
function getAA(){
    /*Câu 3: Viết đoạn mã mở kết nối aaXHR tải tập tin dvhcvn.json chứa dữ liệu địa bàn hành chính*/
    aaXHR.open("GET", "dvhcvn.json");
    aaXHR.responseType = "json";
    aaXHR.send();
}
aaXHR.addEventListener("load", function(evt){
    if(aaXHR.status == 200){
        aa = aaXHR.response;
        for(let i in aa.data){
            let option = new Option(aa.data[i].name, aa.data[i].name);
            stateDataList.appendChild(option);
        }
    }
});
stateSelect.addEventListener("change",function(evt){
    districtDataList.innerHTML = "";
    const districts = aa.data.filter(function(value){
        return value.name == evt.target.value;
    });
    for(let i of districts[0].level2s){
        /*Câu 4: Viết đoạn mã tạo các Option từ dữ liệu level2s hiện tại và đưa vào districtDataList*/
    }
});