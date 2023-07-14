# str = input("ENTER A WORD ")
# index = -1
# for i in range(0,len(str)):
#     ch = str[i]
#     if ch == 'a' or ch == 'e' or ch == 'i' or ch == 'o' or ch == 'u':
#         index = i
#         break

# reversed = str[-1:i-1:-1]
# reversed = reversed + "py"
# print(reversed)

def myFunc1(a):
    print("inside f1")
    print("values ",a)
    a[0] = 'L'
    print("new" , a)
    print("exiting")

n = "XYZ"
print("calling f1 now")
myFunc1(n)
print("back from f1")


