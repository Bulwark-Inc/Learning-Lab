from django.urls import path
from .views import ImproveBulletView, ScoreBulletView, TailorBulletView

urlpatterns = [
    path('improve/', ImproveBulletView.as_view(), name='improve-bullet'),
    path('score/', ScoreBulletView.as_view(), name='score-bullet'),
    path('tailor/', TailorBulletView.as_view(), name='tailor-bullet'),
]
