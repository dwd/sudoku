terraform {
  backend "s3" {
    bucket = "dwd-tfstate"
    key    = "sudoku/tfstate"
    region = "eu-west-2"
  }
}
