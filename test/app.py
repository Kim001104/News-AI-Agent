from flask import Flask, request, jsonify
from flask_cors import CORS  
from deep_translator import GoogleTranslator

app = Flask(__name__)
CORS(app)  

@app.route("/translate", methods=["POST"])
def translate():
    data = request.json
    text = data.get("text", "")
    target_lang = data.get("target_lang", "en")

    try:
        translated = GoogleTranslator(target=target_lang).translate(text)
        return jsonify({"translated_text": translated})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
