/** Problème 1 */

isValidHtml = (html = new String, isValid = true) => {
    html.startsWith("<") & html.endsWith("/>") ? isValid : isValid = false
    return isValid
}
/**cas de test */
let test1 = isValidHtml("<>hello world<p/>")
let test2 = isValidHtml("<>hello world<p/")
console.log(test1) // true
console.log(test2) // false

/**probleme 2 */

