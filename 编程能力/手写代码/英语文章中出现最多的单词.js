function counts(article) {
    article = String(article).trim().toUpperCase();
    var array = article.match(/[A-z]/g);
    article = " " + array.join(" ")+"";
    var max = 0,word,num = 0,maxword = "";
    for (var i = 0; i < array.length;i++){
        word = new RegExp("" + array[i] + "",g);
        num = article.match(word).length;
        if(num > maxword){
            max = num;
            maxword = array[i];
        }
    }
    return maxword + " " + max;  
}