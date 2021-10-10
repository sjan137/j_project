import datetime as dt
import json

from flask import Flask, redirect, request, render_template, url_for
import pymongo

import elice_env

app = Flask(__name__)

# 데이터베이스를 연결하는 코드입니다. 수정하지 마세요!
conn = pymongo.MongoClient("mongodb://localhost:27017/")

# 지시사항을 참고하여 appeal 데이터베이스, post 컬렉션을 만드세요.
db_appeal = conn.get_database("appeal")
col_post = db_appeal.get_collection("post")

# 엘리스 환경에서 생성한 컬렉션에 대해 데이터를 추가하는 구문입니다. 수정하지 마세요!
elice_env.set_mongodb(col_post)

# 지시사항을 참고하여 상소문을 작성하고, 작성된 상소문을 확인하는 URL("/")을 완성하세요.
@app.route('/')
def index():
    data = col_post.find({})
    return render_template('index.html', input_data=data)

# 지시사항을 참고하여 특정 해시태그가 포함된 상소문을 확인하는 URL("/hashtag/<hashtag>")을 완성하세요.
@app.route('/hashtag/<hashtag>')
def get_hash_tag(hashtag):
    data = col_post.find({'hashTags': hashtag})
    return render_template('hashtag.html', hash_tag=hashtag, input_data=data)


# 지시사항을 참고하여 상소문을 등록하는 URL("/letter")을 완성하세요.
@app.route('/letter', methods=["POST"])
def create_letter():
    data = {
        'title': request.form.get("title"),
        'author': request.form.get("author"),
        'createAt': dt.datetime.now().strftime("%Y년 %m월 %d일 %H시 %M분"),
        'letter': request.form.get("letter"),
        'hashTags': request.form.get("hashTags").strip().split(',')
    }
    result = col_post.insert_one(data)
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
