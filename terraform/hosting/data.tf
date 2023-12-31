data "gandi_livedns_domain" "zone" {
  name = "cridland.io"
}

locals {
  public_fqdn = "${var.name}.${data.gandi_livedns_domain.zone.name}"
}
