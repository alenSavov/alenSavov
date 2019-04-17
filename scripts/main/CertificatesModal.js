(function f() {
    let pbModal = document.getElementById('pbModal');
    let stModal = document.getElementById('stModal');
    let dbModal = document.getElementById('dbModal');
    let dbAModal = document.getElementById('dbAModal');
    let cwModal = document.getElementById('cwModal');
    let jsAppModal = document.getElementById('jsAppModal');
    let soonModal = document.getElementById('soonModal');

    let pbImg = document.getElementById('pbImg');
    let stImg = document.getElementById('stImg');
    let dbImg = document.getElementById('dbImg');
    let dbAImg = document.getElementById('dbAImg');
    let cwImg = document.getElementById('cwImg');
    let jsAppImg = document.getElementById('jsAppImg');
    let soonImg = document.getElementById('soonImg');

    let pbModalImg = document.getElementById("pbImgF");
    let stModalImg = document.getElementById("stImgF");
    let dbModalImg = document.getElementById("dbImgF");
    let dbAModalImg = document.getElementById("dbAImgF");
    let cwModalImg = document.getElementById("cwImgF");
    let jsAppModalImg = document.getElementById("jsAppImgF");
    let soonModalImg = document.getElementById("soonImgF");

    let pbCaptionText = document.getElementById("pbCaption");
    let stCaptionText = document.getElementById("stCaption");
    let dbCaptionText = document.getElementById("dbCaption");
    let dbACaptionText = document.getElementById("dbACaption");
    let cwCaptionText = document.getElementById("cwCaption");
    let jsAppCaptionText = document.getElementById("jsAppCaption");
    let soonCaptionText = document.getElementById("soonCaption");

    pbImg.onclick = function () {
        pbModal.style.display = "block";
        pbModalImg.src = this.src;
        pbCaptionText.innerHTML = this.alt;
    };

    stImg.onclick = function () {
        stModal.style.display = "block";
        stModalImg.src = this.src;
        stCaptionText.innerText = this.alt;
    };

    dbImg.onclick = function () {
        dbModal.style.display = "block";
        dbModalImg.src = this.src;
        dbCaptionText.innerHTML = this.alt;
    };

    dbAImg.onclick = function () {
        dbAModal.style.display = "block";
        dbAModalImg.src = this.src;
        dbACaptionText.innerHTML = this.alt;
    };

    cwImg.onclick = function () {
        cwModal.style.display = "block";
        cwModalImg.src = this.src;
        cwCaptionText.innerHTML = this.alt;
    };

    jsAppImg.onclick = function () {
        jsAppModal.style.display = "block";
        jsAppModalImg.src = this.src;
        jsAppCaptionText.innerHTML = this.alt;
    };

    soonImg.onclick = function () {
        soonModal.style.display = "block";
        soonModalImg.src = this.src;
        soonCaptionText.innerHTML = this.src;
    };

    let pbClose = document.getElementById("pbClose");
    let stClose = document.getElementById("stClose");
    let dbClose = document.getElementById("dbClose");
    let dbAClose = document.getElementById("dbAClose");
    let cwClose = document.getElementById("cwClose");
    let jsAppClose = document.getElementById("jsAppClose");


    pbClose.onclick = function () {
        pbModal.style.display = "none";
    };

    stClose.onclick = function () {
        stModal.style.display = "none";
    };

    dbClose.onclick = function () {
        dbModal.style.display = "none";
    };

    dbAClose.onclick = function () {
        dbAModal.style.display = "none";
    };

    cwClose.onclick = function () {
        cwModal.style.display = "none";
    };

    jsAppClose.onclick = function () {
        jsAppModal.style.display = "none";
    };

    soonClose.onclick = function () {
        soonModal.style.display = "none"
    };
})();

