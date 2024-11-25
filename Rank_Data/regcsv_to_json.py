f=open('sample.csv')
x = f.read().split('\n')
f.close()
f=open('data.json','w')
for i in x:
    f.write('{\n\t"RegNo": '+str(i)+'\n},\n')
f.close()