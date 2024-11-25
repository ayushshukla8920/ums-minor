f=open('final_result.csv')
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
    f.write('{\n\t"Rank": "'+str(rank_count)+'",\n\t"RegNo": "'+str(i[0])+'",\n\t"Name": "'+str(i[1])+'",\n\t"Father": "'+str(i[2])+'",\n\t"Mother": "'+str(i[3])+'",\n\t"Branch": "'+str(i[4])+'",\n\t"Program": "'+str(i[5])+'",\n\t"Year": "'+str(i[6])+'",\n\t"Duration": "'+str(i[7])+'",\n\t"Gender": "'+str(i[8])+'",\n\t"Country": "'+str(i[9])+'",\n\t"State": "'+str(i[10])+'",\n\t"Section": "'+str(i[11])+'",\n\t"CGPA": "'+str(i[12])+'"\n},\n')
f.close()