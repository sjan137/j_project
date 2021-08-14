from datetime import timedelta, date, datetime
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import getWeekNum


days_to_search = []
week = ['일', '월', '화', '수', '목', '금', '토']
for i in range(30):
    day_after = date.today() + timedelta(days=i+3)
    days_to_search.append(day_after)

def weekNum(day):
    return getWeekNum.get_week_num(day.year, day.month, day.day)

def weekDay(day):
    return (day.weekday() + 1) % 7 + 1

today_month = date.today().month

chromedriver = "C:/Users/안성진/Downloads/chromedriver_win32/chromedriver.exe"
with webdriver.Chrome(chromedriver) as driver:
    driver.implicitly_wait(10)
    driver.get('https://flight.naver.com/flights/')
    driver.find_element_by_xpath("/html/body/div/div/div[2]/div[1]/div[1]/ul/li[1]/a/span").click()  # 편도 항목 클릭
    
    # 김포공항과 김해공항 선택
    driver.find_element_by_xpath("/html/body/div/div/div[2]/div[1]/fieldset/div[1]/div/div[1]/a[2]").click()
    driver.find_element_by_xpath('//*[@id="l_1"]/div/div[1]/div[2]/table[1]/tbody/tr[1]/td[1]/a').click()
    driver.find_element_by_xpath("/html/body/div/div/div[2]/div[1]/fieldset/div[1]/div/div[2]/a[2]").click()
    driver.find_element_by_xpath('//*[@id="l_1"]/div/div[2]/div[2]/table[1]/tbody/tr[1]/td[2]/a').click()

    # 날짜 선택
    today_price = []
    flag = 0

    for day in days_to_search:
        driver.find_element_by_xpath('//*[@id="l_8"]/div[1]/div/div[1]/a').click()
        week_num = weekNum(day)
        week_day = weekDay(day)

        if day.month == today_month + 1 and not flag:  # 달이 바뀔 경우 1번만. 한 번 바뀐 상태에서 다시 날짜칸을 누르면 바뀐 달로 고정되기 때문에.
            flag += 1
            driver.find_element_by_xpath(f'//*[@id="l_8"]/div[1]/div/div[3]/div/div[2]/div[1]/div/div[2]/div[2]/table/tbody/tr[{week_num}]/td[{week_day}]').click()
        else: driver.find_element_by_xpath(f'//*[@id="l_8"]/div[1]/div/div[3]/div/div[2]/div[1]/div/div[1]/div[2]/table/tbody/tr[{week_num}]/td[{week_day}]').click()
        # //*[@id="l_8"]/div[1]/div/div[3]/div/div[2]/div[1]/div/div[1]/div[2]/table/tbody/tr[3]/td[1]  # 2021.08.15 일
        # //*[@id="l_8"]/div[1]/div/div[3]/div/div[2]/div[1]/div/div[2]/div[2]/table/tbody/tr[2]/td[1]  # 2021.09.05 일

        # 항공권 검색 버튼 클릭
        driver.find_element_by_xpath('//*[@id="searchArea"]/a').click()

        # 티켓값 사져오기
        # 정렬 항목 선택(낮은 가격순으로 정렬할 수 있도록)
        driver.find_element_by_xpath('//*[@id="content"]/div[2]/div/div[3]/div[1]').click()
        driver.find_element_by_xpath('//*[@id="content"]/div[2]/div/div[3]/div[1]/div/ul/li[1]').click()
        for i in range(1,2):
            lowest_dep_time = driver.find_element_by_xpath(f'//*[@id="content"]/div[2]/div/div[4]/ul/li[{i}]/div[2]/div/div/dl[1]/dd[2]')
            lowest_price = driver.find_element_by_xpath(f'//*[@id="content"]/div[2]/div/div[4]/ul/li[{i}]/div[4]/div/div/div[1]/span[1]')
            today_price.append([day, week[week_day-1], lowest_dep_time.text, lowest_price.text])
    
    print(today_price)