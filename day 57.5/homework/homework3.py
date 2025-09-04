def function_lol(func, numbers):
    new_list = []
    for i in numbers:
        new_list.append(func(i))
    return new_list

random_list = [1,2,3,4,5]

new = function_lol(lambda x: x * 5, random_list)
print(new)