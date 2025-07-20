// 64卦のデータ（バイナリ順、フリガナ付き）
/*const hexagrams = [
    { binary: "000000", name: "坤為地", reading: "こんいち", meaning: "受容、柔軟な包容力" },
    { binary: "000001", name: "地山謙", reading: "ちざんけん", meaning: "謙虚さ、へりくだる姿勢" },
    { binary: "000010", name: "地水師", reading: "ちすいし", meaning: "戦い、規律と計画" },
    { binary: "000011", name: "地沢臨", reading: "ちたくりん", meaning: "見通し、祝福と先見性" },
    { binary: "000100", name: "地雷復", reading: "ちらいふく", meaning: "復帰、再生と希望" },
    { binary: "000101", name: "地風升", reading: "ちふうしょう", meaning: "成長、向上心と発展" },
    { binary: "000110", name: "地火明夷", reading: "ちかめいい", meaning: "挫折、困難の中の光明" },
    { binary: "000111", name: "地天泰", reading: "ちてんたい", meaning: "安定、調和と平和" },
    { binary: "001000", name: "山地剥", reading: "さんちはく", meaning: "崩壊、基盤の崩れ" },
    { binary: "001001", name: "艮為山", reading: "ごんいさん", meaning: "静止、止まるべき時" },
    { binary: "001010", name: "山水蒙", reading: "さんすいもう", meaning: "未熟な時、学びの重要性" },
    { binary: "001011", name: "山沢損", reading: "さんたくそん", meaning: "減少、控えめの重要性" },
    { binary: "001100", name: "山雷頤", reading: "さんらいい", meaning: "栄養、育成と慎重な姿勢" },
    { binary: "001101", name: "山風蠱", reading: "さんぷうこ", meaning: "崩壊からの修復" },
    { binary: "001110", name: "山火賁", reading: "さんかひ", meaning: "装飾、美と調和" },
    { binary: "001111", name: "山天大畜", reading: "さんてんたいちく", meaning: "蓄え、大きな準備" },
    { binary: "010000", name: "水地比", reading: "すいちひ", meaning: "団結、共感と協調" },
    { binary: "010001", name: "水山蹇", reading: "すいさんけん", meaning: "障害、慎重な行動" },
    { binary: "010010", name: "坎為水", reading: "かんいすい", meaning: "陥没、試練と挑戦" },
    { binary: "010011", name: "水沢節", reading: "すいたくせつ", meaning: "節度、制限の重要性" },
    { binary: "010100", name: "水雷屯", reading: "すいらいちゅん", meaning: "始まりの混乱、成長の試練" },
    { binary: "010101", name: "水風井", reading: "すいふうせい", meaning: "再充電、源からの力" },
    { binary: "010110", name: "水火既済", reading: "すいかきせい", meaning: "完成、達成と終了" },
    { binary: "010111", name: "水天需", reading: "すいてんじゅ", meaning: "待つべき時、準備と忍耐" },
    { binary: "011000", name: "沢地萃", reading: "たくちすい", meaning: "集合、喜びと連帯感" },
    { binary: "011001", name: "沢山咸", reading: "たくさんかん", meaning: "感応、共鳴と愛情" },
    { binary: "011010", name: "沢水困", reading: "たくすいこん", meaning: "困難、圧力の中の対応" },
    { binary: "011011", name: "兌為沢", reading: "だいたく", meaning: "喜び、悦びと柔軟性" },
    { binary: "011100", name: "沢雷随", reading: "たくらいずい", meaning: "従順、適応と追随" },
    { binary: "011101", name: "沢風大過", reading: "たくふうたいか", meaning: "大きな挑戦、極限の試練" },
    { binary: "011110", name: "沢火革", reading: "たくかかく", meaning: "変革、変化の時" },
    { binary: "011111", name: "沢天夬", reading: "たくてんかい", meaning: "決断、分離と分岐" },
    { binary: "100000", name: "雷地予", reading: "らいちよ", meaning: "喜び、予祝と準備" },
    { binary: "100001", name: "雷山小過", reading: "らいさんしょうか", meaning: "小さな誤り、慎重さ" },
    { binary: "100010", name: "雷水解", reading: "らいすいかい", meaning: "解放、困難の解決" },
    { binary: "100011", name: "雷沢帰妹", reading: "らいたくきまい", meaning: "婚姻、合意と再統合" },
    { binary: "100100", name: "震為雷", reading: "しんいらい", meaning: "活動、行動と前進" },
    { binary: "100101", name: "雷風恒", reading: "らいふうこう", meaning: "恒常性、安定と継続" },
    { binary: "100110", name: "雷火豊", reading: "らいかほう", meaning: "豊かさ、繁栄と充実" },
    { binary: "100111", name: "雷天大壮", reading: "らいてんたいそう", meaning: "大きな成長、力強い進展" },
    { binary: "101000", name: "風地観", reading: "ふうちかん", meaning: "観察、深い洞察力" },
    { binary: "101001", name: "風山漸", reading: "ふうざんぜん", meaning: "徐々の進展、段階的成長" },
    { binary: "101010", name: "風水渙", reading: "ふうすいかん", meaning: "拡散、広がりと分離" },
    { binary: "101011", name: "風沢中孚", reading: "ふうたくちゅうふ", meaning: "誠実、信頼と真実" },
    { binary: "101100", name: "風雷益", reading: "ふうらいやく", meaning: "成長、利益と充実" },
    { binary: "101101", name: "巽為風", reading: "そんいふう", meaning: "柔順、順応と協調" },
    { binary: "101110", name: "風火家人", reading: "ふうかかじん", meaning: "家族、秩序と安定" },
    { binary: "101111", name: "風天小畜", reading: "ふうてんしょうちく", meaning: "小さな蓄え、抑制と準備" },
    { binary: "110000", name: "火地晋", reading: "かちしん", meaning: "進歩、発展と明るい未来" },
    { binary: "110001", name: "火山旅", reading: "かさんりょ", meaning: "旅路、変化と挑戦" },
    { binary: "110010", name: "火水未済", reading: "かすいみせい", meaning: "未完成、さらなる努力" },
    { binary: "110011", name: "火沢睽", reading: "かたくけい", meaning: "対立、意見の不一致" },
    { binary: "110100", name: "火雷噬嗑", reading: "からいぜいこう", meaning: "噛み砕く、決断と解決" },
    { binary: "110101", name: "火風鼎", reading: "かふうてい", meaning: "革新、成功と変化" },
    { binary: "110110", name: "離為火", reading: "りいか", meaning: "明るさ、光明と知恵" },
    { binary: "110111", name: "火天大有", reading: "かてんたいゆう", meaning: "大きな富、成功と充実" },
    { binary: "111000", name: "天地否", reading: "てんちひ", meaning: "否定、不調と不和" },
    { binary: "111001", name: "天山遯", reading: "てんざんとん", meaning: "退却、時の変化" },
    { binary: "111010", name: "天水訟", reading: "てんすいしょう", meaning: "対立、正義を求める" },
    { binary: "111011", name: "天沢履", reading: "てんたくり", meaning: "慎重、謹慎と安全" },
    { binary: "111100", name: "天雷无妄", reading: "てんらいむぼう", meaning: "無邪気、自然体の重要性" },
    { binary: "111101", name: "天風姤", reading: "てんぷうこう", meaning: "偶然、出会いと新しい可能性" },
    { binary: "111110", name: "天火同人", reading: "てんかどうじん", meaning: "協力、友情と団結" },
    { binary: "111111", name: "乾為天", reading: "けんいてん", meaning: "創造、力強い発展" }
  ];
*/

