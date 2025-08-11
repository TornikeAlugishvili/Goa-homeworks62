"""შექმენით ფუნქცია, რომელსაც გადაეცემა 1 არგუმენტი, ინტეჯერი, შემდეგ მაგ ინტეჯერი რაოდენობის ასოები დააბრუნეთ ანბანის მიხედვით
მაგ: ინტეჯერი 8
output: abcdefgh"""

import string

def func(int):
    return string.ascii_lowercase[:int]