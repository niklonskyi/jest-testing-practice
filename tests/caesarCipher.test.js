import caesarCipher from "../src/caesarCipher.js";

test('Returns string in Caesar cipher with default offset of 1', () => {
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz'))
        .toEqual('bcdefghijklmnopqrstuvwxyza')
})

test('Returns string in Caesar cipher with default offset of 1', () => {
    expect(caesarCipher('defend the east wall of the castle'))
        .toEqual('efgfoe uif fbtu xbmm pg uif dbtumf')
})