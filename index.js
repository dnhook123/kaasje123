import * as aws from "@pulumi/aws";

// Create an AWS resource (S3 Bucket)
function davidwengpang() {
    const bucket = new aws.s3.Bucket("my-bucket");
}

module.exports = davidwengpang();
