import google.generativeai as genai
import os
import textwrap
from dotenv import load_dotenv
load_dotenv()

def to_markdown(text):
    text = text.replace('•', '  *')
    return textwrap.indent(text, '> ', predicate=lambda _: True)

def call_gemini(query: str):
    try:
        GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")

        genai.configure(api_key=GEMINI_API_KEY)

        model = genai.GenerativeModel('gemini-pro')

        response = model.generate_content(query)
    except Exception as e:
        print(e)
        response = "Please try again"

    return response.text



