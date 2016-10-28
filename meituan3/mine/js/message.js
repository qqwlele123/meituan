app.controller('messageCtrl', function ($css) {
    // 添加css文件到页面中
    $css.removeAll();
    $css.add('./mine/css/message.css');

    if ($('#message')) {
       $('nav').hide()
    }
});
