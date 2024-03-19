// HTMLの読み込みが完了したとき
$(window).on('load', () => {
     console.log('loadイベントが発生しました');
});

$(function (){
    // 画面がスクロールされたとき
    $(window).on('scroll', () => {
        console.log('scrollイベントが発生しました');
    });
});
