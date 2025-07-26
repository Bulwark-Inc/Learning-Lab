from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.conf import settings
from openai import OpenAI

client = OpenAI(api_key=settings.OPENAI_KEY)

@api_view(['POST'])
@permission_classes([AllowAny])  # Change to IsAuthenticated later if you use token auth
def summarize_text(request):
    text = request.data.get('text', '')
    mode = request.data.get('mode', 'paragraph')

    if not text:
        return Response({"error": "No text provided"}, status=400)

    if mode == 'bullet':
        prompt = f"Summarize the following in 3 concise bullet points:\n\n{text}"
    else:
        prompt = f"Summarize this clearly in one paragraph:\n\n{text}"

    try:
        res = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}]
        )
        summary = res.choices[0].message.content.strip()
        return Response({"summary": summary})
    except Exception as e:
        return Response({"error": str(e)}, status=500)
