resource "gandi_livedns_record" "hostname" {
  name = var.name
  ttl = 3600
  type = "CNAME"
  values = [ aws_cloudfront_distribution.dist.domain_name ]
  zone = data.gandi_livedns_domain.zone.name
}
