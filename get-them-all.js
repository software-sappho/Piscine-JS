export function getArchitects() {
    const architects = Array.from(document.getElementsByTagName('a'));
    const nonArchitects = Array.from(document.getElementsByTagName('span'));
    return [architects, nonArchitects];
}

export function getClassical() {
    const architects = Array.from(document.getElementsByTagName('a'));
    const classical = architects.filter(el => el.classList.contains('classical'));
    const nonClassical = architects.filter(el => !el.classList.contains('classical'));
    return [classical, nonClassical];
}

export function getActive() {
    const architects = Array.from(document.getElementsByTagName('a'));
    const classical = architects.filter(el => el.classList.contains('classical'));
    const active = classical.filter(el => el.classList.contains('active'));
    const nonActive = classical.filter(el => !el.classList.contains('active'));
    return [active, nonActive];
}

export function getBonannoPisano() {
    const bonanno = document.getElementById('BonannoPisano');

    const architects = Array.from(document.getElementsByTagName('a'));
    const classical = architects.filter(el => el.classList.contains('classical'));
    const active = classical.filter(el => el.classList.contains('active'));

    const others = active.filter(el => el.id !== 'BonannoPisano');
    return [bonanno, others];
}
