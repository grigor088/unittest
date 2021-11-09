class Calculator{
    add(a,b){
       if(typeof(a) == "number" && typeof(b) == "number"){
           return +a + +b
       }
       return false
    }

    div(a,b){
        if(isNaN(a) || isNaN(b) || b === 0){
            return false
        }
        return +a / +b

    }

    multiply(a,b){
        if(isNaN(a) || isNaN(b)){
            return false
        }
        return +a * +b;
    }
    static func(){
        console.log("static")
    }
}

module.exports = {
    Calculator
}