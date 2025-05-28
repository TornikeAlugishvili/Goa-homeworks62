my_list = ['ვაშლი', 'ბანანი', 'ატამი', 'მსხალი', 'კივი']

index = int(input("შეიყვანე ინდექსი: "))

if index >= len(my_list):
    print("გურამი error")
else:
    print(my_list[index])