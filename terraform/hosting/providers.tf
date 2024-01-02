terraform {
  required_providers {
    gandi = {
      version = "~> 2.0.0"
      source  = "go-gandi/gandi"
    }
    acme = {
      version = "~> 2.0"
      source  = "vancluever/acme"
    }
    aws = {
      version = "~> 5.0"
      source  = "hashicorp/aws"
    }
  }
}

provider "aws" {
  alias  = "global"
  region = "us-east-1"
}

provider "aws" {
  alias  = "london"
  region = "eu-west-2"
}

provider "acme" {
  server_url = "https://acme-v02.api.letsencrypt.org/directory"
}