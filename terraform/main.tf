module "sudoku" {
  source     = "./hosting"
  name       = "sudoku"
  zone       = var.zone
  contents   = var.main_files
  source_dir = var.main_dir
}

module "sudoku-storybook" {
  source     = "./hosting"
  name       = "sudoku-storybook"
  zone       = var.zone
  contents   = var.sb_files
  source_dir = var.sb_dir
}

