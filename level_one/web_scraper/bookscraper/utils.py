import requests
from bs4 import BeautifulSoup
import csv
import json
from tqdm import tqdm
import time

BASE_URL = "https://books.toscrape.com/catalogue/page-{}.html"
HOME_URL = "https://books.toscrape.com/"

def parse_rating(tag):
    classes = tag.get("class", [])
    ratings = ['One', 'Two', 'Three', 'Four', 'Five']
    for i, r in enumerate(ratings, 1):
        if r in classes:
            return i
    return None

def get_category_url(name):
    res = requests.get("https://books.toscrape.com/")
    soup = BeautifulSoup(res.text, "html.parser")
    links = soup.select('.side_categories a')
    
    for link in links:
        label = link.text.strip().lower()
        href = link['href']
        if name.lower() in label:
            return "https://books.toscrape.com/" + href.replace("index.html", "").strip()
    
    return None

def scrape_books(pages=3, delay=0.5, category=None):
    books = []
    
    if category:
        category_url = get_category_url(category)
        if not category_url:
            print(f"⚠️ Category '{category}' not found.")
            return []
        base = category_url + "page-{}.html"
    else:
        base = BASE_URL

    for page in tqdm(range(1, pages + 1), desc="Scraping Pages", unit="page"):
        res = requests.get(base.format(page))
        if res.status_code != 200:
            break

        soup = BeautifulSoup(res.text, "html.parser")
        items = soup.select('.product_pod')
        if not items:
            break

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
