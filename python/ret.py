x = {}
list = (input("enter list of numbers "))
list = list.split(",")
for i in range(0,len(list)):
    if list[i] in x:
        x[list[i]] = x[list[i]] + 1
    else:
        x[list[i]] = 1


print(x)

for keys in x.keys():
    print(keys)