window.onload = () => {
    const cSobre = Math.floor($('#conteudoSobre').offset().top);
    const cExp = Math.floor($('#conteudoExperiencia').offset().top);
    const cEdu = Math.floor($('#conteudoEducacao').offset().top);
    

    $('#menu ul a').each(function () {
        let btnID = $(this).attr('id');

        $(this).click(function (e) {
            e.preventDefault();
            //scroll-click
            if (btnID == 'btnSobre') {
                $('#content').stop().animate({
                    scrollTop: $('#conteudoSobre').offset().top - $('#wrapper').offset().top
                }, 600);
            }else if (btnID == 'btnExperiencia') {
                $('#content').stop().animate({
                    scrollTop: $('#conteudoExperiencia').offset().top - $('#wrapper').offset().top
                }, 600);
            }else if (btnID == 'btnEducacao')  {
                $('#content').stop().animate({
                    scrollTop: $('#conteudoEducacao').offset().top - $('#wrapper').offset().top
                }, 600);
            }
        });
    });
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