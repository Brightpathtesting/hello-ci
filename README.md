## CI → S3 Artifact Upload (AWS)
This repository demonstrates a minimal CI pipeline that builds a versioned artifact (ZIP)
and uploads it to a private Amazon S3 bucket.

**Why S3?**
- durable, highly available storage for build artifacts
- cost-efficient and serverless
- aligned with AWS best practices (least privilege IAM, no public access)
