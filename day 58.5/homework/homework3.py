list1 = ['Tornike','demetre','tornicious','demucha','Tonike','Gurami']
print(list(filter(lambda i: i == i[::-1], list1)))