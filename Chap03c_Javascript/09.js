"use strict"
//Khai báo hàm async đầy đủ
async function func1s(cancel = false){
    return new Promise((resolve, reject) => {
        //Công việc tốn nhiều thời gian
        setTimeout(function(){
            //tham số hàm resolve và reject có thể nhận vào: số, chuỗi, object
            if(cancel) reject("1s rejected");
            resolve("1s resolved");
        }, 1000);
    });
}
//hàm then: trường hợp hàm async trả về kết quả resolve
//hàm catch: trường hợp hàm async trả về kết quả reject
//func1s(true).then(x => console.log(x)).catch(x => console.log(x));

async function func2s(cancel = false){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            if(cancel) reject("2s rejected");
            resolve("2s resolved");
        }, 2000);
    });
}


//sử dụng await để đợi hàm async trả về kết quả mới thực thi dòng kế tiếp
async function wait1(){
    console.log("Bắt đầu hàm.\t" + Date.now());
    const result1 = await func1s();
    console.log(result1 + "\t\t" + Date.now());//dòng này sẽ thực thi sau 1s
    const result2 = await func2s();
    console.log(result2 + "\t\t" + Date.now());//dòng này sẽ thực thi sau 3s
    console.log("Kết thúc hàm.\t" + Date.now());
}
//wait1();

async function wait2(){
    console.log("Bắt đầu hàm.\t" + Date.now());
    console.log(await func1s() + "\t\t" + Date.now());//dòng này sẽ thực thi sau 1s
    console.log(await func2s() + "\t\t" + Date.now());//dòng này sẽ thực thi sau 3s
    console.log("Kết thúc hàm.\t" + Date.now());
}
//wait2();

async function wait3(){
    console.log("Bắt đầu hàm.\t" + Date.now());
    //Thực thi đồng thời cả 2 hàm
    const results = await Promise.all([func1s(), func2s()]);
    //Dòng này sẽ thực thi sau 2s
    console.log(results[0] + "\t\t" + Date.now());
    console.log(results[1] + "\t\t" + Date.now());
    console.log("Kết thúc hàm.\t" + Date.now());
}
//wait3();

//then chaining
async function func3(res){
    return Promise.resolve(res + " Chained!");
}
async function func4(){
    return Promise.resolve(await func2s());
}
//1. Hàm func4 await kết quả của func2s
//2. Hàm func4 trả về 1 Promise có nội dung là kết quả của func2s
//3. Hàm then thứ nhất sẽ lấy kết quả của func4 truyền vào func3
//4. Hàm func3 trả về một Promise có nội dung là kết quả của hàm func4 + từ "Chained!"
//5. Hàm then thứ hai lấy kết quả của hàm func3 truyền vào hàm console.log
func4().then(func3).then(console.log);