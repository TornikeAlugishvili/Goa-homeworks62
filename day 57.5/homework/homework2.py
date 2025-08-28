lstn = [1,2,3,4,5]
map_copy = list(map(lambda i: i * lstn[i], range(len(lstn))))
print(map_copy)