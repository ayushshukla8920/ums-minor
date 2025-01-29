f = open('raw_data.csv')
data = f.read()
dlist = data.split('\n')
data = []
final_data = []
for i in dlist:
    data.append(i.split(','))
for i in data:
    a=i[0][-14:-19:-1]
    a=a[::-1]
    final_data.append([a,i[1],i[2]])
f.close()
f = open('refined_data.csv','a')
for i in final_data:
    a=i[0]+','+i[1]+','+i[2]+'\n'
    f.write(a)
f.close()
f = open('RegNo.json','a')
for i in final_data:
    a = '{\n\t"Regno": '+i[1]+'\n},\n'
    f.write(a)
f.close()

