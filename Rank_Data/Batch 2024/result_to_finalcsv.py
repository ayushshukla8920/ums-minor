f = open('results_sample.csv')
g = open('refined_data.csv')
data1 = f.read()
data2 = g.read()
data1_1 = data1.split('\n')
data2_2 = data2.split('\n')
data1 = []
data2 = []
for i in data1_1:
    data1.append(i.split(','))
for i in data2_2:
    data2.append(i.split(','))
f.close()
g.close()
f = open('final.csv','a')
for i in range(len(data1)):
    a =data1[i][0]+','+data2[i][2]+','+data2[i][0]+','+data1[i][1]+'\n'
    f.write(a)