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


    // AJAX
    const firstname = document.querySelector('[name="firstname"]');
    const sendBtn = document.querySelector('[value="Зарегистрироваться"]');
    const btn = document.getElementById('btn');
    const userView = document.getElementById('user');
    let score;

    const URL = 'https://fe.it-academy.by/AjaxStringStorage2.php';
    const NAME = 'REUT_31121994';

    const REQUEST_TYPE = {
        READ: 'READ',
        LOCKGET: 'LOCKGET',
        UPDATE: 'UPDATE',
        INSERT: 'INSERT',
    }

    //read
    btn.addEventListener('click', async () => {
        const users = await request(REQUEST_TYPE.READ, NAME);

        render(users);
    });

    //update
    sendBtn.addEventListener('click', async () => {
        const { value: firstName } = firstname;

        const user = {
            firstName,
            score
        }

        const updatePassword = Math.random();

        const requestUsers = await request(REQUEST_TYPE.READ, NAME);

        if(!requestUsers || user in requestUsers){
            const res = [{...user}]

            await request(REQUEST_TYPE.LOCKGET, NAME, updatePassword);
            await request(REQUEST_TYPE.UPDATE, NAME, updatePassword, JSON.stringify(res));
        }
        else{
            requestUsers.push(user);
            await request(REQUEST_TYPE.LOCKGET, NAME, updatePassword);
            await request(REQUEST_TYPE.UPDATE, NAME, updatePassword, JSON.stringify(requestUsers));
        }
    });

    async function request(func, name, pass, val) {

        let sp = new URLSearchParams();
        sp.append('f', func);
        sp.append('n', name);
        pass && sp.append('p', pass);
        val && sp.append('v', val);

        try {
            const response = await fetch(URL, { method: 'POST', body: sp })
            const data = await response.json();

            if(data.result === 'OK'){
                alert('Success');

                return;
            }

            return JSON.parse(data.result);
        } catch (err) {
            alert(err)
        }
    }

    function render(users){
        let strLI = '';

        users.forEach(user => {
            strLI += `
            <li>Игрок: ${user.firstName} 
        
            </li>`
        });
        userView.innerHTML = strLI;
    }


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
            // ctx.fillText(`Игрок: ${user.firstname}`, cvs.width / 3, cvs.height - 20);
            function render(users){
                
        
                users.forEach(user => {
                    ctx += `
                    <p width="cvs.width / 3" height="cvs.height - 20">Имя: ${user.firstName}</p>`
                });
                ctx.innerHTML = ctx;
            }

            requestAnimationFrame(draw);  // вызов функции постоянно
        }

        tree.onload = draw;
    }

    function renderResults() {
        const cnv = document.getElementById('canvas');
        cnv.className = "cnvRes";

        const pageM = document.getElementById('pageM');
        pageM.className = "pMain";
    }





    
    // //read
    // btn.addEventListener('click', async () => {
    //     const users = await request(REQUEST_TYPE.READ, NAME);

    //     render(users);
    // });

    // //update
    // sendBtn.addEventListener('click', async () => {
    //     const { value: firstName } = firstname;

    //     const user = {
    //         firstName,
    //         score
    //     }

    //     const updatePassword = Math.random();

    //     const requestUsers = await request(REQUEST_TYPE.READ, NAME);

    //     if(!requestUsers){
    //         const res = [{...user}]

    //         await request(REQUEST_TYPE.LOCKGET, NAME, updatePassword);
    //         await request(REQUEST_TYPE.UPDATE, NAME, updatePassword, JSON.stringify(res));
    //     }
    //     else{
    //         requestUsers.push(user);
    //         await request(REQUEST_TYPE.LOCKGET, NAME, updatePassword);
    //         await request(REQUEST_TYPE.UPDATE, NAME, updatePassword, JSON.stringify(requestUsers));
    //     }
       
        
    // });

    // async function request(func, name, pass, val) {

    //     let sp = new URLSearchParams();
    //     sp.append('f', func);
    //     sp.append('n', name);
    //     pass && sp.append('p', pass);
    //     val && sp.append('v', val);

    //     try {
    //         const response = await fetch(URL, { method: 'POST', body: sp })
    //         const data = await response.json();

    //         if(data.result === 'OK'){
    //             alert('Success');

    //             return;
    //         }

    //         return JSON.parse(data.result);
    //     } catch (err) {
    //         alert(err)
    //     }
    // }

    // function render(users){
    //     let strLI = '';

    //     users.forEach(user => {
    //         strLI += `
    //         <li>Имя: ${user.firstName} <br> Очки: ${user.scorE}</li>`
    //     });
    //     userView.innerHTML = strLI;
    // }