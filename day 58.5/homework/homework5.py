list1 = [1,2,3,3.14,4,5,6,7,8,9,10,'Tornike','Demna','Gurami','Aleksandre','tonike','Vampiri']
def random(i):
    if type(i) == int or type(i) == float:
        return i % 2 == 1 and list1.index(i) % 2 == 1
    return list1.index(i) % 2 == 1
print(list(filter(random, list1)))