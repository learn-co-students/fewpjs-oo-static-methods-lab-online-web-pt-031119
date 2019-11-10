class Formatter {

  static capitalize(string){
    string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-']+/g, '');
  }

  static titleize(string){
    if(!string.split) return string;
    let _titleizeWord = function(word) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        },
        result = [];
    string.split(" ").forEach(function(w) {
        result.push(_titleizeWord(w));
    });
    return result.join(" ");

  }
}