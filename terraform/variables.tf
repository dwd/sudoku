variable "zone" {
  type    = string
  default = "cridland.io"
}

variable "main_files" {
  type = list(string)
}

variable "main_dir" {
  type    = string
  default = "../dist"
}

variable "sb_files" {
  type = list(string)
}

variable "sb_dir" {
  type    = string
  default = "../storybook-static"
}

