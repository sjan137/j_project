import pymysql
from flask import Flask, render_template
from models import Project
from db_connect import db

# import pandas as pd

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://team4:1234@team4-db.ceb7xrkgnfi5.ap-northeast-2.rds.amazonaws.com:3306/project'
# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:1234@localhost:3306/project'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)


@app.route('/')
def home():
    # data = db.session.query(Project).all()
    weeks = db.session.query(Project.DATE).all()
    data1 = db.session.query(Project.RIDE).all()

    for i in range(len(weeks)):
        weeks[i] = weeks[i][0]

    for i in range(len(data1)):
        data1[i] = data1[i][0]

    # return render_template('home.html', metro_list = data1)
    return render_template('linegraph.html', weeks = weeks, data1 = data1)


# metro = pd.read_csv('metro3.csv', encoding = 'CP949')
# labels = metro['DATE'].tolist()
# values = metro['RIDE'].tolist()

# @app.route("/metro")
# def metro_chart():
#     return render_template("metro_chart.html", labels = labels, values = values)

if __name__ == '__main__':
    app.run(port = 8000, debug=True)