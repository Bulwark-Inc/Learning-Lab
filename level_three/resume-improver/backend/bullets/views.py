from .utils import chat
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class ImproveBulletView(APIView):
    def post(self, request):
        bullet = request.data.get("bullet")
        level = request.data.get("level", "Mid")

        if not bullet:
            return Response({"error": "Bullet point is required."}, status=status.HTTP_400_BAD_REQUEST)

        prompt = f"Improve this resume bullet for a {level}-level role:\n\n'{bullet}'\n\nMake it more impactful and results-driven."

        try:
            completion = chat(prompt)
            improved = completion.choices[0].message.content.strip()
            return Response({"improved": improved})

        except Exception as e:
            return Response({"error": str(e)}, status=500)

class ScoreBulletView(APIView):
    def post(self, request):
        bullet = request.data.get("bullet")

        if not bullet:
            return Response({"error": "Bullet point is required."}, status=400)

        prompt = (
            f"Rate this resume bullet on a scale of 1 to 10 and give 2 quick improvement tips:\n\n"
            f"'{bullet}'\n\n"
            "Respond in JSON format: {\"score\": int, \"tips\": [\"tip1\", \"tip2\"]}"
        )

        try:
            completion = chat(prompt)
            response_text = completion.choices[0].message.content.strip()
            import json
            result = json.loads(response_text)
            return Response(result)

        except Exception as e:
            return Response({"error": "Failed to parse response. " + str(e)}, status=500)

class TailorBulletView(APIView):
    def post(self, request):
        bullet = request.data.get("bullet")
        job_description = request.data.get("job_description")

        if not bullet or not job_description:
            return Response({"error": "Bullet and job description are required."}, status=400)

        prompt = (
            f"Tailor this resume bullet to better match the following job description. "
            f"Preserve original meaning but align the tone, keywords, and responsibilities:\n\n"
            f"Bullet:\n'{bullet}'\n\n"
            f"Job Description:\n{job_description}"
        )

        try:
            completion = chat(prompt)
            tailored = completion.choices[0].message.content.strip()
            return Response({"tailored": tailored})

        except Exception as e:
            return Response({"error": str(e)}, status=500)
