# Code Challenge
The engineering team at Cleo is interested in learning more about your coding ability! 

Our intention is to test your abilities on a realistic problem, free from the pressure and time constraints of a traditional whiteboarding interview. While there is no time limit, we don’t expect this problem to take up more than an hour of your time.

## Evaluation Criteria
Your code will be evaluated based on:
- Correctness of output
- Design, including use of appropriate data structures
- Readability
- Documentation
- (Bonus) Automated testing

We are also checking your ability to read instructions and follow the spec, so please read carefully!

## Specification
### Background
When companies subscribe to a Cleo benefit package, any of their employees who are expecting, adopting, or who have recently had a child gain access to our platform. In some cases, families who are considering having a child are also eligible. 

It would be very helpful for us to know in advance which employees at a company are eligible before they come to us for help!

Let’s say we do not have API access to our customers’ HR systems, but they have at least agreed to send us periodic reports with the email addresses of newly eligible employees. There is some variation in the report format based on company HR system, but they all contain the same basic information:
- Company name
- Package name (determines terms of eligibility, pricing, and offerings)
- Employee emails (comma-separated)

### Input
- Your program will receive its input from `input.txt`.
- Each line corresponds to a single “report”. Valid reports follow one of these formats:

#### Format 1:
```
PackageName:CompanyName:EmployeeEmails
```

Example:
```
Cleo Select:Slack:foo@slack.fake.com,bar@slack.fake.com
```

#### Format 2:
```
CompanyName -- PackageName:EmployeeEmails
```

Example:
```
Slack -- Cleo Select:foo@slack.fake.com,bar@slack.fake.com
```

#### Format 3:
```
EmployeeEmails;PackageName;CompanyName
```

Example:
```
foo@slack.fake.com,bar@slack.fake.com;Cleo Select;Slack
```

- Your program should not crash if it encounters an improperly formatted record, but continue counting valid records. Report the errors in some way of your choosing.
- The program should skip blank lines and not count them as errors for reporting purposes.
- To make things simpler, email addresses, companies, and packages will not contain colons, semicolons, commas, or double hyphens.
- For the purpose of this exercise, you may assume that a valid email address consists of one or more alphanumeric characters, periods, and/or hyphens, followed by the "@" symbol, followed again by one or more alphanumeric characters, periods, and hyphens. If an email does not match this pattern, ignore it.
- (Bonus) Write a solution that can handle colons, semicolons, commas, and double hyphens in company/package names.

### Output
- Produce an array of objects, where each object represents a package. Each object will have the following keys:
    - `package`: the package name (value: string)
    - `company`: the company name (value: string)
    - `emails`: a list of unique emails, sorted alphabetically (value: array of strings)
    - `count`: the number of reports in which the package appeared (value: int)

```
[
    {
        "package": "Cleo Select",
        "company": "Slack",
        "emails": [
            "foo@slack.fake.com",
            "bar@slack.fake.com",
            "baz@slack.fake.com"
        ],
        "count": 2
    },
    {
        "package": "Pilot 2018",
        "company": "Box",
        "emails": [
            "qux@box.fake.com"
        ],
        "count": 1
    }
]
```

- Results should be written to `output.json`.
- Results should be encoded as JSON.
- A company can subscribe to more than one package. Each package should be treated as a separate object in the array.
- The order of the keys within each package does not matter.
- The array should be sorted alphabetically by package name.
- Email values should be sorted alphabetically and not duplicated.

### Example
#### Input:
```
Cleo Select:Slack:foo@slack.fake.com,bar@slack.fake.com,baz@slack.fake.com
1st-Time Parents:LUCY.:scott@startwithlucy.com,kurt@startwithlucy.com
bar@slack.co.uk,baz@slack.co.uk;Slack - UK;Slack
1st-Time Parents:LUCY.:steven@startwithlucy.com,kurt@startwithlucy.com
```

#### Output:
```
[
    {
        "package": "1st-Time Parents",
        "company": "LUCY",
        "emails": [
            "kurt@startwithlucy.com",
            "scott@startwithlucy.com",
            "steven@startwithlucy.com"
        ],
        "count": 2
    },
    {
        "package": "Cleo Select",
        "company": "Slack",
        "emails": [
            "bar@slack.fake.com",
            "baz@slack.fake.com"
            "foo@slack.fake.com",
        ],
        "count": 1
    },
    {
        "package": "Slack - UK",
        "company": "Slack",
        "emails": [
            "bar@slack.co.uk",
            "baz@slack.co.uk"
        ],
        "count": 1
    }
]
```

## Submission Instructions
Write your solution in a file called `solution.*` with the extension of your chosen language (e.g. `solution.py`, `solution.js`). The solution file should be in the root directory. You are free to create additional files and directories if needed, but don't move any of the original files.

Once you’ve finished, zip your project into a .tar.gz file and send it back to engineering@hicleo.com. Be sure to include a README with instructions on how to run your program. If you wrote any tests, include those too with instructions on how to run them. We’ll run our own tests against your program’s output and get back to you shortly.

We hope you enjoy this chance to show us your ability and style. Feel free to contact engineering@hicleo.com if you need clarification on any instructions.
