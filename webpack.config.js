const crypto = require("crypto");
crypto.createHash = (algorithm) => crypto.createHash(algorithm, { opensslLegacyProvider: true });

module.exports = {
  resolve: {
    fallback: {
      crypto: false
    }
  }
};
