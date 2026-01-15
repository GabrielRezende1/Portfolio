window.onload = () => {
    const cExp = Math.floor($('#conteudoExperiencia').position().top);
    const cEdu = Math.floor($('#conteudoEducacao').position().top);

    function changeColors(anchor) {
        $('#menu ul a').each(function () {
            $(this).css('color', 'rgb(83, 115, 127)');
        });
        $(`#menu ul ${anchor}`).css('color', 'azure');
    }

    //mouse-scroll
    $('#content').on('scroll', function() {
        const cSobre = Math.abs(Math.floor($('#conteudoSobre').position().top));
        if(cSobre < (cExp - 200)) {
            changeColors('#btnSobre');
        }else if(cSobre < (cEdu - 200)) {
            changeColors('#btnExperiencia'); 
        }else {
            changeColors('#btnEducacao');
        }
    });
}