# 🤖 AI Chatbot – Django + React + OpenAI

A fullstack chatbot built with:
- **Django REST Framework** as the backend API
- **OpenAI API** for generating responses
- **React + TailwindCSS** for the frontend UI

---

## 🧠 Features

- Chat UI that talks to GPT via Django
- React + Axios frontend
- Token-auth protected API endpoint
- Environment-based secrets using `.env`
- Deployed-ready with Render + Vercel config

---

## 🛠️ Tech Stack

| Layer       | Tools Used            |
|-------------|------------------------|
| Frontend    | React, TailwindCSS, Vite |
| Backend     | Django, DRF, OpenAI SDK |
| Auth        | DRF Token Auth (or JWT) |
| Dev Tools   | Postman, .env, Axios    |
| Deployment  | Render (backend), Vercel (frontend) |

---

## 📦 Setup Instructions

### 1. Backend (Django)

```bash
git clone https://github.com/Bulwark-Inc/Learning-Lab.git/level_two/ai-chatbot
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt

# Add your OpenAI API key
cp .env.example .env

# Add your Django Secret key
# run this to create a new django secret key
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())" # add to ur .env

python manage.py migrate
python manage.py runserver
```

### 2. Frontend (React)
```bash
cd frontend
npm install
npm run dev
```

## API Endpoint

```bash
POST /api/chat/
Content-Type: application/json
Authorization: Token <your_token>

{
  "prompt": "Tell me a joke"
}
```

### Response

```bash
{
  "response": "Why don't skeletons fight each other? They don't have the guts."
}
```

---

## How to get Token

### Create user
```bash
from django.contrib.auth.models import User
user = User.objects.create_user(username="shiloh", password="your_password_here")

```
### Generate a token for your user 
```bash
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User

user = User.objects.get(username="yourusername")
Token.objects.create(user=user)
```
- Ensure to copy token and pasted in **Authorization header**

---


### Spoiler
"Because they have no guts!" 😜

📢 Share + Feedback
Feel free to give feedback, clone the repo, or use it for your own learning!

Reddit: /u/ChemicalWear6153
GitHub: @Bulwark-Inc