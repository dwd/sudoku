resource "aws_s3_object" "contents" {
  bucket   = aws_s3_bucket.bucket.bucket
  for_each = toset(var.contents)
  key      = each.key
  source   = "${var.source_dir}/${each.key}"
}
