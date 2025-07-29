from rest_framework import viewsets
from .models import ScrapedData
from .serializers import ScrapedDataSerializer
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework import status
from .serializers import RegisterSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = [AllowAny]
    serializer_class = RegisterSerializer

class ScrapedDataViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = ScrapedData.objects.all().order_by('-date_scraped')
    serializer_class = ScrapedDataSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['source', 'date_scraped']
    search_fields = ['title', 'summary']
    ordering_fields = ['date_scraped']
