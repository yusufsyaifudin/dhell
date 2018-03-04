const params = require('./_params');
const getKey = require('./get-key');

const bobKeyPair = {
    private: getKey.private()
}

bobKeyPair.public = getKey.public(bobKeyPair.private);
