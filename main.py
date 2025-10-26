from flask import Flask, render_template

app = Flask(__name__, template_folder='html', static_folder='css')

@app.route('/')
def home():

    return render_template('1.html')

if __name__ == '__main__':

    app.run(debug=True, port=5000)

