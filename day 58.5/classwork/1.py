list1 = ["Tornike", "Demetre", "Giorgi", "Dachi,", "Toma", "Elene", "Nia"]

list2 = list(filter(lambda a: len(a)>5,list1))

print(list2)