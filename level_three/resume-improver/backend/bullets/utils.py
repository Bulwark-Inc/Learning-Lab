from openai import OpenAI
from django.conf import settings

client = OpenAI(api_key=settings.OPENAI_KEY)

def chat(prompt):
    
    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You're a resume coach."},
            {"role": "user", "content": prompt}
        ]
    )

    return completion