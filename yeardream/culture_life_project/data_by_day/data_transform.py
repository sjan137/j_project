import pandas as pd
import plotly.express as px
import win32com.client
import os
import glob


# xls 파일을 xlsx로 변환하여 저장
o = win32com.client.Dispatch("Excel.Application")
o.Visible = False
input_dir = r"xls 파일이 있는 절대 경로"
output_dir = r"xlsx 파일을 저장할 절대 경로"
files = glob.glob(input_dir + "/문화_공연_일별_데이터(190101~211109).xls")

for filename in files:
    file = os.path.basename(filename)
    output = output_dir + '/' + file.replace('.xls','.xlsx')
    wb = o.Workbooks.Open(filename)
    wb.ActiveSheet.SaveAs(output,51)
    wb.Close(True)


# 변환 저장된 xlsx파일을 읽어오기
df = pd.read_excel('파일이 있는 절대 경로\문화_공연_일별_데이터(190101~211109).xlsx', header=5)  # 해당 파일의 경우, 컬럼이 5번째 행부터 시작됨.
df.columns = ['기간', '공연건수(건)', '공연건수(%)', '개막편수(편)', '개막편수(%)', 
            '상연횟수(회)', '상연횟수(%)', '매출액(천원)', '매출액(%)', '예매수(건)', '예매수(%)']  # 컬럼명 수정
new_df = df[(df['기간'] != '합계')][['기간', '예매수(건)', '매출액(천원)']]  # 필요한 로우 및 컬럼만 추출
new_df.to_excel('파일을 저장할 절대 경로\문화_공연_일별_데이터(190101~211109).xlsx', index=False)  # 수정된 데이터프레임을 엑셀 파일로 다시 저장


# plotly를 통해 그래프를 그리고, html 파일로써 저장
fig = px.line(new_df, x="기간", y="예매수(건)")
fig.write_html('그래프 파일을 저장할 절대 경로\performance.html')