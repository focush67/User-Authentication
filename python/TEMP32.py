# Karparekar Number

# 45 = 45^2 = 2025 = 20 + 25 = 45 

number = int(input("ENTER A NUMBER : "))
square = number**2
temp = square
temp2 = number
numberDigits = 0
while temp2 != 0 :
    numberDigits = numberDigits+1
    temp2 = temp2 // 10

digits = 0
while temp != 0 :
    digits = digits+1
    temp = temp // 10

part1 = square % (int)(pow(10,numberDigits))
part2 = (int)(square / (int)(pow(10,numberDigits)))

print(square)
print(part1)
print(part2)
print(1/0)

if part2 + part1 == number :
    print("KARPAREKAR ")
else:
    print("NOT KARPAREKAR")

# try - catch block => 