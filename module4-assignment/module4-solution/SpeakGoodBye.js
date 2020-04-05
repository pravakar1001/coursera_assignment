(function(window){
    var bySpeaker = {};
    var speakWord = "Good Bye";
    bySpeaker.speak = function (name){
        console.log(speakWord+" "+name);
    }

    window.bySpeaker = bySpeaker;
})(window);
