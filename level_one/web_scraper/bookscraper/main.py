from .utils import scrape_books, save_to_csv, save_to_json
import argparse

def run():
    parser = argparse.ArgumentParser(description="📚 Book scraper for books.toscrape.com")
    parser.add_argument("--pages", type=int, default=3, help="Number of pages to scrape")
    parser.add_argument("--delay", type=float, default=0.5, help="Delay between requests")
    parser.add_argument("--csv", type=str, default="output_books.csv", help="CSV output file")
    parser.add_argument("--json", type=str, help="Optional JSON output file")
    parser.add_argument("--category", type=str, help="Optional category (e.g., fiction, science)")

    args = parser.parse_args()

    books = scrape_books(pages=args.pages, delay=args.delay, category=args.category)

    if books:
        save_to_csv(books, args.csv)
        if args.json:
            save_to_json(books, args.json)
        print("✅ Done.")
    else:
        print("⚠️ No books scraped.")
