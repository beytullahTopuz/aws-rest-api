const AWS = require("aws-sdk");

AWS.config.update({
    "region": "us-east-1",
    "endpoint": "YOUR ENDPOINT",
    "accessKeyId": "YOUR ACCESSKEYID", "secretAccessKey": "YOUR SCRET ACCESS KEY"
});
