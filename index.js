class Formatter {
  //add static methods here
  static capitalize(word){
    return(word.charAt(0).toUpperCase()+word.slice(1));
  };

  static sanitize(input){
    return(input.replace(/[^A-Za-z0-9- ']+/g, ''));
  };

  static titleize(title){
    let wordsArray = [];
    let titleArray = title.split(" ");
    wordsArray.push(titleArray[0].charAt(0).toUpperCase()+titleArray[0].slice(1));
    for(var i=1; i<titleArray.length; i++){
      if(titleArray[i]==="a" || titleArray[i]==="the" || titleArray[i]==="an" || titleArray[i]==="but" || titleArray[i]==="of" || titleArray[i]==="and" || titleArray[i]==="for" || titleArray[i]==="at" || titleArray[i]==="by" || titleArray[i]==="from"){
        wordsArray.push(titleArray[i]);
      }else{
        wordsArray.push(titleArray[i].charAt(0).toUpperCase()+titleArray[i].slice(1));
      };
    };
    return(wordsArray.join(" "));
  };
}