const hexagrams = [
    { binary: "000000", name: "坤為地", reading: "こんいち", meaning: "<ruby>大地<rt>だいち</rt></ruby><ruby>言<rt>げん</rt></ruby><ruby>無<rt>な</rt></ruby>くして<ruby>厚<rt>あつ</rt></ruby>く，<br>
<ruby>萬物<rt>ばんぶつ</rt></ruby><ruby>靜中<rt>せいちゅう</rt></ruby>に<ruby>生<rt>しょう</rt></ruby>ず。<br>
<ruby>風雨<rt>ふうう</rt></ruby><ruby>來<rt>きた</rt></ruby>るも<ruby>何<rt>なに</rt></ruby>ぞ<ruby>懼<rt>おそ</rt></ruby>れん，<br>
<ruby>心<rt>こころ</rt></ruby><ruby>寧<rt>やす</rt></ruby>らかにして<ruby>四方<rt>しほう</rt></ruby>を<ruby>抱<rt>いだ</rt></ruby>く。" }
               
    
 ];          







    document.getElementById('startButton').addEventListener('click', () => {
    const coins = [];
    const displayCoins = document.getElementById('coins');
    const resultDisplay = document.getElementById('result');
    displayCoins.innerHTML = '';
    resultDisplay.innerHTML = '';

    const getRandomCoin = () => Math.random() < 0.5 ? '⚫' : '⚪';

    const showCoin = (index) => {
        if (index < 6) {
            const coin = getRandomCoin();
            coins.push(coin);
            displayCoins.innerHTML += coin;
            setTimeout(() => showCoin(index + 1), 500);
        } else {
            generateHexagram(coins);
        }
    };

    const generateHexagram = (coins) => {
        const binaryString = coins.map(coin => coin === '⚫' ? '0' : '1').join('');
        const hexagram = hexagrams.find(h => h.binary === binaryString);
        if (hexagram) {
            resultDisplay.innerHTML = `
                <div>本日の卦: ${hexagram.name}</div>
                <div>読み仮名: ${hexagram.reading}</div>
                <div>意味: ${hexagram.meaning}</div>
            `;
        } else {
            resultDisplay.innerHTML = '<div class="error">エラー。もう一度占ってください。</div>';
        }
    };

    showCoin(0);
});