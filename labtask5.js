function showImage() {
    document.getElementById("myImage").style.display = "block";
    document.getElementById("showBtn").style.display = "none";
    document.getElementById("hideBtn").style.display = "inline";
}

function hideImage() {
    document.getElementById("myImage").style.display = "none";
    document.getElementById("hideBtn").style.display = "none";
    document.getElementById("showBtn").style.display = "inline";
}
