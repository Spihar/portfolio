from flask import Flask, request, jsonify,render_template
app= Flask(__name__)
exps=['bits','sist']
@app.route('/')
def home():
    return render_template('index.html',exps=exps)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')