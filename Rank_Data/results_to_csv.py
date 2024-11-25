f=open('list.csv')
x = f.read().split('\n')
main=[]
f.close()
for i in x:
    y=i.split(',')
    main.append(y)
f=open('UMS_api_results.csv')
x = f.read().split('\n')
main2=[]
f.close()
for i in x:
    y=i.split(',')
    main2.append(y)
f=open('final.csv','a')
branch1='Bachelor of Technology (Computer Science and Engineering - Artificial Intelligence and Machine Learning)'
branch2='Bachelor of Technology (Computer Science and Engineering - Decision Science & Machine Learning)'
branch3='Bachelor of Technology (Computer Science and Engineering)'
branch4='Bachelor of Technology (Computer Science and Engineering) (Honours)'
branch5='Bachelor of Technology (Information Technology)'
c=0
for i in main:
    if i[4]==branch1:
        branch='B.Tech AI-ML'
    elif i[4]==branch2:
        branch='B.Tech DS-ML'
    elif i[4]==branch3:
        branch='B.Tech CSE'
    elif i[4]==branch4:
        branch='B.Tech CSE-HONOURS'
    elif i[4]==branch5:
        branch='B.Tech IT'
    c+=1
    reg = i[0]
    cgpa=0
    for j in main2:
        if j[0]==reg:
            cgpa = j[1]
    print(c,cgpa)
    f.write(str(i[0])+','+str(i[1])+','+str(i[2])+','+str(i[3])+','+branch+','+'UG'+','+str(i[6])+','+str(i[7])+','+str(i[8])+','+str(i[9])+','+str(i[10])+','+str(i[11])+','+str(cgpa)+'\n')
