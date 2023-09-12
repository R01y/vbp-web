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


//data saving

function myFunction() {

    var nameBox = document.getElementById("nameBox");
    var nameValue = nameBox.value;
    //document.getElementById("output").innerHTML = nameValue;

    var heightBox = document.getElementById("value1");
    var heightValue = heightBox.value; 

    var headBox = document.getElementById("value2");
    var headValue = headBox.value;

    var neckBox = document.getElementById("value3");
    var neckValue = neckBox.value; 

    var shoulderBox = document.getElementById("value4");
    var shoulderValue = shoulderBox.value;

    var chestBox = document.getElementById("value5");
    var chestValue = chestBox.value; 

    var waistLineBox = document.getElementById("value6");
    var waistLineValue = waistLineBox.value;

    var hipBox = document.getElementById("value7");
    var hipValue = hipBox.value; 

    var thighBox = document.getElementById("value8");
    var thighValue = thighBox.value;

    var calfBox = document.getElementById("value9");
    var calfValue = calfBox.value; 

    var feetBox1 = document.getElementById("value10");
    var feetLenghtValue = feetBox1.value;

    var feetBox2 = document.getElementById("value11");
    var feetThicknessValue = feetBox2.value; 

    
    var gendersBox = document.getElementById("genderSelect");
    var selectGenders = gendersBox.value;   

    var userData = {

        gender: selectGenders,
        name : nameValue,
        height : heightValue,
        head : headValue,
        neck : neckValue,
        shoulder : shoulderValue,
        chest :chestValue,
        waistLine : waistLineValue,
        hip : hipValue,
        thigh : thighValue,
        calf : calfValue,
        feetLenght : feetLenghtValue,
        feetThickness : feetThicknessValue,

    }

    
    
    localStorage.setItem("userData", JSON.stringify(userData));

    //console.log(userData);

    if (selectGenders === "Male") {

        document.getElementById("resultText").innerHTML = "As the data you given";

        var chestValue = document.getElementById("value5");
        var chestNum = chestValue.value;

        if (chestNum < 90){
            document.getElementById("clothText").innerHTML = "XS size for your clothes";
        } else if (chestNum >= 90 && chestNum < 92.5) {
            document.getElementById("clothText").innerHTML = "S size for your clothes";
        } else if (chestNum >= 92.5 && chestNum < 97.5) {
            document.getElementById("clothText").innerHTML = "M size for your clothes";
        } else if(chestNum >= 97.5 && chestNum < 102.5) {
            document.getElementById("clothText").innerHTML = "L size for your clothes";
        } else if (chestNum >= 102.5 && chestNum < 107.5) {
            document.getElementById("clothText").innerHTML = "XL size for your clothes";
        } else if (chestNum >= 107.5 && chestNum < 112.5) {
            document.getElementById("clothText").innerHTML = "2XL size for your clothes";
        } else if (chestNum >= 112.5 && chestNum < 117.5) {
            document.getElementById("clothText").innerHTML = "3XL size for your clothes";
        } else if (chestNum >= 117.5 && chestNum < 122.5) {
            document.getElementById("clothText").innerHTML = "4XL size for your clothes";
        } else if (chestNum > 125) {
            document.getElementById("resultHead").innerHTML = "Clothes size convert error"
            document.getElementById("clothText").innerHTML = "There're no size can convert for more than 125cm";
        }

        var waistValue = document.getElementById("value7");
        var waisttNum = waistValue.value;

        if (waisttNum < 77){
            document.getElementById("pantsText").innerHTML = "XS size for your pants";
        } else if (waisttNum >=77  && waisttNum < 82.5) {
            document.getElementById("pantsText").innerHTML = "S size for your pants";
        } else if (waisttNum >= 82.5 && waisttNum < 87.5) {
            document.getElementById("pantsText").innerHTML = "M size for your pants";
        } else if(waisttNum >= 87.5 && waisttNum < 92.5) {
            document.getElementById("pantsText").innerHTML = "L size for your pants";
        } else if (waisttNum >= 92.5 && waisttNum < 97.5) {
            document.getElementById("pantsText").innerHTML = "XL size for your pants";
        } else if (waisttNum >= 97.5 && waisttNum < 102.5) {
            document.getElementById("pantsText").innerHTML = "2XL size for your pants";
        } else if (waisttNum >= 102.5 && waisttNum < 107.5) {
            document.getElementById("pantsText").innerHTML = "3XL size for your pants";
        } else if (waisttNum >= 107.5 && waisttNum < 112.5) {
            document.getElementById("pantsText").innerHTML = "4XL size for your pants";
        } else if (waisttNum > 130) {
            document.getElementById("pantsText").innerHTML = "There're no size can convert for more than 130cm";
        }

    } else if (selectGenders === "Female") {
        document.getElementById("resultText").innerHTML = "As the data you given";

        var chestValue = document.getElementById("value5");
        var chestNum = chestValue.value;

        if (chestNum < 79){
            document.getElementById("clothText").innerHTML = "XS size for your clothes";
        } else if (chestNum >= 79 && chestNum < 87.5) {
            document.getElementById("clothText").innerHTML = "S size for your clothes";
        } else if (chestNum >= 87.5 && chestNum < 94.5) {
            document.getElementById("clothText").innerHTML = "M size for your clothes";
        } else if(chestNum >= 94.5 && chestNum < 98.5) {
            document.getElementById("clothText").innerHTML = "L size for your clothes";
        } else if (chestNum >= 98.5 && chestNum < 104.5) {
            document.getElementById("clothText").innerHTML = "XL size for your clothes";
        } else if (chestNum >= 104.5 && chestNum < 108.5) {
            document.getElementById("clothText").innerHTML = "2XL size for your clothes";
        } else if (chestNum >= 108.5 && chestNum < 114.5) {
            document.getElementById("clothText").innerHTML = "3XL size for your clothes";
        } else if (chestNum >= 114.5 && chestNum < 118.5) {
            document.getElementById("clothText").innerHTML = "4XL size for your clothes";
        } else if (chestNum > 125) {
            document.getElementById("resultHead").innerHTML = "Clothes size convert error"
            document.getElementById("clothText").innerHTML = "There're no size can convert for more than 125cm";
        }

        var waistValue = document.getElementById("value7");
        var waisttNum = waistValue.value;

        if (waisttNum < 63){
            document.getElementById("pantsText").innerHTML = "XS size for your pants";
        } else if (waisttNum >=63  && waisttNum < 69.5) {
            document.getElementById("pantsText").innerHTML = "S size for your pants";
        } else if (waisttNum >= 69.5 && waisttNum < 73.5) {
            document.getElementById("pantsText").innerHTML = "M size for your pants";
        } else if(waisttNum >= 73.5 && waisttNum < 79.5) {
            document.getElementById("pantsText").innerHTML = "L size for your pants";
        } else if (waisttNum >= 79.5 && waisttNum < 83.5) {
            document.getElementById("pantsText").innerHTML = "XL size for your pants";
        } else if (waisttNum >= 83.5 && waisttNum < 89.5) {
            document.getElementById("pantsText").innerHTML = "2XL size for your pants";
        } else if (waisttNum >= 89.5 && waisttNum < 93.5) {
            document.getElementById("pantsText").innerHTML = "3XL size for your pants";
        } else if (waisttNum >= 93.5 && waisttNum < 99.5) {
            document.getElementById("pantsText").innerHTML = "4XL size for your pants";
        } else if (waisttNum > 115) {
            document.getElementById("pantsText").innerHTML = "There're no size can convert for more than 115cm";
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
            document.getElementById("value2").value = userData.head;
            document.getElementById("value3").value = userData.neck;
            document.getElementById("value4").value = userData.shoulder;
            document.getElementById("value5").value = userData.chest;
            document.getElementById("value6").value = userData.waistLine;
            document.getElementById("value7").value = userData.hip;
            document.getElementById("value8").value = userData.thigh;
            document.getElementById("value9").value = userData.calf;
            document.getElementById("value10").value = userData.feetLenght;
            document.getElementById("value11").value = userData.feetThickness;
            document.getElementById("genderSelect").value = userData.gender;

        
        
        
        

    };

    



    

};









