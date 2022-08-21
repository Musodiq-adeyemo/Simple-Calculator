let result = document.getElementById('result');

let calculate = (number) => {
    result.value +=number;
}

function clr() {
    result.value="";
}

function del() {
    result.value = result.value.slice(0,-1);
}
   // operator function
function operator() {
    try{
        result.value = eval(result.value);
    }
    catch(err){
        result.value = "math error";
    }

};

