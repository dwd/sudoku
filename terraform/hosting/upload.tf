resource "aws_s3_object" "contents" {
  bucket   = aws_s3_bucket.bucket.bucket
  for_each = toset(var.contents)
  key      = trimprefix(each.key, "./")
  source   = "${var.source_dir}/${each.key}"
  content_type = (
    endswith(each.key, ".html") ? "text/html" :
    endswith(each.key, ".css") ? "text/css" :
    endswith(each.key, ".json") ? "application/json" :
    endswith(each.key, ".js") ? "application/javascript" :
    endswith(each.key, ".woff2") ? "font/woff2" :
    "application/octet-stream"
  )
  provider = aws.london
}
