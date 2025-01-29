f=open('final.csv')
x = f.read().split('\n')
main=[]
f.close()
for i in x:
    y=i.split(',')
    main.append(y)
rank_count=0
f=open('final_result.json','w')
for i in main:
    rank_count+=1
    f.write('{\n\t"Rank": "'+str(rank_count)+'",\n\t"RegNo": "'+str(i[0])+'",\n\t"Name": "'+str(i[1])+'",\n\t"Branch": "B.Tech CSE",\n\t"Section": "'+str(i[2])+'",\n\t"CGPA": "'+str(i[3])+'"\n},\n')
f.close()