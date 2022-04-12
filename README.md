# Hamblin Licensing
This is a simple NPM module I wrote that will simply ping Jake Hamblins Store Template V2 License System allowing you to check if a product has a key or not inside of it. I did this because there is simply no documentation on the licensing system (atleast not at this time), so those of you who want an easy way of doing it, here is how...

ALSO, with all licensing techniques, it is HIGHLY recommended that you encrypt or obfuscate your license system CALLS in some way/shape/form...

I highly suggest [JS Obfuscator](https://obfuscator.io/) however if you really want to double down on the encryption, you could also pick up [Verbatim JS Compiler](https://store.hyperz.net/store/verbatim).

# Example Code
```js
// Import the license system
const licenseSystem = require('hamblin-license');
checkLicense(); // Call the license check

// Async function to check the license
async function checkLicense() {
    let check = await licenseSystem.check({ url: "https://domain.ext/licenses/api/index.php", product: "product-link", key: "YOUR_LICENSE_KEY" }); // Make GET request
    // Check returns an object containing { pass: true/false, code: responseCode, message: codeMessage }

    // License System Checking
    if(check.pass) { // If the check passed
        console.log('License System Passed!'); // Log it in console
    } else { // If the check failed
        console.log('License System Failed!'); // Log it in console
        console.log(check.message); // Log the reason it failed
        process.exit(1); // Exit the process (crash the node application...)
    };
};
```

# Credits
- [@Hyperz](https://hyperz.net/discord) - *Physical Programming & Bug Testing.*
- [@Jake Hamblin](https://jakehamblin.com/products/store-template-v2) - *Somewhat guided documentation for this project, releasing STV2.*
