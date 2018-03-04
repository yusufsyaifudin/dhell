const params = require('./_params');

function getPrivateKey() {
    const max = params.modulus - 2;
    const min = 2;

    return Math.round(min - .5 + Math.random() * (max - min + 1));
}

function getPublicKey(privateKey) {
    return Math.pow(params.generator, privateKey) % params.modulus;
}

module.exports = {
    private: getPrivateKey,
    public: getPublicKey
}
