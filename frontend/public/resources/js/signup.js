// import { stat } from "fs";

$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

const urlStudent="http://localhost:3000/students/signup"
$("#signup").click(function(){
    const data = $('.validate-input .input100');
    const role = $('')
    console.log(JSON.stringify(data.serializeObject()));
    $.ajax({
        url: urlStudent,
        type:"post",
        // data: data.serializeObject(),
        data: {
            "email": "a1@gmail",
            "password": "1"
        },
        xhrFields: {
            withCredentials: false
        },
        // dataType: 'json',
        // contentType: 'application/json',
        success: function(result){
            console.log("Hay!");
            console.log(result);
        },
        error:function(error){
            console.log("Deo hay!");
            console.log(error);
        }
    })
})

// $('#signup').click(function(){
//     const data1 = $('.validate-input .input100').serializeObject();
//     console.log(data1)

//     $.post(urlStudent, data1, function(data, status){
//         console.log(`${data} and status is ${status}`)
//     });
// })