(function(){
    var names = ["alok","bishal","rajveer", "pravakar","suman","Nitya","jeevan","jyoti","juhi","umala","jasmin","lalit"];
    for(var i=0;i<names.length;i++){
        var firstLetter = names[i].charAt(0).toLowerCase();
        if(firstLetter === 'j'){
            bySpeaker.speak(names[i]);
        }
        else{
            helloSpeaker.speak(names[i]);
        }
    }
})();
