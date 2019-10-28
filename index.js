class Formatter {
  //add static methods here

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^\w\s-']+/g, '')
  }

  static titleize(string) {
  //   if (string === "a" || "the" || "an" || "but" || "of"
  //       || "and" || "for" || "at" || "by" || "from") {
  //     return string
  //   }
  // }\\
    let stringArray = string.split(' ');
    let sentence = [];
    let exceptions = ["a", "the", "but", "of", "and", "for", "at", "by", "from", "an"]

    // for (let i = 0; i < stringArray.length; i++) {
    //     if (stringArray[i]) {
    //       return stringArray[i].charAt(0).toUpperCase() + string.slice(1)
    //     }
    // }
      for (let i = 0; i < stringArray.length; i++) {

        if (i === 0) {
        sentence.push(this.capitalize(stringArray[i]))
      } else if (exceptions.includes(stringArray[i])) {
        sentence.push(stringArray[i])
      } else {
          sentence.push(this.capitalize(stringArray[i]))
        }
      }
    return sentence.join(' ')
  }
}
