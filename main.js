/** Problème 1 */
const isValidHtml = (html = new String, isValid = true) => {
    
    html.startsWith("<") & html.endsWith("/>") ? isValid : isValid = false
    return isValid
}

/**cas de test */
let test1 = isValidHtml("<p>hello world<p/>")
let test2 = isValidHtml("<p>hello world<p>")
console.log(test1) // true
console.log(test2) // false


/**=========================================================================================== */
/**probleme 2 */
const nonConsecutiveDigits = (... N) =>
{
    let prec,cur

    for(cur of N){
        if (prec > cur) {
            prec = cur            
            nonConsecutiveDigits(cur+1)
        }
    }
    return prec
}

/** cas de test */
let test3 = nonConsecutiveDigits(1765)
console.log(test3)



/**=========================================================================================== */
/**probleme 3 */
const pairProgramming = (experience = new Array, mostExeperienced = true)=>{

}