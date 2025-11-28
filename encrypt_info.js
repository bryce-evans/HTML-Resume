// Phone number and email obfuscation using XOR
// Encrypted data stored as character codes
const encryptedPhone = [89, 3, 79, 69, 7, 64, 93, 29, 64, 82, 3, 74];
const encryptedEmail = [9, 82, 28, 95, 0, 57, 8, 92, 11, 5, 86, 21, 7, 29, 28, 15, 70];
const key = "k3y";

// Helper function to encrypt text (use in browser console)
function encryptText(text, key) {
    const result = [];
    for (let i = 0; i < text.length; i++) {
        result.push(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    console.log('Encrypted array:', JSON.stringify(result));
    return result;
}

function xorDecrypt(encoded, key) {
    let result = '';
    for (let i = 0; i < encoded.length; i++) {
        result += String.fromCharCode(encoded[i] ^ key.charCodeAt(i % key.length));
    }
    return result;
}

document.addEventListener('DOMContentLoaded', function() {
    const phoneLink = document.querySelector('.phone-obfuscated');
    const emailLink = document.querySelector('.email-obfuscated');

    function showPhone() {
        const phone = xorDecrypt(encryptedPhone, key);
        phoneLink.textContent = phone;
        phoneLink.href = 'tel:+1' + phone.replace(/\./g, '');
    }

    function showEmail() {
        const email = xorDecrypt(encryptedEmail, key);
        emailLink.textContent = email;
        emailLink.href = 'mailto:Bryce Evans <' + email + '>';
        emailLink.target = '_blank';
    }

    phoneLink.addEventListener('mouseenter', showPhone);
    phoneLink.addEventListener('click', showPhone);

    emailLink.addEventListener('mouseenter', showEmail);
    emailLink.addEventListener('click', showEmail);

    // Reveal phone and email when printing
    window.addEventListener('beforeprint', function() {
        showPhone();
        showEmail();
    });
});
