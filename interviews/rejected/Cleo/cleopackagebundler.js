/**
 * CleoPackageBundler: Used to store multiple CleoPackages and implement proper counting and sorting.
 */

var CleoPackageBundler = function() {
  this.packages = [];

  this.addPackage = function(newPackage) {
    // Add or update a package as needed.
    let existingPackage = this.packages.filter(currentPackage => {
      return (
        currentPackage.company === newPackage.company &&
        currentPackage.package === newPackage.package
      );
    })[0];

    // If we have one let us go ahead and update it after incrementing our package count.
    if (existingPackage !== undefined) {
      existingPackage.count++;

      // Add new email address and then sort if needed.
      let sortNeeded = false;
      newPackage.emails.forEach(email => {
        if (existingPackage.emails.indexOf(email) === -1) {
          existingPackage.emails.push(email);
          sortNeeded = true;
        }
      });

      if (sortNeeded) existingPackage.emails = existingPackage.emails.sort();
    }

    // A package does not exist, let us add a new one.
    else {
      this.packages.push(newPackage);
    }
  };

  this.getPackages = function() {
    return this.packages;
  };
};

module.exports = CleoPackageBundler;