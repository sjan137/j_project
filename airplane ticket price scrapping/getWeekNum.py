from datetime import timedelta, date, datetime

# today_wday = time.localtime().tm_wday + 1
# today_wday = datetime.datetime.weekday()
# tomorrow = timedelta(days=1)

# today = date.today()  # 오늘 날짜
# today_wday = (today.weekday() + 1) % 7 + 1  # 오늘 요일(숫자) - date 모듈은 월요일이 0, 일요일이 6이고, 네이버는 일요일이 1, 토요일이 7이기 때문에.

# 이번 달 중 몇 주차인지 구하기
def get_date(y, m, d):
    s = f'{y:04d}-{m:02d}-{d:02d}'
    return datetime.strptime(s, '%Y-%m-%d')

# 내가 구하려는 것은 현실의 주차 세는 방법이 아님.
def get_week_num(y, m, d):
    target = get_date(y, m, d)
    firstday = target.replace(day=1)
    if firstday.weekday() == 6:
        origin = firstday
    else:
        origin = firstday - timedelta(days=firstday.weekday() + 1)
    return (target - origin).days // 7 + 1

def weekNum(day):
    return get_week_num(day.year, day.month, day.day)

def weekDay(day):
    return (day.weekday() + 1) % 7 + 1



# 현실에서 월별 주차를 세는 방법(목요일을 기준으로 1일이 목금토에 있다면 그 다음주부터가 1주차, 일월화수에 있다면 그 주가 1주차)
# def get_week_no(y, m, d):
#     target = get_date(y, m, d)
#     firstday = target.replace(day=1)
#     if firstday.weekday() == 6:
#         origin = firstday
#     elif firstday.weekday() < 3:
#         origin = firstday - timedelta(days=firstday.weekday() + 1)
#     else:
#         origin = firstday + timedelta(days=6-firstday.weekday())
#     return (target - origin).days // 7 + 1