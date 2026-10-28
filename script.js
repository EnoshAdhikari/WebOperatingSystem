function openWindow(id)
{
    document.getElementById(id).style.display = "block";
}
function closeWindow(id)
{
    document.getElementById(id).style.display = "none";
}
function toggleStartMenu()
{
    const menu = document.getElementById("startMenu");

    if(menu.style.display === "block")
    {
        menu.style.display = "none";
    }
    else
    {
        menu.style.display = "block";
    }
}

function updateClock()
{
    document.getElementById("clock").textContent = new Date().toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();
function setWallpaper(color)
{
    document.body.style.background = color;
}
let activeWindow = null;
document.querySelectorAll(".title-bar").forEach(titleBar => {
    titleBar.addEventListener("mousedown", startDrag);
});
function startDrag(event)
{
    activeWindow = event.target.parentElement;
    let shiftX = event.clientX - activeWindow.offsetLeft;
    let shiftY = event.clientY - activeWindow.offsetTop;
    function moveAt(e)
    {
        activeWindow.style.left = e.clientX - shiftX + "px";
        activeWindow.style.top = e.clientY - shiftY + "px";
    }
    document.addEventListener("mousemove", moveAt);
    document.addEventListener("mouseup", function stopDrag()
{
    document.removeEventListener("mousemove", moveAt);
    document.removeEventListener("mouseup", stopDrag);
});
}
const notesArea = document.getElementById("notesArea");
notesArea.value = localStorage.getItem("notes") || "";
notesArea.addEventListener("input", function()
{
    localStorage.setItem("notes", notesArea.value);
});

function calculate()
{
    try
    {
        let result = eval(document.getElementById("calculatorDisplay").value);
        document.getElementById("calculatorDisplay").value = result;
    }
    catch
    {
        alert("Invalid calculation");
    }
}