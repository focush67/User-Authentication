# figuring out the position of the first vowel

str = input("ENTER STRING : ")

idx = 0
ans = ""
for i in range(0,len(str)):
    ch = str[i]
    if ch == 'a' or ch == 'e' or ch == 'i' or ch == 'o' or ch == 'u':
        idx = i
        break

for i in range(idx,len(str)):
    ans.concat(str[i])

print(ans)



## def fibonacci(number): # number fibonacci
##     # base condition 
##     if number == 0:
##         return 0
##     if number == 1:
##         return 0
##     if number == 2:
##         return 1
##     return fibonacci(number-1) + fibonacci(number-2)

# # n = int(input("ENTER A NUMBER : "))
# # ans = fibonacci(n)
# # print(ans)

# ---------------------------------------------------------------------------------------------------------------------------------------

## def reverseString(sentence , index):
##     if index == 0:
##         return sentence[0]
##     return sentence[index] + reverseString(sentence,index-1)

## st = input("ENTER STRING ")
## r = reverseString(st , len(st) - 1)
## print(r)
## if st == r:
##     print("PALINDROME")
## else:
##     print("NOT PALINDROME")

# ---------------------------------------------------------------------------------------------------------------------------------------


## def reverse_number(number , rev):
##     if number == 0:
##         return rev
    
##     a = number % 10

# #     rev = rev * 10 + a

##     return reverse_number(number // 10 , rev)

## number = int(input("ENTER A NUMBER : "))
## temp = number
## rev = 0
## rev = reverse_number(temp,rev)
## print(rev)

## if rev == number:
##     print("Palindorme")
## else:
##     print("Not palindrome")


# ---------------------------------------------------------------------------------------------------------------------------------------


# def subseq(word , index , n , ans , subsequences):
#     if index >= n:
#         subsequences.append(ans)
#         return

#     subseq(word , index+1 , n , ans + word[index] , subsequences)
#     subseq(word , index+1 , n , ans , subsequences)

# word = input("ENTER A STRING : ")
# list = []
# str = ""

# subseq(word , 0 , len(word) , str , list)

# for i in range(0,len(list)):
#     print(list[i],end="\n")

# print("EMPTY")


# ---------------------------------------------------------------------------------------------------------------------------------------


# Optimised Power

# def power(a , b):
#     if b == 1:
#         return a
#     if b == 0:
#         return 1
    
#     temp = power(a,b//2)

#     if b % 2 == 0:
#         return temp * temp
#     else:
#         return a * temp * temp


# a = int(input("ENTER BASE: "))
# b = int(input("ENTER EXPONENT:"))
# result = power(a,b)
# print("OPTIMISED POWER RETURNED : ",result)


# ---------------------------------------------------------------------------------------------------------------------------------------


# Ways to reach the last cell with obstacles in place

# def fun(grid , currentRow , currentCol , rows , columns):
#     # base case

#     if(currentRow >= rows or currentCol >= columns):
#         return 0
    
#     if(grid[currentRow][currentCol] == 1):
#         return 0
    
#     if(currentCol == columns-1 and currentRow == rows-1):
#         return 1
    
#     rightMove = fun(grid , currentRow , currentCol + 1 , rows , columns)
#     downMove = fun(grid , currentRow + 1 , currentCol , rows , columns)

#     return rightMove + downMove



# grid = [[0,0,0,0] , [1,1,0,0] , [0,0,0,0] , [0,1,0,0]]
# answer = fun(grid,0,0,4,4)

# print("NUMBER OF WAYS : " , answer)


# ---------------------------------------------------------------------------------------------------------------------------------------


# # Sum of digits of a number using recursion

# def recSum(number):
#     if number >= 0 and number <= 9: 
#         # Here sum is called by value , hence changes made in this sum are not reflected in the sum we are passing in the main() method

#         print(sum + number)
#         return number
    
#     sum = sum + number % 10

#     return recSum(number // 10 , sum)

# number = int(input("ENTER A NUMBER : "))
# sum = 0

# recSum(number , sum)

# print("SUM OF DIGITS : ",sum)


# def recSum(number):
#     if number % 10 == number:
#         return number
    
#     x = number % 10 + recSum(number // 10)

#     return x

# num = int(input("ENTER A NUMBER : "))

# ans = recSum(num)

# print("SUM OF DIGITS : ", ans)


# ---------------------------------------------------------------------------------------------------------------------------------------


# Printing the path 

# def path(grid, currentRow, currentColumn, rows, columns, pathString, visited):
#     # Base case: If we reach the destination cell, print the pathString
#     if currentRow == rows - 1 and currentColumn == columns - 1:
#         print(pathString)
#         return

#     # Check if the current cell is within the grid and unvisited
#     if 0 <= currentRow < rows and 0 <= currentColumn < columns and  (visited[currentRow][currentColumn] == False):
#         # Mark the current cell as visited
#         visited[currentRow][currentColumn] = True

