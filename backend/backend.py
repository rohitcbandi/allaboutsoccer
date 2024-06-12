from flask import Flask
import random

app = Flask(__name__)
#@app.route('/', method == ['GET', 'POST'])
#def home():
#	if request.method == 'POST':
#		return ''
#	else:
#		return 'THIS IS MY FLASK SERVER'

if __name__ == '__main__':
	app.run(host='0.0.0.0', port = 1000, debug=True)
