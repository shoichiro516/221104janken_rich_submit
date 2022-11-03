function janken(user){
    let pcJankens = ['gucom.jpeg', 'chokicom.jpeg', 'pacom.jpeg'];
    let userJankens = ['gu.jpeg', 'choki.jpeg', 'pa.jpeg'];
    let pc = Math.floor(Math.random() * 3);
    let userImg = document.getElementById("userImg");
    userImg.src = "image/" +userJankens[user];
    let pcImg = document.getElementById("pcImg");
    pcImg.src = "image/" +pcJankens[pc];
    let result = [['あいこ', '勝ち', '負け'],
                 ['負け', 'あいこ', '勝ち'],
                 ['勝ち', '負け', 'あいこ']];
    document.getElementById("result").textContent = result[user][pc];    
}
