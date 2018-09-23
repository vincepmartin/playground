const fs = require("fs");
const readline = require("readline");
const CleoPackageBundler = require("./cleopackagebundler.js");
const CleoPackage = require("./cleopackage.js");

/**
 * Returns True if an email is RFC2822 valid.
 * @param {Boolean} email
 * @returns {Boolean}
 */
function isValidEmail(email) {
  // RegExp implementation of RFC2822 borrowed from regexr.com
  let validMail = new RegExp(
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
  );
  if (email.match(validMail)) return true;
  return false;
}

/**
 * Remove trailing periods from strings.  One of the test cases showed this was a problem.
 */
function removeTrailingPeriods(str) {
    while (str[str.length-1] === ".")
    str = str.slice(0,-1);

    return str
}

/**
 * Convert a line from the input file to a cleo package. Otherwise, return an error.
 * @param {String} input
 * @returns {Boolean}
 */
function getCleoPackage(input) {
  let t1ort2 = new RegExp(/:/g);
  let t3 = new RegExp(/;/g);

  // Quick check for the obvious problems...
  if (input === undefined || input === "" || input === " ")
    throw `Invalid Cleo Package Format of: ${input}.`;

  // Type 1: <PackageName>:<CompanyName>:<Emails>
  if ((input.match(t1ort2) || []).length == 2) {
    let packageName = removeTrailingPeriods(input.split(":")[0].trim());
    let companyName = removeTrailingPeriods(input.split(":")[1].trim());
    let emails = input
      .split(":")[2]
      .trim()
      .split(",")
      .filter(email => {
        return isValidEmail(email);
      })
      .sort();
    if (emails.length > 0)
      return new CleoPackage(packageName, companyName, emails);
    else throw `Cleo Package contains no email addresses. Type 1: ${input}`;
  }

  // Type 2: <CompanyName> -- <PackageName>:<emails>
  else if ((input.match(t1ort2) || []).length == 1) {
    let companyName = removeTrailingPeriods(input.split("--")[0].trim());
    let secondHalf = input.split("--")[1].trim();

    let packageName = removeTrailingPeriods(secondHalf.split(":")[0]);
    let emails = secondHalf
      .split(":")[1]
      .trim()
      .split(",")
      .filter(email => {
        return isValidEmail(email);
      })
      .sort();

    if (emails.length > 0)
      return new CleoPackage(packageName, companyName, emails);
    else throw `Cleo Package contains no email addresses. Type 2: ${input}`;
  }

  // Type 3: <Emails>;<PackageName>;<Company>
  else if ((input.match(t3) || []).length == 2) {
    let packageName = removeTrailingPeriods(input.split(";")[1].trim());
    let companyName = removeTrailingPeriods(input.split(";")[2].trim());
    let emails = input
      .split(";")[0]
      .trim()
      .split(",")
      .filter(email => {
        return isValidEmail(email);
      })
      .sort();

    if (emails.length > 0)
      return new CleoPackage(packageName, companyName, emails);
    else throw `Cleo Package contains no email addresses. Type 3: ${input}`;
  }

  // Matches nothing!
  else throw `Invalid Cleo Package Format of: ${input}.`;
}

/***
 * Entry Point
 */

//Setup input and output files.
let inputFile = "input.txt";
let outputFile = "output.txt";

// Store our packages.
let cleoPackageBundle = new CleoPackageBundler();

// Create an interface to read input
let inputLines = readline.createInterface({
  input: fs.createReadStream(inputFile)
});

// Read the input file, parse and then write the results to the output file.
inputLines
  .on("line", input => {
    try {
      cleoPackageBundle.addPackage(getCleoPackage(input));
    } catch (error) {
      console.log(`Exception: ${error}`);
    }
  })
  .on("close", () => {
    console.log(cleoPackageBundle.getPackages());
    fs.writeFile(
      outputFile,
      JSON.stringify(cleoPackageBundle.getPackages()),
      err => {
        if (err) console.log(`Error writing to ${outputFile}`);
        else console.log(`Results written to ${outputFile}`);
      }
    );
  });
