// Change title for PDF filename while keeping tab title
const originalTitle = document.title;
const pdfTitle = 'bryce-evans-cv';

window.addEventListener('beforeprint', () => {
    document.title = pdfTitle;
});

window.addEventListener('afterprint', () => {
    document.title = originalTitle;
});
