window.onload = () => {
    const cSobre = Math.floor($('#conteudoSobre').position().top);
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
        let varCSobre = Math.floor($('#conteudoSobre').position().top);
        if(!(cSobre == 0)) {
            varCSobre -= cSobre * 2;
        }
        console.log(varCSobre);
        if(Math.abs(varCSobre) < (cExp - 200)) {
            changeColors('#btnSobre');
        }else if(Math.abs(varCSobre) < (cEdu - 400)) {
            changeColors('#btnExperiencia'); 
        }else {
            changeColors('#btnEducacao');
        }
    });
}