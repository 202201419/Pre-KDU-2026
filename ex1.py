s1=input()
s2=input()

l1=len(s1)
l2=len(s2)

print("Length 1: ",l1)
print("Length 2: ",l2)

if l1!=l2:
    print("Lengths match: False")
    print("Strings match: False")
else:
    print("Lengths match: True")
    if s1==s2:
        print("Strings match: True")
    else:
        print("Strings match: False")