$(document).ready(function(){
    alert('ready')
});

$(window).on('load', function () {
    alert('window loaded')
});





$('#li-element').text('nowyTekst');

var choinka=$('#choinka');

for (var i=0;i<25;i++){
    $('#choinka').append("*")
}

for (var i=0;i<15;i++) {
    var x = i;
    var text = "*";
    var clas;

    if (i%2==0){
        clas='red';
    } else{
        clas='green';
    }

    while (x>0){
        text += "***"
        x--;
    }
    choinka.append('<p class="text-center '+clas+'">'+text+'</p>')
}

