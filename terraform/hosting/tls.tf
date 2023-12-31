resource "tls_private_key" "private_key" {
  algorithm = "ED25519"
}

resource "acme_registration" "reg" {
  account_key_pem = tls_private_key.private_key.private_key_pem
  email_address   = "dave@cridland.net"
}

resource "acme_certificate" "certificate" {
  account_key_pem           = acme_registration.reg.account_key_pem
  common_name               = local.public_fqdn
  subject_alternative_names = [local.public_fqdn]

  dns_challenge {
    provider = "gandi"
  }
}

resource "aws_acm_certificate" "cert" {
  private_key      = tls_private_key.private_key.private_key_pem
  certificate_body = acme_certificate.certificate.certificate_pem
}
