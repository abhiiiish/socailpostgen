from flask import Flask, render_template, request, jsonify, send_file
from flask_cors import CORS
from base64 import b64decode
import openai
import os
from PIL import Image


app = Flask(__name__)


openai.api_key = os.environ.get("OPENAI_API_KEY")


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate', methods=['POST'])
def generate():
    user_input = request.form['user_input']

    # Generate hashtags
    def generate_hashtags(prompt):
        response = openai.Completion.create(
            engine="text-davinci-003",
            prompt=prompt,
            max_tokens=300,
            n=5,
            stop=None,
            temperature=0.5,
            frequency_penalty=0.2,
            presence_penalty=0.0,
        )

        hashtags = [choice.text.strip() for choice in response.choices]
        hashtags_str = " ".join(hashtags)  # Convert hashtags to a formatted string
        return hashtags_str


    hashtags_prompt = f"Generate hashtags for: {user_input}"
    hashtags = generate_hashtags(hashtags_prompt)

    # Generate caption
    def generate_caption(prompt):
        response = openai.Completion.create(
            engine="text-davinci-003",
            prompt=prompt,
            max_tokens=300,
            n=1,
            stop=None,
            temperature=0.5,
        )

        message = response.choices[0].text.strip()
        return message

    caption_prompt = f"Generate caption, with emoji init for: {user_input}"
    caption = generate_caption(caption_prompt)


    def generate_content(prompt):
        response = openai.Completion.create(
           engine='text-davinci-003',
           prompt=prompt,
           max_tokens=700,  # Adjust as needed
           temperature=0.7,  # Adjust for desired level of creativity
           n=1,  # Adjust for the number of content samples to generate
           stop=None  # You can specify a stopping condition if needed
        )

        content = response.choices[0].text.strip()
        return content
    
    content_prompt = f"Write a Post for : {user_input}"
    content = generate_content(content_prompt)




    return render_template('result.html', post=content, hashtags=hashtags, caption=caption)


@app.errorhandler(Exception)
def handle_error(e):
    # Return JSON response for any unhandled exception
    response = jsonify(error=str(e))
    response.status_code = 500
    return response

if __name__ == '__main__':
    CORS(app) 


