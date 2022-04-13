const h3Tags = document.getElementsByTagName("h3");
let h3TextArrayStart = Array(); //starting text inside each <h3> tag will go here
let h3TextArrayCurrent = Array(); //text to display stored here during animation
let h3TimerHandles = Array(); //our handle for each H3's timer event


for(let counter in h3Tags) //Iterate through every <h3>
{
   let thisTagHandle= h3Tags[counter]; //get handle for current tag 
   
   if (thisTagHandle.innerHTML != null) //we have some blanks show up so we'll strip them!
    {  
        //now we can put a "mouseover" event listener on each valid tag
        thisTagHandle.addEventListener("mouseover", function() 
        {
            //Only if there is no current timer set do we want another one
            if (h3TimerHandles[counter] == null) 
                h3TimerHandles[counter] = setInterval(function(){AnimateH3Text(thisTagHandle,counter);},150);
        });
        h3TextArrayStart.push(thisTagHandle.innerHTML);//while we're here, let's store the full value of each <h3> before we mess with it!
    
        thisTagHandle.addEventListener("mouseout", function() //listen to mouse out in order to stop and reset animation 
        {
            resetH3Text (thisTagHandle,counter);
        });
    }
}

//Called by the timer in "mouseover" to start animation
function AnimateH3Text(handle,j)
{
    let innerString = h3TextArrayStart[j]; 
    if (h3TextArrayCurrent[j]==null) h3TextArrayCurrent[j] = ""; //if empty (first iteration)
 
    let stringPart = h3TextArrayCurrent[j];
    if (innerString.length > stringPart.length) //if not animated to length yet 
        h3TextArrayCurrent[j] = innerString.slice(0,stringPart.length+1);
    
    if (innerString.length <= stringPart.length) //at length or over
        if (stringPart.charAt(stringPart.length - 1)!="_") h3TextArrayCurrent[j] += "_"; //fake cursor
        else h3TextArrayCurrent[j] = innerString;   
    handle.innerHTML= h3TextArrayCurrent[j]; //display animation at current state
}

//Stop timer and reset animation, called by "mouseout"
function resetH3Text (handle,j)
{
    handle.innerHTML = h3TextArrayStart[j]; //reset the text to start value before switching off
    clearInterval(h3TimerHandles[j]); //clear the timer
    h3TimerHandles[j]=null; //put this timer handle back to null
    h3TextArrayCurrent[j] = null; //and empty this index of current array so we can go agai
}

