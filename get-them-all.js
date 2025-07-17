const architects = Array.from(document.getElementsByTagName('a'));

const nonArchitects = Array.from(document.getElementsByTagName('span'));

const classical = architects.filter(el => el.classList.contains('classical'));

const allAnchors = Array.from(document.getElementsByTagName('a'));

const active = classical.filter(el => el.classList.contains('active'));



export function getArchitects() {

    return [architects, nonArchitects];

}

export function getClassical() {

    const nonClassical = architects.filter(el => !el.classList.contains('classical'));

    return [classical, nonClassical];
}

export function getActive() {

    const nonActive = classical.filter(el => !el.classList.contains('active'));

    return [active, nonActive];
}

export function getBonannoPisano() {
    const bonanno = document.getElementById('BonannoPisano');

    const others = active.filter(el => el.id !== 'BonannoPisano');

    return [bonanno, others];
}



//npx serve .