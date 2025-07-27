from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .utils import chat


class RewriteView(APIView):
    def post(self, request):
        text = request.data.get("text")
        if not text:
            return Response({"error": "Text is required"}, status=400)
        
        prompt = f"Rewrite this clearly and concisely:\n{text}"
        try:
            res = chat(prompt)
            return Response({"result": res})
        except Exception as e:
            return Response({"error": str(e)}, status=500)


class SummarizeView(APIView):
    def post(self, request):
        text = request.data.get("text")
        mode = request.data.get("mode", "paragraph")

        if not text:
            return Response({"error": "Text is required"}, status=400)

        prompt = f"Summarize the following in {mode}:\n{text}"
        try:
            res = chat(prompt)
            return Response({"result": res})
        except Exception as e:
            return Response({"error": str(e)}, status=500)
