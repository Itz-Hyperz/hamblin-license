const axios = require('axios');

async function licenseCheck(data) {
    let url = data.url;
    let product = data.product;
    let key = data.key;
    let results = await axios({
        method: 'get',
        url: url,
        headers: { "product": product, "key": key },
        data: {
            "product": product,
            "key": key
        }
    });
    if(!results?.data) {
        return { "pass": false, "code": 404, "message": "No results from website license ping..." };
    };
    let msg = results?.data?.message.split(': ')[1];
    if(results?.data?.code != 5007) {
        return { "pass": false, "code": results?.data?.code, "message": msg };
    } else {
        return { "pass": true, "code": results?.data?.code, "message": msg };
    };
};

exports.check = licenseCheck;