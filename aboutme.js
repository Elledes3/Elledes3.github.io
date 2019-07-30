alert("Welcome to my JavaScript page!");

function makeImageBig(x){
    x.style.width = "600px"
}

function makeImageOriginalSize(x){
    x.style.width= "535px"
}

function showHideSection(section){
    var showHideSection = document.getElementById(section);
    if (showHideSection.style.display == "none"){
        showHideSection.style.display = "block";
        document.getElementById("brags").innerHTML = "HIDE ME";
    }else{
        showHideSection.style.display = "none";
        document.getElementById("brags"). innerHTML= "SHOW ME";
    }
}
