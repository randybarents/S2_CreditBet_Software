﻿function coinFlip() {
    function flip() {
        return Math.floor((Math.random() * 2) + 1)
    }
    var result = flip();
    if (result === 1) {
        document.getElementById("coin").src = "D:\Git\Personal\S2_CreditBet_Software\CreditBet_S2_Software\CreditBet_S2_Software\wwwroot\Images\Heads.png";
        winner = `HEADS`;
        head_win = heads_wins.push(result);
        document.getElementById("head_win").innerText = head_win;
    } else if (result === 2) {
        document.getElementById("coin").src = "D:\Git\Personal\S2_CreditBet_Software\CreditBet_S2_Software\CreditBet_S2_Software\wwwroot\Images\Tails.png";
        winner = `TAILS`;
        tail_win = `${tails_wins.push(result)}`;
        document.getElementById("tail_win").innerText = tail_win;
    }
    document.getElementById("winner").innerText = winner;
}