from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from django.conf import settings
from openai import OpenAI
import os

client = OpenAI(api_key=settings.OPENAI_KEY)

@api_view(['POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def chat_with_gpt(request):
    prompt = request.data.get('prompt')
    if not prompt:
        return Response({"error": "Prompt is required."}, status=status.HTTP_400_BAD_REQUEST)

    try:
        completion = client.chat.completions.create(
            model="gpt-4.1",
            messages=[{"role": "user", "content": prompt}]
        )
        message = completion.choices[0].message.content
        return Response({"response": message})
    
    except Exception as e:
        return Response({"error": str(e)}, status=500)
