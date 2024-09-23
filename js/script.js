window.onload = () => {

    $('#menu ul a').each(function () {
        let btnID = $(this).attr('id');
        console.log(this);
        console.log($(this).attr('id'));

        console.log($('#conteudoSobre').offset().top);
        console.log($('#conteudoExperiencia').offset().top);
        console.log($('#conteudoEducacao').offset().top);
        $(this).click(function (e) {
            
            e.preventDefault();
            //scroll-click
            if (btnID == 'btnSobre') {
                console.log($('#conteudoSobre').offset().top);
                $('#content').stop().animate({
                    scrollTop: $('#conteudoSobre').offset().top - $('#wrapper').offset().top
                }, 600);
            }else if (btnID == 'btnExperiencia') {
                console.log($('#conteudoExperiencia').offset().top);
                $('#content').stop().animate({
                    scrollTop: $('#conteudoExperiencia').offset().top - $('#wrapper').offset().top
                }, 600);
            }else if (btnID == 'btnEducacao')  {
                console.log($('#conteudoEducacao').offset().top);
                $('#content').stop().animate({
                    scrollTop: $('#conteudoEducacao').offset().top - $('#wrapper').offset().top
                }, 600);
            }

            //reset last link clicked with color
            $('ul a').each(function() {
                $(this).css('color', 'rgb(83, 115, 127)');
            });
            $(this).css('color', 'azure'); 
        });
    });

}