number = int(input("enter number: "))
number2 = int(input("enter number2: "))
number3 = 1

for i in range(number,number2):
    if i % 2 == 0:
        number3 += i
print(number3)