"""შექმენი ფუნქცია რომელსაც გადაეცემა ერთი არგუმენტი, ეს არგუმენტი არის სია, ამ სიიდან ამოიღეთ მხოლოდ ისეთი რიცხვები, რომლებიც არიან ლუეები და დგანან კენტნ ინდექზე"""
def func(numbers):
    list = []
    for i in range(1,len(numbers),2):
        print(i)
        list.append(numbers[i])
    return [d for d in list if d % 2 == 0]