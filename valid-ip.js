function findIP(string) {
    const pattern = /\b((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})(:(6553[0-5]|655[0-2]\d|65[0-4]\d{2}|6[0-4]\d{3}|[1-5]?\d{1,4}))?(?![\d\.])/g;
    let matches = [...string.matchAll(pattern)];

    if (matches.length === 0) {
        return [];
    }

    return matches.map(match => match[0]);
}
