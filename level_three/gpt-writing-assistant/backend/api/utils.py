from openai import OpenAI
from django.conf import settings

client = OpenAI(api_key=settings.OPENAI_KEY)

def chat(prompt):
    res = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )
    
    return res.choices[0].message.content