from flask import Flask, send_from_directory
import os

BASE = os.path.dirname(os.path.abspath(__file__))
HTML_DIR = os.path.join(BASE, "html")
CSS_DIR = os.path.join(BASE, "css")
JS_DIR = os.path.join(BASE, "js")

app = Flask(__name__)

@app.route("/")
def home():
    return send_from_directory(HTML_DIR, "landing.html")
@app.route("/<path:filename>")
def serve_html(filename):
    return send_from_directory(HTML_DIR, filename)

@app.route("/css/<path:filename>")
def serve_css(filename):
    return send_from_directory(CSS_DIR, filename)

@app.route("/js/<path:filename>")
def serve_js(filename):
    return send_from_directory(JS_DIR, filename)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8080))
    app.run(host="0.0.0.0", port=port)