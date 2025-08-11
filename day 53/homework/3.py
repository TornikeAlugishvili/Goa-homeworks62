"""შექმენი ფუნქცია რომელსაც გადაეცემა 1 ინტეჯერი, დააბრუნეთ ამ ინტეჯერის ფესვი თუ მას ააქვს ფესვი, თუ არ ააქვს დააბრუნეთ იგი აყვანილი კვადრატში"""

import math

def func(int):
        root = math.sqrt(int)
        if root.is_integer():
                return int(root)
        return int ** 2