$(document).ready( () => {
    genConsList();
    genStoreList();
});

function genConsList() {
    let consObj = [
        {
            'img': '/imgs/elm/1.png',
            'alt': 'Foremost',
            'tt': 'ขยับร่างกายระหว่างวัน',
            'dt': 'ลุกหรือเดินทุก 2 ชม. เพื่อให้ระบบไหลเวียนเลือด ทำงานได้ดี'
        },
        {
            'img': '/imgs/elm/2.png',
            'alt': 'Foremost',
            'tt': 'ฟังเพลงสบายๆ',
            'dt': 'หันมาฟังเพลงคลาสสิค หรือเสียงธรรมชาติ ช่วยให้ผ่อนคลายมากขึ้น'
        },
        {
            'img': '/imgs/elm/3.png',
            'alt': 'Foremost',
            'tt': 'พักสายตาเป็นระยะ',
            'dt': 'เลี่ยงจากหน้าจอคอมฯ หยุดพักสายตาครั้งละ 15 นาที ทุก 2 ชม.'
        },
        {
            'img': '/imgs/elm/4.png',
            'alt': 'Foremost',
            'tt': 'เติมพลังความสดชื่น ด้วยความหอมของกาแฟ',
            'dt': 'ดื่มด่ำความหอมและรสชาติกาแฟ พร้อมประโยชน์ของนม ให้ความสดชื่น แล'
        },
    ];
    let _html = '';

    $.each(consObj, (i,v) => {
        _html += '<div class="box">';
            _html += '<div class="wrap-img">';
                _html += '<img src="'+v.img+'" alt="'+v.alt+'">';
            _html += '</div>';
            _html += '<div class="wrap-ct-list">';
                _html += '<div class="txt-l-hd">'+v.tt+'</div>';
                _html += '<div class="txt-l-dt">'+v.dt+'</div>';
            _html += '</div>';
        _html += '</div>';
    });

    $('.sec-info-sub').find('.wrap-info').html(_html);

    
}

function genStoreList() {
    let storeObj = [
        {
            'img': '/imgs/store_platform/1.png',
            'alt': 'lazada'
        },
        {
            'img': '/imgs/store_platform/2.png',
            'alt': 'shoppee'
        },
        {
            'img': '/imgs/store_platform/3.png',
            'alt': 'jd central'
        },
        {
            'img': '/imgs/store_platform/4.png',
            'alt': 'big c'
        },
        {
            'img': '/imgs/store_platform/5.png',
            'alt': 'makro'
        },
        {
            'img': '/imgs/store_platform/6.png',
            'alt': 'tesco lotus'
        },
        {
            'img': '/imgs/store_platform/7.png',
            'alt': 'tops'
        },
    ];
    let _html = '';

    $.each(storeObj, (i,v) => {
        _html += '<a href="#" class="store-list">';
            _html += '<img src="'+v.img+'" alt="'+v.alt+'"></img>';
        _html += '</a>';
    });

    $('.sec-shop').find('.wrap-store').html(_html);
}