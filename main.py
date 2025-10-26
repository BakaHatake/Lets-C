from flask import Flask, render_template
import os

app = Flask(
    __name__,
    template_folder='html',
    static_folder='css'
)

@app.route('/')
def home():
    return render_template('1.html')

@app.route('/')
def serve_static(filename):
    return app.send_static_file(filename)

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 8080))
    app.run(host="0.0.0.0", port=port, debug=True)
