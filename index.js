class Formatter {

    static capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1) 
    }

    static sanitize(str) {
      return str.replace(/[^A-Za-z0-9-' ]+/g, '')
    }

    static titleize(str) {
      let exceptWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
      let resultArray = []
      let strArray = str.split(' ')
      for (let i = 0; i < strArray.length; i++) {
        if (i === 0) {
          resultArray.push(this.capitalize(strArray[i])) 
        } else {
          if (exceptWords.includes(strArray[i])) { 
            resultArray.push(strArray[i])
          } else {
            resultArray.push(this.capitalize(strArray[i]))
          }
        }      
      }
      return resultArray.join(' ')
    }
    
}