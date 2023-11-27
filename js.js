//change page
document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("btnChangeAuto").addEventListener("click", function() {
        location.href="./auto.html";
    })

});

document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("btnChangeNon").addEventListener("click", function() {
        location.href="./sheet.html";
    })

});

function calFunction() {
    const cm = parseFloat(document.getElementById("cal").value);
    const x = cm * (25/64);
    const inch = x.toFixed(2)


    document.getElementById("calResult").innerHTML = cm + " cm is " + inch + " inches";
    
};

//data saving



function myFunction() {

    var nameBox = document.getElementById("nameBox");
    var nameValue = nameBox.value;
    //document.getElementById("output").innerHTML = nameValue;

    var heightBox = document.getElementById("value1");
    var heightValue = heightBox.value; 

    var weightBox = document.getElementById("value2");
    var weightValue = weightBox.value;

    var shoulderBox = document.getElementById("value3");
    var shoulderValue = shoulderBox.value; 

    var chestBox = document.getElementById("value4");
    var chestValue = chestBox.value;

    var waistLineBox = document.getElementById("value5");
    var waistLineValue = waistLineBox.value; 

    var hipCircumferenceBox = document.getElementById("value6");
    var hipValue = hipCircumferenceBox.value;

    var legLenghtBox = document.getElementById("value7");
    var legValue = legLenghtBox.value;
    
    var gendersBox = document.getElementById("genderSelect");
    var selectGenders = gendersBox.value;   

    var userData = {

        gender: selectGenders,
        name : nameValue,
        height : heightValue,
        weight : weightValue,
        shoulder : shoulderValue,
        chest :chestValue,
        waistLine : waistLineValue,
        hip : hipValue,
        leg : legValue,

    }

    
    
    localStorage.setItem("userData", JSON.stringify(userData));
    

    //console.log(userData);

    if (selectGenders === "Male") {

        document.getElementById("resultText").innerHTML = "As the data you given";

        var chestValue = document.getElementById("value5");
        var chestNum = chestValue.value;

        if (chestNum < 34){
            document.getElementById("clothText").innerHTML = "XS size for your clothes";
        } else if (chestNum >= 34 && chestNum < 36) {
            document.getElementById("clothText").innerHTML = "S size for your clothes";
        } else if (chestNum >= 36 && chestNum < 38) {
            document.getElementById("clothText").innerHTML = "M size for your clothes";
        } else if(chestNum >= 38 && chestNum < 40) {
            document.getElementById("clothText").innerHTML = "L size for your clothes";
        } else if (chestNum >= 40 && chestNum < 42) {
            document.getElementById("clothText").innerHTML = "XL size for your clothes";
        } else if (chestNum >= 42 && chestNum < 44) {
            document.getElementById("clothText").innerHTML = "2XL size for your clothes";
        } else if (chestNum >= 44 && chestNum < 46) {
            document.getElementById("clothText").innerHTML = "3XL size for your clothes";
        } else if (chestNum >= 46 && chestNum < 50) {
            document.getElementById("clothText").innerHTML = "4XL size for your clothes";
        } else if (chestNum > 50) {
            document.getElementById("resultHead").innerHTML = "Clothes size convert error"
            document.getElementById("clothText").innerHTML = "There're no size can convert for more than 50inches";
        }

        var waistValue = document.getElementById("value7");
        var waisttNum = waistValue.value;

        if (waisttNum < 28){
            document.getElementById("pantsText").innerHTML = "XS size for your pants";
        } else if (waisttNum >=28  && waisttNum < 30) {
            document.getElementById("pantsText").innerHTML = "S size for your pants";
        } else if (waisttNum >= 30 && waisttNum < 32) {
            document.getElementById("pantsText").innerHTML = "M size for your pants";
        } else if(waisttNum >= 32 && waisttNum < 34) {
            document.getElementById("pantsText").innerHTML = "L size for your pants";
        } else if (waisttNum >= 34 && waisttNum < 36) {
            document.getElementById("pantsText").innerHTML = "XL size for your pants";
        } else if (waisttNum >= 36 && waisttNum < 38) {
            document.getElementById("pantsText").innerHTML = "2XL size for your pants";
        } else if (waisttNum >= 38 && waisttNum < 40) {
            document.getElementById("pantsText").innerHTML = "3XL size for your pants";
        } else if (waisttNum >= 40 && waisttNum < 44) {
            document.getElementById("pantsText").innerHTML = "4XL size for your pants";
        } else if (waisttNum > 44) {
            document.getElementById("pantsText").innerHTML = "There're no size can convert for more than 44inches";
        }

    } else if (selectGenders === "Female") {
        document.getElementById("resultText").innerHTML = "As the data you given";

        var chestValue = document.getElementById("value5");
        var chestNum = chestValue.value;

        if (chestNum < 32){
            document.getElementById("clothText").innerHTML = "XS size for your clothes";
        } else if (chestNum >= 32 && chestNum < 34) {
            document.getElementById("clothText").innerHTML = "S size for your clothes";
        } else if (chestNum >= 34 && chestNum < 36) {
            document.getElementById("clothText").innerHTML = "M size for your clothes";
        } else if(chestNum >= 36 && chestNum < 38) {
            document.getElementById("clothText").innerHTML = "L size for your clothes";
        } else if (chestNum >= 38 && chestNum < 40) {
            document.getElementById("clothText").innerHTML = "XL size for your clothes";
        } else if (chestNum >= 40 && chestNum < 42) {
            document.getElementById("clothText").innerHTML = "2XL size for your clothes";
        } else if (chestNum >= 42 && chestNum < 44) {
            document.getElementById("clothText").innerHTML = "3XL size for your clothes";
        } else if (chestNum >= 44 && chestNum < 48) {
            document.getElementById("clothText").innerHTML = "4XL size for your clothes";
        } else if (chestNum > 48) {
            document.getElementById("resultHead").innerHTML = "Clothes size convert error"
            document.getElementById("clothText").innerHTML = "There're no size can convert for more than 48inches";
        }
        
        var waistValue = document.getElementById("value7");
        var waisttNum = waistValue.value;

        if (waisttNum < 26){
            document.getElementById("pantsText").innerHTML = "XS size for your pants";
        } else if (waisttNum >= 26  && waisttNum < 28) {
            document.getElementById("pantsText").innerHTML = "S size for your pants";
        } else if (waisttNum >= 28 && waisttNum < 30) {
            document.getElementById("pantsText").innerHTML = "M size for your pants";
        } else if(waisttNum >= 30 && waisttNum < 32) {
            document.getElementById("pantsText").innerHTML = "L size for your pants";
        } else if (waisttNum >= 32 && waisttNum < 34) {
            document.getElementById("pantsText").innerHTML = "XL size for your pants";
        } else if (waisttNum >= 34 && waisttNum < 36) {
            document.getElementById("pantsText").innerHTML = "2XL size for your pants";
        } else if (waisttNum >= 36 && waisttNum < 38) {
            document.getElementById("pantsText").innerHTML = "3XL size for your pants";
        } else if (waisttNum >= 38 && waisttNum < 42) {
            document.getElementById("pantsText").innerHTML = "4XL size for your pants";
        } else if (waisttNum > 42) {
            document.getElementById("pantsText").innerHTML = "There're no size can convert for more than 42inches";
        }
    } else {
        document.getElementById("resultText").innerHTML = "Please select correct gender first";
    };

    


}

//for checking


document.getElementById("checkBtn").addEventListener("click", function(){
    checkFunction();
});

function checkFunction() {
         
        var userDataString = localStorage.getItem("userData")
        if (userDataString) {
            var userData = JSON.parse(userDataString);

            document.getElementById("nameBox").value = userData.name;
            document.getElementById("value1").value = userData.height;
            document.getElementById("value2").value = userData.weight;
            document.getElementById("value3").value = userData.shoulder;
            document.getElementById("value4").value = userData.chest;
            document.getElementById("value5").value = userData.waistLine;
            document.getElementById("value6").value = userData.hip;
            document.getElementById("value7").value = userData.leg;
            document.getElementById("genderSelect").value = userData.gender;

        
        
        
        

    };

    



    

};









