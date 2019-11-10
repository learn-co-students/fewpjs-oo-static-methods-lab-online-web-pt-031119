class Formatter {

  static capitalize(string){
   return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string){
    // if(!string.split) return string;
    let array = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let _titleizeWord = function(word) {
          if(!array.includes(word)){
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }else{
      return word
    }},
        result = [];
    string.split(" ").forEach(function(w, index) {
        if(index == 0){
          result.push(this.capitalize(w))
        } else{
        result.push(_titleizeWord(w));
        }
    }, this);
    return result.join(" ");

  }
}