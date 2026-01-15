window.onload = () => {
    const cSobre = Math.floor($('#conteudoSobre').offset().top);
    const cExp = Math.floor($('#conteudoExperiencia').offset().top);
    const cEdu = Math.floor($('#conteudoEducacao').offset().top);
    
    //scroll-mouse
    $('#content').on('scroll', function() {
        if($('#conteudoSobre').offset().top > ((cExp * -1) + (cExp / 3))) {
            $('#menu ul a').each(function () {
                $(this).css('color', 'rgb(83, 115, 127)');
            });
            $('#menu ul #btnSobre').css('color', 'azure');
        }else if(($('#conteudoSobre').offset().top + (cExp / 3)) > ((cEdu * -1) + (cEdu / 3))) {
            $('#menu ul a').each(function () {
                $(this).css('color', 'rgb(83, 115, 127)');
            });
            $('#menu ul #btnExperiencia').css('color', 'azure'); 
        }else {
            $('#menu ul a').each(function () {
                $(this).css('color', 'rgb(83, 115, 127)');
            });
            $('#menu ul #btnEducacao').css('color', 'azure'); 
        }
    });
}