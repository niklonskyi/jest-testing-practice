function caesarCipher(string, offset = 1) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let ciphertext = '';
    for (const stringElement of string) {
        if (alphabet.includes(stringElement)) {
            let charIndex = alphabet.indexOf(stringElement) + offset;
            if (charIndex > alphabet.length - 1) {
                charIndex -= alphabet.length;
            }
            ciphertext += alphabet[charIndex];
        }
        else ciphertext += stringElement;
    }
    return ciphertext;
}

export default caesarCipher;