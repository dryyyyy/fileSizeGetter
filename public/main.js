$(document).ready(function(){
    $('.btn').on('click', function(){
        console.log('test');
        $.post('/test');
    });
});