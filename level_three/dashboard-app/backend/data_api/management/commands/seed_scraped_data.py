from django.core.management.base import BaseCommand
from data_api.models import ScrapedData
from faker import Faker
import random
from datetime import timedelta, date

fake = Faker()

SOURCES = ['Reddit', 'Hacker News', 'Medium', 'TechCrunch', 'Ars Technica']

def random_date():
    today = date.today()
    return today - timedelta(days=random.randint(0, 30))

class Command(BaseCommand):
    help = 'Seed the ScrapedData model with test data'

    def handle(self, *args, **kwargs):
        ScrapedData.objects.all().delete()
        for _ in range(50):
            ScrapedData.objects.create(
                title=fake.sentence(nb_words=6),
                summary=fake.paragraph(nb_sentences=3),
                source=random.choice(SOURCES),
                date_scraped=random_date()
            )
        self.stdout.write(self.style.SUCCESS('✅ Seeded 50 entries into ScrapedData'))
