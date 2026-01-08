const crypto = require('crypto');

function anotherInsecurePassword() {
  // Use a cryptographically secure random suffix
  var suffix = crypto.randomBytes(8).toString('hex');
  var password = "sssAAAA" + suffix;
  return password;
}