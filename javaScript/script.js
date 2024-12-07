document.addEventListener("copy", (event)=>{
    const selectData = window.getSelection().toString();
    event.clipboardData.setData(
        "text/plain",
        "Bsdk mana kya tha na gand me kira ha kya"
    )
    event.preventDefault();
})