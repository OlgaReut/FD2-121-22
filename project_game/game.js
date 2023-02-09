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
            case 'Settings':
                pageHTML += renderSettings();
                break;
        }
        document.getElementById('IPage').innerHTML = pageHTML;
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

    function switchToSettings() {
        switchToState({ pagename: 'Settings' });
    }

    switchToStateFromURLHash();


    function renderMain(){
        return (
            `<h3>Главная страница</h3>
            <p>Щёлкайте по кнопкам!</p>`
        )
        
    }