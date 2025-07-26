import requests
from bs4 import BeautifulSoup
import csv
import json
import argparse
from tqdm import tqdm
import time
import os

BASE_URL = "https://books.toscrape.com/catalogue/page-{}.html"
HOME_URL = "https://books.toscrape.com/"
DEFAULT_PAGES = 3

def parse_rating(tag):
    classes = tag.get("class", [])
    ratings = ['One', 'Two', 'Three', 'Four', 'Five']
    for i, r in enumerate(ratings, 1):
        if r in classes:
            return i
    return None

def scrape_books(pages=DEFAULT_PAGES, delay=0.5):
    books = []
    for page in tqdm(range(1, pages + 1), desc="Scraping Pages", unit="page"):
        res = requests.get(BASE_URL.format(page))
        if res.status_code != 200:
            print(f"⚠️ Failed to load page {page}")
            continue

        soup = BeautifulSoup(res.text, "html.parser")
        items = soup.select('.product_pod')

        for item in items:
            title = item.h3.a['title']
            price = item.select_one('.price_color').text.strip()
            stock = item.select_one('.availability').text.strip()
            rating = parse_rating(item.select_one('.star-rating'))
            relative_url = item.h3.a['href']
            full_url = HOME_URL + "catalogue/" + relative_url.replace('../../../', '')

            books.append({
                'title': title,
                'price': price,
                'availability': stock,
                'rating': rating,
                'url': full_url
            })

        time.sleep(delay)

    return books

def save_to_csv(data, filename):
    print(f"💾 Saving {len(data)} records to CSV: {filename}")
    with open(filename, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=data[0].keys())
        writer.writeheader()
        writer.writerows(data)

def save_to_json(data, filename):
    print(f"💾 Saving {len(data)} records to JSON: {filename}")
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2)

def parse_args():
    parser = argparse.ArgumentParser(description="📚 Scrape book data from books.toscrape.com")
    parser.add_argument("--pages", type=int, default=DEFAULT_PAGES, help="Number of pages to scrape")
    parser.add_argument("--delay", type=float, default=0.5, help="Delay between page requests (seconds)")
    parser.add_argument("--csv", type=str, default="output_books.csv", help="CSV output file name")
    parser.add_argument("--json", type=str, help="Optional JSON output file name")
    return parser.parse_args()

if __name__ == "__main__":
    args = parse_args()
    books = scrape_books(pages=args.pages, delay=args.delay)

    if books:
        save_to_csv(books, args.csv)
        if args.json:
            save_to_json(books, args.json)
        print("✅ Done.")
    else:
        print("⚠️ No books were scraped.")
