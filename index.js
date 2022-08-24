function checkInput() {
    let filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/
    const allInputs = document.querySelectorAll("input")
    const allWarnSigns = document.querySelectorAll(".warnimg")
    const allWarnTexts = document.querySelectorAll(".warntext")
    
    for (let i = 0; i < allInputs.length; i++) {
        if(allInputs[i].value === "") {
                  [i].style.display = "block"
            allWarnTexts[i].style.display = "block"
            allInputs[i].style.marginBottom = "0.5rem"
        }
    }

    if(String(allInputs[2].value).search(filter) !== -1){
        allWarnSigns[2].style.display = "none"
        allWarnTexts[2].style.display = "none"
        allInputs[2].style.marginBottom = "1rem"
    } else {
        console.log(false)
        allWarnSigns[2].style.display = "block"
        allWarnTexts[2].style.display = "block"
    }

    for (let i = 0; i < allInputs.length; i++) {
        if(i !== 2 && allInputs[i].value !== "") {
            allWarnSigns[i].style.display = "none"
            allWarnTexts[i].style.display = "none"
            allInputs[i].style.marginBottom = "1rem"
        }
    }
}