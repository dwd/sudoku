module "sudoku" {
  source = "./hosting"
  name = "sudoku"
  zone = var.zone
}

module "sudoku-storybook" {
  source = "./hosting"
  name = "sudoku-storybook"
  zone = var.zone
}

