/**
 * CleoPackage: Data object used to store an individual Cleo Package
 */

var CleoPackage = function(packageName, company, emails) {
  this.package = packageName;
  this.company = company;
  this.emails = emails;
  this.count = 1;
};

module.exports = CleoPackage;
