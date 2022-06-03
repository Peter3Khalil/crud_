let toggle = document.getElementById("toggle");
let mode = "on";
function turnOnOff(){
    if(mode=="on"){
        toggle.innerHTML="toggle_off";
        toggle.style.color="white";
        mode = "off";
        }
    else{
        toggle.innerHTML="toggle_on"
        toggle.style.color="green";
        mode="on";
    }
}
