class Formatter {
  static capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  static sanitize(text) {
   let match = text.match(/[\w\s-']+/g)
  
   return match ? match.join('') : ""
  }

  static titleize(text) {
    const keepLowerCase = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const splitText = text.split(' ')
    const temp = [this.capitalize(splitText[0]), ...splitText.slice(1)]
    return temp.map(word => {
      return keepLowerCase.includes(word) ? word : this.capitalize(word)
    }).join(' ')
  }
}