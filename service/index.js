const debug = require("debug")("main")
const WebSocket = require('ws')
const fetch = require('node-fetch');
let Worker = require('@senseering/worker')

let config = './config.json';
let worker = new Worker();


// azure credentials (translator)
const azureName = "<your-azure-resource-name>"
const azureKey = "<your-key>"
const region = "<your-region>"

//data fetch information
const url = "<domain-of-the-providing-node>"
const receipt = {
    _id: "<your-receipt-id>",
    permissionKey: "<your-permissionkey>",
};

(async function () {

    await worker.connect(config)

    //create websocket on providing Node
    const socket = new WebSocket("wss://" + receipt._id + ':' + receipt.permissionKey + '@' + url + "/uploader/")

    socket.on('open', function () {
        socket.on('message', async function (message) {

            const fmessage = JSON.parse(message)
            if (fmessage.topic === "data") {
                let data = fmessage.message.data
                let credit = fmessage.message.credit
                let outstandingData = fmessage.message.outstandingData
                credit ? debug("data recieved. Credits left: " + credit) : ""
                outstandingData ? debug("Remaining datapieces: " + outstandingData) : ""
                console.log(data.data.text)
                let res = await translateText(data.data.text);
                await worker.publish({ text: res.text })
            }
        })
        socket.on("close", async () => {
            debug("Closing Socket")
        })
    })
})();


async function translateText(text) {
    let result = await fetch(`https://${azureName}.cognitiveservices.azure.com/translator/text/v3.0/translate?to=de`, {
        method: 'POST',
        headers: {
            'Ocp-Apim-Subscription-Key': azureKey,
            'Ocp-Apim-Subscription-Region': region,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify([{ Text: text }])
    });
    let returnedTranslation = (await result.json())[0]
    return { text: returnedTranslation.translations[0].text, detectedLanguage: returnedTranslation.detectedLanguage }
};
