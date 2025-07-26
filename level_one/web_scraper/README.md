# 📚 Book Scraper (books.toscrape.com)

A Python web scraper that extracts book data (title, price, stock, rating, URL) from [books.toscrape.com](https://books.toscrape.com), with support for:

- CSV and JSON export
- CLI arguments for pages, delay, file names
- Category scraping (e.g., Fiction, Science)
- Progress bars via `tqdm`

---

## 🚀 Features

- Scrape entire catalog or specific categories
- Export results to `.csv` and `.json`
- Rate-limited requests (default: 0.5s delay)
- Fully CLI-driven with `argparse`
- Modular and extensible

---

## 📦 Installation

```bash
git clone https://github.com/Bulwark-Inc/Learning-Lab.git/level_one/web-scrapper
cd web-scraper

# Ensure you have your python environment (venv, virtualenv, poetry etc.) set up! e.g
python3 -m venv venv
venv/Scripts/activate       # windows
source venv/bin/activate    # unix-based

pip install -r requirements.txt
```

## 🛠️ Usage

```bash
# Basic scraping:
python -m bookscraper --pages 5

# With JSON export:
python -m bookscraper --pages 10 --json books.json

# Scrape by category (e.g. Fiction):
python -m bookscraper --category fiction

# Custom output file:
python -m bookscraper --csv books.csv --json books.json
```