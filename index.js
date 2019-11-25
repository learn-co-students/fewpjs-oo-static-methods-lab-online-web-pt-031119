class Formatter {
  static capitalize(string) {
  	return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
  	return string.replace(/[^A-Za-z0-9-'" "]+/g, '')
  }

  static titleize(string) {
  	let split_string = string.split(" ")
  	let titleize_array = []
  	split_string.forEach(function(word) {
  		if (word != "a" && word != "an" && word != "the" && word != "but" && word != "of" && word != "and" && word != "for" && word != "at" && word != "by" && word != "from") {
  			titleize_array.push(Formatter.capitalize(word))
  		} else {
  			titleize_array.push(word)
  		}
  	})
  	let titleize_string = titleize_array.join(" ")
  	return Formatter.capitalize(titleize_string)
  }

}