#         # Move right and explore
#         path(grid, currentRow, currentColumn + 1, rows, columns, pathString + "R",  visited)

#         # Move down and explore
#         path(grid, currentRow + 1, currentColumn, rows, columns, pathString + "D", visited)

#         # Move left and explore
#         path(grid, currentRow, currentColumn - 1, rows, columns, pathString + "L", visited)

#         # Move up and explore
#         path(grid, currentRow - 1, currentColumn, rows, columns, pathString + "U", visited)

#         # Mark the current cell as unvisited (backtracking)
#         visited[currentRow][currentColumn] = False


# grid = [[0,1,0] , [0,0,0] , [1,0,0] , [0,0,0]]
# currentPath = ""
# visited = [[False,False,False] , [False,False,False] , [False,False,False] , [False,False,False]]

# path(grid,0,0,4,3,currentPath,visited) 


# def recHCF(a , b):
#     if b == 1:
#         return b
#     if b == 0:
#         return a
#     return recHCF(b , a%b)


# a = int(input("ENTER FIRST NUMBER : "))
# b = int(input("ENTER SECOND NUMBER : "))

# c = recHCF(a,b)
# print(c)
# if a >= b:
#     min = b
# else:
#     min = a 

# hcf = -1

# for i in range(1,min+1):
#     if a % i == 0 and b % i == 0:
#         if i > hcf:
#             hcf = i

# print("HCF : ",hcf)
 


# PERMUTATIONS OF A STRING  "ABC" --> "ACB" , "BAC" , "BCA" , "ABC", "CBA" 


# def f(s):
#     t = ""

#     for i in (s):
#         if i.isdigit():
#             t=t+i

#     return t

# s = "PYTHON 3.9"
# Y = f(s)

# print(s,Y,sep="*")

# v = 50
# def change(n):
#     global v
#     v,n = n,v
#     print(v,n,sep="#",end="@")

# change(20)
# print(v)

# print("1")
# def power(b,p):

#     print("2")
#     y = b ** p
#     print("3")
#     return y

# print("4")
# def calcSquare(n):
#     print("5")
#     a = power(n,2)
#     print("6")
#     return a

# print("7")
# n = 5
# print("8")
# result = calcSquare(n) + power(3,3)
# print("9")
# print(result)


# 1
# 4
# 7
# 8
# 5
# 2
# 3
# 6
# 2
# 3
# 9


# p = 5
# def sum(q,r = 2):
#     global p
#     p = r + q**2
#     print(p,sep="#")

# a = 10
# b = 5
# sum(a,b)
# sum(r = 5,q = 1)

# def change(p,q=30):
#     p = p+q
#     q = p-q
#     print(p,"#",q)
#     return p

# r = 150
# s = 100
# r = change(r,s)
# print(r,"#",s)
# s = change(s)

# a = 10
# y = 5

# def myF():
#     global y
#     global a
#     y = a
#     a = 2
#     b = 45
#     print("y=",y,"a=",a)
#     print("a+y=",a+y)
#     return a+y

# print("y=",y,"a=",a)
# x = myF()
# print("y=",y,"a=",a)

# def addSum(x,y,z):
#     print(x+y+z)
#     return x+y+z
    

# x = addSum(10,20,30)

# def alpha(n,string="xyz",k=10):
#     return beta(string)
#     return n

# def beta(string):
#     return string == str(n)

# print(alpha("Valentine's Day"))
# print(beta(string="true"))
# print(alpha(n=5,string="Good-Bye"))

# def root(x,n = 2):
#     result = (int)(x**(1/n))
#     print(result)
# x = int(input("ENTER BASE "))
# y = int(input("ENTER POWER "))

# if y == 0:
#     print(1,end="")
# else:
#     root(x,y)

# n = int(input("ENTER SIZE OF LIST : "))
# list = []
# for i in range(0,n):
#     value = int(input("ENTER YOUR ELEMENT "))
#     list.append(value)

# print("YOUR ARRAY : ",list)
# maxSum = -112121212
# sum = 0
# for i in range(0,n):
#     for j in range(0,i+1):
#         for k in range(j,i+1):
#             sum = sum + list[k]
#             if sum > maxSum:
#                 maxSum = sum
#         sum = 0

    
# print(maxSum)

# def Tot(Number):
#     Sum = 0
#     for C in range(1,Number+1):
#         Sum += C
#     return Sum

# print(Tot(3))
# print(Tot(6))


# a = 10
# b = 20

# def function():
#     a = 20
#     b = 30
#     print("a ",a)
#     print("b ",b)
#     print("a ",a)
#     print("b ",b)


# function()

# def function(a,b,c):
#     return a+b*c

# x = function(2,5,6)
# print(x,end="\n")
# y = function(b=2,c=10,a=1)
# print(y)