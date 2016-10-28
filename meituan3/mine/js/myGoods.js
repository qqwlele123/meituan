app.controller("myGoodsCtrl", function ($css) {

    $css.removeAll();
    $css.add('/mine/css/myGoods.css')
    if ($('#myGoods')) {
       $('nav').hide()
    }
});
