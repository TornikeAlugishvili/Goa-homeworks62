list1 = [1,2,3,4,5,6,7,8,9,10]
print(list(filter(lambda i: list1.index(i) % 2 == 0, list1)))