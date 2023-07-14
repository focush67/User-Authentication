list = [-1,-1,-1,-1]

max = 0
currentSum = 0

for start in range(0,len(list)-1):
    for end in range(start+1,len(list)):
        for i in range(start,end+1):
            currentSum = currentSum + list[i]
        if currentSum > max:
            max = currentSum
        currentSum = 0
print("MAX : ",max)