$$(function () {

    function makeCode() {
        $$('#qrcode').html('');
        var qrcode = new QRCode(document.getElementById("qrcode"), {
            width: 300,
            height: 300,
            colorDark: $$('#colorDark').val(),//前景色
            colorLight: $$('#colorLight').val(),//背景色
            correctLevel: QRCode.CorrectLevel.H//容错级别
        });
        var elText = $$('#url');

        if (!elText.val()) {
            alert("请输入需要生成二维码的地址！");
            elText.focus();
            return;
        }

        qrcode.makeCode(elText.val());
    }

    makeCode();

    $$('#create').bind('click', function () {
        makeCode();
    });

    $$('#download').bind('click', function () {
        var a = $$('<a download="' + $$('#qrcode').attr('title') + '.png"></a>');
        a.attr('href', $$('#qrcode>img').attr('src'));
        a[0].click();
    });

});