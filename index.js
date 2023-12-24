function createSlug(str, options = {}) {
    // Default options
    const defaultOptions = {
        replacement: '-',
        removeSpecialCharacters: true,
        customReplacements: {},
        maxLength: null,
        truncate: false,
        wordDelimiter: false,
    };
    
    // Merge user options with default options
    const mergedOptions = { ...defaultOptions, ...options };

    let slug = str
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, mergedOptions.replacement)
        .replace(/^-+|-+$/g, '');
    return slug;
}

module.exports = {
    createSlug,
};