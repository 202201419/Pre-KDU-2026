list=[]
map={}
st=set()

for i in range(1,10):
    x=input()

    map[x]= map.get(x,0)+1
    st.add(x)
    list.append(x)

print("List: ",list)
print("Set: ",st)
print("Dictionary: ",map)