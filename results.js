const myPublishKey = "pub-c-11c03653-02d7-40cb-938a-871a661c93cd";
const mySubscribeKey = "sub-c-62db580c-d4e4-11e8-9ca5-92bdce849b25";
const myChannel = "Wearable Tech";

var blue = 0;
var red = 0;

var minPubNub = new PubNub
(
    {
        subscribeKey: mySubscribeKey,
        restore : true
    }
);
minPubNub.addListener(
    {
        message : hentOgVisMinBesked(messageObject) {
    console.log(messageObject.message.vote);    
    if (messageObject.message.vote == 1) {
  	blue++;
	document.getElementById("results-blue").innerHTML = blue;
  } else if (messageObject.message.vote == 0) {
  	red++;
	document.getElementById("results-red").innerHTML = red;
  }
}
    }
);
minPubNub.subscribe(
    {
        channels: [myChannel],
        restore : true
    }
);
