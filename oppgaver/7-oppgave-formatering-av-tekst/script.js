function fixText(text) {
    const cutSpaces = text.trim();
    const t = cutSpaces[0].toUpperCase() + cutSpaces.slice(1).toLowerCase();
    return t;
}
