"""შექმენით ფუნქცია, რომელსაც გადაეცემა ორი არგუმენტი, შია და სტრინგი, თუ ეს სტრინგი არის "even" ამოიღეთ სიიდან მხოლოდ ლუქები და დააბრუნეთ, თუ ეს სტრინგი არის "odd" ამოიღეთ ამ სიიდან მხოლოდენ კენტები და დააბრუნეთ"""

def func(numbers,mode):
    if mode == "even":
        return [num for num in numbers if num % 2 == 0]
    elif mode == "odd":
        return [num for num in numbers if num % 2 != 0]
    else:
        return "Invalid Mode"