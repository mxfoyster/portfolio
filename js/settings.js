//our script to handle the settings box
const settingsImg = document.getElementById("settingsImg");
const settingsBox = document.getElementById("settingsBox");
const normalModeBtn = document.getElementById("normalMode");
const darkModeBtn = document.getElementById("darkMode");
const codeBKG = document.getElementById("codeBKG");
const waterBKG = document.getElementById("waterBKG");
const plainBKG = document.getElementById("plainBKG");

//listeners
settingsImg.addEventListener("click", ToggleSettingsBox);
normalModeBtn.addEventListener("click", ChangeDisplayMode);
darkModeBtn.addEventListener("click", ChangeDisplayMode);
codeBKG.addEventListener("click", ChangeBKGMode);
waterBKG.addEventListener("click", ChangeBKGMode);
plainBKG.addEventListener("click", ChangeBKGMode);

function ToggleSettingsBox()
{
    
    let sbVis = settingsBox.style.visibility;
    if (settingsBox.style.visibility != "visible")
    {    
        settingsBox.style.visibility = "visible";
        return;
    }
        settingsBox.style.visibility = "hidden";
}

function ChangeDisplayMode()
{
    if (!normalModeBtn.checked)
        {
            DarkMode();
            return;
        }
        LightMode();
}

function ChangeBKGMode()
{
    if (codeBKG.checked) document.body.style.background = "url('images/bkg.png')"; 
    if (waterBKG.checked) document.body.style.background = "url('images/water.jpg')"; 
    if (plainBKG.checked) document.body.style.background = "darkgray"; 
}


function DarkMode()
{
    document.getElementById("displayMode").setAttribute("href","css/dark.css");
}

function LightMode()
{
    document.getElementById("displayMode").setAttribute("href","css/normal.css");
}