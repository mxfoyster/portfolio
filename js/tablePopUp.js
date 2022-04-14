//set up our handles
const table1Links = document.getElementsByClassName("td1Popup");
const table2Links = document.getElementsByClassName("td2Popup");
const popUpBox = document.getElementById("popUpBox");
const closePopUp = document.getElementById("closePopUp");

//vreate our array for the json data 
let dataArray = Array();

//add all our event listeners
closePopUp.addEventListener("click", function(){popUpBox.style.visibility="hidden";})

for(let counter in table1Links)
{
    let thisT1Link = table1Links[counter]; 
    if (thisT1Link.innerHTML != null)
    thisT1Link.addEventListener("click", function(){CreatePopup(1,(+counter + 1));});   //note +counter to force it to take counter as INT
}                                                                                       //as opposed to a string

for(let counter in table2Links)
{
    let thisT2Link = table2Links[counter]; 
    if (thisT2Link.innerHTML != null)
    thisT2Link.addEventListener("click", function(){CreatePopup(2,(+counter + 1));});
}

//now load the data from our json file
fetch('data/tableData.json')
  .then(response => response.json())
  .then(data => {dataArray = [...data]; console.log(dataArray.length)});

//function to call and populate our popup
function CreatePopup(tableNumber, thisPopup)
{
    document.getElementById("popUpImg").innerHTML="";// reset image
    TogglePopupBox();
    for (let counter in dataArray)
    {    
        let thisDataObject = dataArray[counter];
        if (thisDataObject.table == tableNumber && thisDataObject.row == thisPopup)
        {
            document.getElementById("popUpTitle").innerHTML= thisDataObject.title;
            document.getElementById("popUpText").innerHTML= thisDataObject.text;
            if (thisDataObject.img != "")
                document.getElementById("popUpImg").innerHTML="<img src=\"" + thisDataObject.img + "\">";
        }
    }
}

//we'll keep this a toggle so the user can also dismiss popup by clicking again on table field
function TogglePopupBox()
{
    if (popUpBox.style.visibility != "visible")
    {    
        popUpBox.style.visibility = "visible";
        return;
    }
        popUpBox.style.visibility = "hidden";
}