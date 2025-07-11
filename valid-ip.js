function findIP(string) {
    const octet = '(?:25[0-5]|2[0-4]\\d|1\\d{2}|[1-9]\\d?|0)';
    const port = '(?::(6553[0-5]|655[0-2]\\d|65[0-4]\\d{2}|6[0-4]\\d{3}|[1-5]?\\d{1,4}))?';
    const pattern = new RegExp(`\\b${octet}\\.${octet}\\.${octet}\\.${octet}${port}\\b`, 'g');
    
    let matches = [...string.matchAll(pattern)];
    if (matches.length === 0) {
        return [];
    }
    return matches.map(match => match[0]);
}
