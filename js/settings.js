//our script to handle the settings box
const settingsImg = document.getElementById("settingsImg");
const settingsBox = document.getElementById("settingsBox");
const normalModeBtn = document.getElementById("normalMode");
const darkModeBtn = document.getElementById("darkMode");
//listeners
settingsImg.addEventListener("click", ToggleSettingsBox);
normalModeBtn.addEventListener("click", ChangeDisplayMode);
darkModeBtn.addEventListener("click", ChangeDisplayMode);

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

function DarkMode()
{
    document.getElementById("displayMode").setAttribute("href","css/dark.css");
}

function LightMode()
{
    document.getElementById("displayMode").setAttribute("href","css/normal.css");
}