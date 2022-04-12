// Import the license system
const licenseSystem = require('hamblin-license');
checkLicense(); // Call the license check

// Async function to check the license
async function checkLicense() {
    let check = await licenseSystem.check({ url: "https://xolifyzdevelopement.xyz/licenses/api/index.php", product: "aio-music", key: "HqYD62I9vM12IZSl" }); // Make GET request
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