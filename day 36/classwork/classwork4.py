
def f(num):
    if num < 2:
        print(False, "არარის მარტივი")
    for i in range(2,num):
        if num % i == 0:
            print(True, "მარტივია")