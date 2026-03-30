f= open("c:/Users/Admin/Desktop/kd/python/data.csv","r")

map={}
for i in f:
    parts= i.strip().split(",")
    for j in parts:
        map[j]=map.get(j,0)+1

top3 = sorted(map.items(), key=lambda x: x[1], reverse=True)[:3]
print(top3)

f.close()