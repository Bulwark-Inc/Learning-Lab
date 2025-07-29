from django.db import models

class ScrapedData(models.Model):
    title = models.CharField(max_length=255)
    summary = models.TextField()
    source = models.CharField(max_length=100)
    date_scraped = models.DateField()
    
    def __str__(self):
        return self.title
