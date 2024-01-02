

resource "aws_s3_bucket" "bucket" {
  bucket   = "dwd-${var.name}"
  provider = aws.london
}

data "aws_iam_policy_document" "allow_access_from_cloudfront" {
  #{
  #"Version": "2008-10-17",
  #"Id": "PolicyForCloudFrontPrivateContent",
  #"Statement": [
  #{
  #"Sid": "AllowCloudFrontServicePrincipal",
  #"Effect": "Allow",
  #"Principal": {
  #"Service": "cloudfront.amazonaws.com"
  #},
  #"Action": "s3:GetObject",
  #"Resource": "arn:aws:s3:::dwd-sudoku-storybook/*",
  #"Condition": {
  #"StringEquals": {
  #"AWS:SourceArn": "arn:aws:cloudfront::897674548921:distribution/E2QDSD5K4VF4X7"
  #}
  #}
  #}
  #]
  #}
  statement {
    sid = "AllowCloudFrontServicePrincipal"


    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"] # Cloudfront User
    }

    effect = "Allow"

    actions = [
      "s3:GetObject",
    ]

    resources = [
      "${aws_s3_bucket.bucket.arn}/*",
    ]
    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = [aws_cloudfront_distribution.dist.arn]
    }
  }
  provider = aws.london
}

resource "aws_s3_bucket_policy" "allow_access_from_cloudfront" {
  bucket   = aws_s3_bucket.bucket.bucket
  policy   = data.aws_iam_policy_document.allow_access_from_cloudfront.json
  provider = aws.london
}

resource "aws_cloudfront_origin_access_control" "default" {
  name                              = "access-${var.name}"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
  provider                          = aws.global
}

resource "aws_cloudfront_distribution" "dist" {
  origin {
    domain_name              = aws_s3_bucket.bucket.bucket_regional_domain_name
    origin_id                = "origin-${aws_s3_bucket.bucket.bucket}"
    origin_access_control_id = aws_cloudfront_origin_access_control.default.id
  }
  enabled             = true
  is_ipv6_enabled     = true
  http_version        = "http2and3"
  default_root_object = "index.html"
  aliases             = [local.public_fqdn]
  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = "origin-${aws_s3_bucket.bucket.bucket}"
    viewer_protocol_policy = "redirect-to-https"
    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
  }
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate.cert.arn
    ssl_support_method  = "sni-only"
  }
  provider = aws.global
}