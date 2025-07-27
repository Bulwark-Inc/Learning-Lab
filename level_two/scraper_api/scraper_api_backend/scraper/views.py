import logging
import re
import requests
from bs4 import BeautifulSoup
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Setup basic logging
logger = logging.getLogger(__name__)
logging.basicConfig(level=logging.INFO)

def is_valid_url(url):
    pattern = re.compile(
        r'^(http|https)://[^\s/$.?#].[^\s]*$',
        re.IGNORECASE
    )
    return re.match(pattern, url) is not None


class ScrapeView(APIView):
    def post(self, request):
        url = request.data.get("url")
        limit = int(request.data.get("limit", 10))  # Optional: limit number of links

        if not url or not is_valid_url(url):
            logger.warning("Invalid or missing URL")
            return Response({"error": "Please provide a valid URL."}, status=400)

        try:
            logger.info(f"Scraping: {url}")
            response = requests.get(url, timeout=8)
            soup = BeautifulSoup(response.text, "html.parser")

            title = soup.title.string.strip() if soup.title else "No title"
            links = [a['href'] for a in soup.find_all('a', href=True)]

            return Response({
                "title": title,
                "links": links[:limit],
                "total_links_found": len(links)
            })

        except requests.exceptions.RequestException as e:
            logger.error(f"Request error: {e}")
            return Response({"error": "Failed to fetch the URL."}, status=502)
        except Exception as e:
            logger.exception("Unexpected error during scraping")
            return Response({"error": str(e)}, status=500)
