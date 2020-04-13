
window.addEventListener('load', election, false);
function election(){

    const sushi = document.getElementById("sushi");
    const ki = document.getElementById("ki");
    const sa = document.getElementById("sa");
    const sushiCtx = sushi.getContext('2d');
    const kiCtx = ki.getContext('2d');
    const saCtx = sa.getContext('2d');
    const sushiImg = new Image();
    const kiImg = new Image();
    const saImg = new Image();
    sushiImg.src = './img/sushi1.jpg';
    kiImg.src = './img/sushi2.jpg';
    saImg.src = './img/sushi3.jpg';

    sushiImg.onload = function(){
        sushiCtx.drawImage(sushiImg, 0, 0, 200, 200);
    }
    kiImg.onload = function () {
        kiCtx.drawImage(kiImg, 0, 0, 200, 200);        
    }
    saImg.onload = function () {
        saCtx.drawImage(saImg, 0, 0, 200, 200);
    }

    sushi.addEventListener('mouseenter', ()=>{
        sushiCtx.clearRect(0, 0, 200, 200);
        sushiCtx.globalAlpha = 0.3;
        sushiCtx.drawImage(sushiImg, 0, 0, 200, 200);
        sushiCtx.globalAlpha = 1;
        sushiCtx.font = "bold 20px 'MSゴシック'";
        sushiCtx.fillText("寿司", 20, 50);
        sushiCtx.font = "20px 'MSゴシック'";
        sushiCtx.fillText("江戸時代に縁起", 25, 80);
        sushiCtx.fillText("担ぎで作られた", 25, 110);
        sushiCtx.fillText("当て字", 25, 140);
    }, false);
    ki.addEventListener('mouseenter', ()=>{
        kiCtx.clearRect(0, 0, 200, 200);
        kiCtx.globalAlpha = 0.3;
        kiCtx.drawImage(kiImg, 0, 0, 200, 200);
        kiCtx.globalAlpha = 1;
        kiCtx.font = "bold 20px 'MSゴシック'";
        kiCtx.fillText("鮨", 20, 50);
        kiCtx.font = "20px 'MSゴシック'";
        kiCtx.fillText("もとは魚の塩辛", 25, 80);
        kiCtx.fillText("や膾（なます）", 25, 110);
        kiCtx.fillText("を指していた", 25, 140);
    }, false);
    sa.addEventListener('mouseenter', ()=>{
        saCtx.clearRect(0, 0, 200, 200);
        saCtx.globalAlpha = 0.3;
        saCtx.drawImage(saImg, 0, 0, 200, 200);
        saCtx.globalAlpha = 1;
        saCtx.font = "bold 20px 'MSゴシック'";
        saCtx.fillText("鮓", 20, 50);
        saCtx.font = "20px 'MSゴシック'";
        saCtx.fillText("塩と麹や糟など", 25, 80);
        saCtx.fillText("で漬け込んだ魚", 25, 110);
        saCtx.fillText("（なれずし）", 25, 140);
    }, false);

    sushi.addEventListener('mouseleave', ()=>{
        sushiCtx.clearRect(0, 0, 200, 200);
        sushiCtx.globalAlpha = 1;
        sushiCtx.drawImage(sushiImg, 0, 0, 200, 200);
    }, false);
    ki.addEventListener('mouseleave', ()=>{
        kiCtx.clearRect(0, 0, 200, 200);
        kiCtx.globalAlpha = 1;
        kiCtx.drawImage(kiImg, 0, 0, 200, 200);
    }, false);
    sa.addEventListener('mouseleave', ()=>{
        saCtx.clearRect(0, 0, 200, 200);
        saCtx.globalAlpha = 1;
        saCtx.drawImage(saImg, 0, 0, 200, 200);
    }, false);

    sushi.addEventListener('click', ()=>{
        if(window.confirm('寿司を選びますか？')){
            document.write('寿司を選びました！<br>５秒後にもとのページに戻ります。')
            setTimeout("location.reload()",3000);
        };
    }, false);
    ki.addEventListener('click', ()=>{
        if(window.confirm('鮨を選びますか？')){
            document.write('鮨を選びました！<br>５秒後にもとのページに戻ります。')
            setTimeout("location.reload()",3000);
        };
    }, false);
    sa.addEventListener('click', ()=>{
        if(window.confirm('鮓を選びますか？')){
            document.write('鮓を選びました！<br>５秒後にもとのページに戻ります。')
            setTimeout("location.reload()",3000);
        };
    }, false);
}

