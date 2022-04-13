const table1Links = document.getElementsByClassName("td1Popup");
const table2Links = document.getElementsByClassName("td2Popup");
const popUpBox = document.getElementById("popUpBox");
const closePopUp = document.getElementById("closePopUp");

closePopUp.addEventListener("click", function(){popUpBox.style.visibility="hidden";})

for(let counter in table1Links)
{
    let thisT1Link = table1Links[counter]; 
    if (thisT1Link.innerHTML != null)
    thisT1Link.addEventListener("click", function(){CreatePopup(counter, 1);});
}

for(let counter in table2Links)
{
    let thisT2Link = table2Links[counter]; 
    if (thisT2Link.innerHTML != null)
    thisT2Link.addEventListener("click", function(){CreatePopup(counter, 2);});
}


function CreatePopup(thisPopup, tableNumber)
{
    TogglePopupBox();
    console.log("It's Working. Table " + tableNumber + " Link " + thisPopup);
}

function TogglePopupBox()
{
    //let sbVis = settingsBox.style.visibility;
    if (popUpBox.style.visibility != "visible")
    {    
        popUpBox.style.visibility = "visible";
        return;
    }
        popUpBox.style.visibility = "hidden";
}