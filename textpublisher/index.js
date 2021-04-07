let Worker = require('@senseering/worker')

let config = './config.json';

let worker = new Worker();


(async function () {
    await worker.connect(config)
    while (true) {
        await worker.publish({
            text: "Please translate me"
        })
        await new Promise(resolve => setTimeout(resolve, 5000))
    }
})();
