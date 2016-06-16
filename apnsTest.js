// npm module link: https://www.npmjs.com/package/push-notify
var notify = require("push-notify");

var deviceToken = "Replace with device token";
var passphrase = "Replace with passphrase";
var productionEnvironment = true;
var alertMessage = "This is a sample alert";

var apn = notify.apn({
        "cert": "PushCert.pem",
        "key":  "PushKey.pem",
        "passphrase": passphrase,
"production":productionEnvironment
    });


var apnNotifOptions = {
                    "token" : deviceToken,//dToken,
                    "alert" : alertMessage
                }

                apnNotifOptions.sound = null
                apnNotifOptions.badge = null

                apn.send(apnNotifOptions)
                apn.close(function() {
                    console.info("Closed apn socket connection")
                    
                })
            

            apn.on('transmitted', function (notification, device) {
                console.info("Successful Push Notification transmission to APNS for device token: " +device)
            });
            
            apn.on('transmissionError', function (errorCode, notification, device) {
                console.error("Error in Push Notification transmission to APNS for device token:  Error Code: "+errorCode)
            });
            
            apn.on('error', function (error) {
                console.error("APNError: "+error)

            });
