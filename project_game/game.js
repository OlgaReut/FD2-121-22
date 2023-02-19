"use strict";

    window.onhashchange = switchToStateFromURLHash;

    let SPAState = {};
  

    function switchToStateFromURLHash() {
        const URLHash = window.location.hash;

        let stateStr = URLHash.substr(1);


        let pageHTML = "";
        switch (stateStr) {
            case 'Main':
                pageHTML += renderMain();
                break;
            case 'Game':
                pageHTML += renderGame();
                break;
            case 'Results':
                pageHTML += renderResults();
                break;
        }
        document.getElementById('IPage').innerHTML;
    }


    function switchToState(newState) {
        var stateStr = newState.pagename;
        location.hash = stateStr;
    }

    function switchToMain() {
        switchToState({ pagename: 'Main' });
    }

    function switchToGame() {
        switchToState({ pagename: 'Game' });
    }

    function switchToResults() {
        switchToState({ pagename: 'Results' });
    }

    switchToStateFromURLHash();


    function renderMain(){
        const cnv = document.getElementById('canvas');
        cnv.className = "cnvMain";

        const pageR = document.getElementById('pageR');
        pageR.className = "pResult";
        
    }

    function renderGame() {
        const pageM = document.getElementById('pageM');
        pageM.className = "pMain";

        const pageR = document.getElementById('pageR');
        pageR.className = "pResult";

        const cvs = document.getElementById('canvas');
        const ctx = cvs.getContext('2d');

        const balloon = new Image();
        const backgr = new Image();
        const grass = new Image();
        const cloud = new Image();
        const tree = new Image();

        balloon.src = "img/balloon.png";
        backgr.src = "img/background.png";
        grass.src = "img/grass.png";
        cloud.src = "img/cl.png";
        tree.src = "img/tree.png";

        const gap = 170;
        
        // При нажатии на кнопку
        document.addEventListener("keydown", moveUp);

        function moveUp() {
            yPos -= 20;
        }

        // Создание блоков
        let pipe = [];
        pipe[0] = {
            x: cvs.width,
            y: 0
        }

        // Позиция балуна
        let xPos = 10;
        let yPos = 100;
        let grav = 1;

        let score = 0;

        function draw() {   // отрисовка игры
            ctx.drawImage(backgr, 0, 0);

            for (let i = 0; i < pipe.length; i++) {
                ctx.drawImage(cloud, pipe[i].x, pipe[i].y);
                ctx.drawImage(tree, pipe[i].x, pipe[i].y + cloud.height + gap);   

                pipe[i].x --;

                if (pipe[i].x == 110) {   // появление новых элементов
                    pipe.push({
                        x: cvs.width,
                        y: Math.floor(Math.random() * cloud.height) - cloud.height/3
                    });
                }

                // Отслеживание столкновений
                if (xPos + balloon.width >= pipe[i].x
                    && xPos + balloon.width <= pipe[i].x + cloud.width
                    && (yPos <= pipe[i].y + cloud.height
                        || yPos + balloon.height >= pipe[i].y + cloud.height + gap
                        || yPos + balloon.height >= cvs.height - grass.height)) {
                    location.reload(); // перезагрузка
                }

                // Очки
                if (pipe[i].x ==5) {
                    score++;
                }
            }
            
            ctx.drawImage(grass, 0, cvs.height - grass.height);
            ctx.drawImage(balloon, xPos, yPos);

            yPos += grav;

            ctx.font = "24px 'Dancing Script'"
            ctx.fillText(`Очки: ${score}`, 10, cvs.height - 20);
            ctx.fillText(`Игрок:`, cvs.width / 2, cvs.height - 20);

            requestAnimationFrame(draw);  // вызов функции постоянно
        }

        tree.onload = draw;

        let page = document.getElementsByTagName('main');
        let button = document.createElement("input");
        button.type = "button btn-1";
        page.appendChild(button);
        let button2 = document.createElement("input");
        button2.type = "button btn-2";
        page.appendChild(button2);
    }

    function renderResults() {
        const cnv = document.getElementById('canvas');
        cnv.className = "cnvRes";

        const pageM = document.getElementById('pageM');
        pageM.className = "pMain";
    }