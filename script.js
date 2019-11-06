window.onload = function () {
    function setstyle(element, styles) {
        Object.assign(element.style, styles);
    }
    let spec = { backgroundColor: 'grey', color: 'white' };
    let keyst = { width: '40px', height: '40px', backgroundColor: '#1c1f1c', outline: 'none', border: 'none', cursor: 'pointer' };

    const row1 = ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"];
    const row2 = ["Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "Del"];
    const row3 = ["CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter"];
    const row4 = ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "▲", "Shift"];
    const row5 = ["Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"];

    const text = document.createElement('textarea');
    text.id = 'area';
    text.readOnly = true;
    setstyle(text, { width: '704px', height: '100px', border: '1px solid black', margin: '0 auto', display: 'block', marginBottom: '10px', marginTop: '50px' });
    document.body.appendChild(text)

    const container = document.createElement('section');
    setstyle(container, { width: '704px', margin: '0 auto', backgroundColor: '#695852', padding: '5px' })
    document.body.appendChild(container);


    for (let i = 1; i < 6; i++) {
        var row = document.createElement('div');
        setstyle(row, { width: '100%', height: '40px', marginBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' })
        container.appendChild(row);

        if (i == 1) {
            for (let n = 1; n < 15; n++) {
                var key = document.createElement('input');
                setstyle(key, keyst);
                key.value = row1[n - 1];
                setstyle(key, { color: 'white', textAlign: 'center' })
                if (n == 14) {
                    key.className = 'backspace';
                    setstyle(key, spec);
                }
                row.appendChild(key);

            }
        }
        if (i == 2) {
            for (let n = 1; n < 16; n++) {
                var key = document.createElement('input');
                setstyle(key, keyst)
                if (n == 1) {
                    key.className = 'tab';
                    key.style.width = '50px';
                    setstyle(key, spec);

                }
                if (n == 15) {
                    key.className = 'del';
                    key.style.width = '44px';
                    setstyle(key, spec)
                }
                key.value = row2[n - 1];
                setstyle(key, { color: 'white', textAlign: 'center' })
                row.appendChild(key);
            }
        }
        if (i == 3 || i == 4) {
            for (let n = 1; n < 14; n++) {
                var key = document.createElement('input');
                setstyle(key, keyst)
                if (n == 1) {
                    key.className = 'capslock';
                    setstyle(key, spec)
                }
                if (n == 13) {
                    key.style.width = '86px';
                    setstyle(key, spec);
                    key.className = 'enter';
                }
                if (i == 4 && n == 12) {
                    setstyle(key, spec);
                    key.className = 'shift';
                }
                if (i == 4 && n == 11) {
                    key.className = 'up';
                }
                if (i == 4 && n == 1) {
                    key.className = 'shift';
                }
                if (i == 3) key.value = row3[n - 1]
                else key.value = row4[n - 1];
                setstyle(key, { color: 'white', textAlign: 'center' })

                row.appendChild(key);
            }
        }
        if (i == 5) {
            row.style.marginBottom = '0px';
            for (let n = 1; n < 10; n++) {
                var key = document.createElement('input');
                setstyle(key, keyst);
                setstyle(key, spec);
                if (n == 4) {
                    //  key.className = 'space';
                    key.style.width = '330px'
                }
                if (n == 3 || n == 5) {
                    key.className = 'alt';
                }
                if (n == 1 || n == 9) {
                    key.className = 'ctrl';
                }
                if (n == 2) {
                    key.className = 'win';
                }
                if (n == 6) {
                    key.className = 'left';
                }
                if (n == 7) {
                    key.className = 'down';
                }
                if (n == 8) {
                    key.className = 'right';
                }
                key.value = row5[n - 1];
                setstyle(key, { color: 'white', textAlign: 'center' })
                row.appendChild(key);
            }
        }
        Array.from(document.getElementsByTagName('input')).forEach(i => i.type = 'button');
        Array.from(document.querySelectorAll('.spec')).forEach(i => i.backgroundColor = 'grey');
        Array.from(document.querySelectorAll('.backspace, .capslock')).forEach(i => i.style.width = '100px');
    }
    function clicked(event, r) {
        if (event.key === undefined) {
            this.style.backgroundColor = 'blue';
            setTimeout(() => this.style.backgroundColor = '#1c1f1c', 100)
            document.getElementsByTagName('textarea')[0].value += this.value;
        }
        else {
            document.getElementsByTagName('textarea')[0].value += event.key;
        }
    }
    function keyd(event) {
        clicked(event, this)
    }

    Array.from(document.getElementsByTagName('input')).forEach(i => i.onclick = clicked)
    Array.from(document.getElementsByTagName('input')).forEach(i => i.onkeydown = keyd)

}
