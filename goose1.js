var tmi = require ('tmi.js');

var options = {
		options:{
			debug:true
		},
		connection: {
			cluster: "aws",
			reconect: true
		},
		identity: {
			username: "goosebot_",
			password: "oauth:itrw5job1pbhzc8useusxcngo05h8x"
		},
		channels: ["berrygoose_"]
}


var client = new tmi.client(options);
client.connect();


client.on("join", function (channele, username, self) {
	client.action("berrygoose_", username + ", glad to see you!");
});


//TimeOut function
function timeOut(message) {
	splitMSG = message.split(" ");
	timeoutUserName = splitMSG[1];
	timeoutDuration = splitMSG[2];
	client.timeout("berrygoose_", timeoutUserName, timeoutDuration);
	client.action('berrygoose_', timeotUserName + 'now ur tmout, duration:' + timeoutDuration);
}
//

client.on('chat', function (channel, username, message, self) {

    if(username.username === "berrygoose_"){
        // Admin commands
        splitMessage(message);
    } switch (message) {
    case "!vk":
        client.action('berrygoose_', 'https://vk.com/berrygoose');
        break;
    default:
    }
});

