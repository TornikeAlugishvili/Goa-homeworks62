number1 = 1
number2 = int(input("enter number: "))

for i in range(1,number2, 4):
    number1 *= i
    print(number1)