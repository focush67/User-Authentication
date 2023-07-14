
# def push(element , list , top , n):
#     if top == n:
#         print("OVERFLOW")
#         return
#     top = top + 1
#     list.append(element)

# def pop(list , top , n):
#     if(top == n):
#         print("STACK FULL ")
#         return
#     if top == -1:
#         print("UNDERFLOW")
#         return
    
#     value = list[len(list) - 1]
#     list.popItem()
#     top = top-1
#     print(value)

# def display(list):
#     for i in range(0 , len(list)):
#         print(list[i],end="  ")

# n = int(input("ENTER SIZE OF STACK ")) 
# list = []
# t = -1
# for i in range(1,6):
#     choice = int(input("ENTER 1 TO PUSH 2 TO POP "))
#     if(choice == 1):
#         element = int(input("ENTER ELEMENT TO BE PUSHED "))
#         push(element , list , t , n)
#         display(list)
#     else:
#         pop(list , t , n)
#         display(list)





# word = "green vegetables"
# print(word.find('g',2))
# print(word.find('veg',2))
# print(word.find('tab',4,15))
# print(word.find('get',8))

l = ["abc" , [6,7,8] , 3 , "mouse"]
# print(l[3:])
# print(l[:3])
print(l[::2])
print(l[1][6])