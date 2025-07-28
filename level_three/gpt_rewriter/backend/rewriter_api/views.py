from django.conf import settings
from openai import OpenAI
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

client = OpenAI(api_key=settings.OPENAI_KEY)

class RewriteView(APIView):
    def post(self, request):
        text = request.data.get("text", "")
        mode = request.data.get("mode", "default")

        if not text:
            return Response({"error": "Missing text input"}, status=400)

        prompt = f"Rewrite the following text in a '{mode}' tone:\n\n{text}"

        try:
            response = client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": "You are a helpful writing assistant."},
                    {"role": "user", "content": prompt}
                ],
                temperature=0.7,
                max_tokens=400
            )

            rewritten = response.choices[0].message.content.strip()

            return Response({"rewritten": rewritten}, status=200)

        except Exception as e:
            return Response({"error": str(e)}, status=500)
