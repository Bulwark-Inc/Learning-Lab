from django.urls import path
from .views import RewriteView, SummarizeView

urlpatterns = [
    path('rewrite/', RewriteView.as_view(), name="rewrite"),
    path('summarize/', SummarizeView.as_view(), name="summarize"),
]
