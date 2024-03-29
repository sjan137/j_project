from datetime import timedelta, date, datetime
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import getWeekNum
import usecsv
import time

days_to_search = []
week = ['일', '월', '화', '수', '목', '금', '토']
for i in range(5):
    day_after = date.today() + timedelta(days=i+2)
    days_to_search.append(day_after)

today_month = date.today().month
today_price = [[date.today().isoformat()]]

chromedriver = "C:/Users/안성진/Downloads/chromedriver_win32/chromedriver.exe"
with webdriver.Chrome(chromedriver) as driver:
    driver.implicitly_wait(10)
    driver.maximize_window()
    driver.get('https://beta-flight.naver.com/')
    driver.find_element_by_xpath('//*[@id="__next"]/div/div[1]/div[4]/div/div/div[1]/button[2]/i').click()  # 편도 항목 클릭
    
    # 김포공항과 김해공항 선택
    driver.find_element_by_xpath('//*[@id="__next"]/div/div[1]/div[4]/div/div/div[2]/div[1]/button[1]/i').click()
    driver.find_element_by_xpath('//*[@id="__next"]/div/div[1]/div[10]/div[2]/section/section/button[1]').click()
    driver.find_element_by_xpath('//*[@id="__next"]/div/div[1]/div[10]/div[2]/section/section/div/button[1]').click()
    driver.find_element_by_xpath('//*[@id="__next"]/div/div[1]/div[4]/div/div/div[2]/div[1]/button[2]/i').click()
    driver.find_element_by_xpath('//*[@id="__next"]/div/div[1]/div[10]/div[2]/section/section/button[1]').click()
    driver.find_element_by_xpath('//*[@id="__next"]/div/div[1]/div[10]/div[2]/section/section/div/button[3]').click()

    # 날짜 선택
    flag = 0

    for day in days_to_search:
        if not flag: driver.find_element_by_xpath('//*[@id="__next"]/div/div[1]/div[4]/div/div/div[2]/div[2]/button').click()
        else: driver.find_element_by_xpath('//*[@id="__next"]/div/div[1]/div[3]/div/div[1]/div/div/div/div[2]/div[2]/button').click()
        week_num = getWeekNum.weekNum(day)
        week_day = getWeekNum.weekDay(day)
        rel_month = 2 + day.month - datetime.today().month
        # print(rel_month, week_num, week_day)

        if not flag:
            time.sleep(1)
            driver.find_element_by_xpath(f'//*[@id="__next"]/div/div[1]/div[10]/div[2]/div[1]/div[2]/div/div[{rel_month}]/table/tbody/tr[{week_num}]/td[{week_day}]/button/b').click()
        else:
            time.sleep(60)
            driver.find_element_by_xpath(f'//*[@id="__next"]/div/div[2]/div[2]/div[1]/div[2]/div/div[{rel_month}]/table/tbody/tr[{week_num}]/td[{week_day}]/button/b').click()
            
        # 항공권 검색 버튼 클릭
        if not flag:
            driver.find_element_by_xpath('//*[@id="__next"]/div/div[1]/div[4]/div/div/button').click()
            flag += 1
        else: driver.find_element_by_xpath('//*[@id="__next"]/div/div[1]/div[3]/div/div[1]/div/div/div/button/span').click()

        # 티켓값 사져오기
        # 정렬 항목 선택(낮은 가격순으로 정렬할 수 있도록)
        driver.find_element_by_xpath('//*[@id="__next"]/div/div[1]/div[5]/div/div[1]/div/div/button').click()
        driver.find_element_by_xpath('//*[@id="__next"]/div/div[1]/div[5]/div/div[1]/div/div/div/button[1]/span').click()
        for i in range(2,5):
            lowest_dep_time = driver.find_element_by_xpath(f'//*[@id="__next"]/div/div[1]/div[5]/div/div[2]/div[{i}]/div/div[1]/div/div[2]/span[1]/b')
            lowest_price = driver.find_element_by_xpath(f'//*[@id="__next"]/div/div[1]/div[5]/div/div[2]/div[{i}]/div/div[2]/div[1]/b/i')
            today_price.append([day.isoformat(), week[week_day-1], lowest_dep_time.text, lowest_price.text])
    
    print(today_price)

# 스크랩한 데이터를 ticket.csv 파일에 저장. 일종의 DB
# usecsv.writecsv('비행기 티켓 금액 스크래핑/tickets.csv', today_price)
# 이어서 추가로 저장
usecsv.addcsv('비행기 티켓 금액 스크래핑/tickets.csv', today_price)