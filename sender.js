const myPublishKey = "pub-c-11c03653-02d7-40cb-938a-871a661c93cd";
const mySubscribeKey = "sub-c-62db580c-d4e4-11e8-9ca5-92bdce849b25";
const myChannel = "Wearable Tech";

function OpgaveTo (beskedTxt) {
    this.vote = beskedTxt;
}

var minPubNub = new PubNub (
    {
        publishKey: myPublishKey,
        subscribeKey: mySubscribeKey
    }
);
minPubNub.subscribe(
    {
        channels: [myChannel]
    }
);
function sendBesked(beskedSomObj) {
    minPubNub.publish (
        {
            channel: myChannel,
            message: beskedSomObj
        }
    )
}

function voteBlue() {
    var mBesked = new OpgaveTo(1);
    sendBesked(mBesked);
}

function voteRed() {
    var mBesked = new OpgaveTo(0);
    sendBesked(mBesked);
}
