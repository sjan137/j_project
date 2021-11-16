from flask import Flask
from flask.templating import render_template

app = Flask(__name__)

@app.route('/')
@app.route('/index')
def index():
  return render_template('index.html')

@app.route('/consumption')
def consumption():
  data = [
    ("01-01-2020", 1597),
    ("02-01-2020", 1597),
    ("03-01-2020", 1597),
    ("04-01-2020", 1597),
    ("05-01-2020", 1597),
    ("06-01-2020", 1597),
    ("07-01-2020", 1597),
    ("08-01-2020", 1597),
    ("09-01-2020", 1597)
  ]
  labels = [row[0] for row in data]
  values = [row[1] for row in data]
  return render_template('consumption.html', title='소비', labels=labels, values=values)


@app.route('/culture')
def culture():
  return render_template('culture.html', title='문화')


@app.route('/living')
def living():
  return render_template('living.html', title='생활')


@app.route('/metro')
def metro():
  return render_template('metro.html', title='교통')






if __name__ == "__main__":
  app.run(debug=True)