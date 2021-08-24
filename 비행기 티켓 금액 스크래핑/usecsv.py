import csv

def opencsv(filename):
    f = open(filename, 'r')
    reader = csv.reader(f)
    output = []
    for i in reader:
        output.append(i)
    f.close()
    return output

def writecsv(filename, the_list):
    with open(filename, 'w', newline='') as f:
        a = csv.writer(f, delimiter=',')
        a.writerows(the_list)

# writecsv('비행기 티켓 금액 스크래핑/tickets.csv', [['date', 'day', 'depart', 'the lowest price']])
# print(opencsv('비행기 티켓 금액 스크래핑/tickets.csv'))