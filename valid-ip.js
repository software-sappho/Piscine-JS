function findIP(string) {
    const octet = '(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])';
    const port = '(?::(6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[0-9]{1,4}))?';
    const pattern = new RegExp(`(?:^|\\s)(${octet}\\.${octet}\\.${octet}\\.${octet}${port})(?=\\s|$)`, 'g');
    
    let matches = [];
    let match;
    while ((match = pattern.exec(string)) !== null) {
        matches.push(match[1]);
    }
    
    return matches;
}