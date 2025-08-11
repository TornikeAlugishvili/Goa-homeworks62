# 1)ფუნქცია იღებს ერთ სტრინგ(s) და უნდა დააბრუნოს, რამდენი ხმოვანი ასოა მასში.
# ხმოვნებად ითვლება: a, e, i, o, u — უნდა იგნორო დიდი და პატარა ასოების სხვაობა.
# ანუ "A" და "a" ორივე ითვლება.

def greet(s):
    res = 0
    xmovani = "aeiouAEIOU"
    for i in s:
        if i in xmovani:
            res += 1
    return res
print(greet("tornike"))


# 2)ფუნქცია იღებს სიას (items) და უნდა დააბრუნოს ელემენტების შებრუნებული რიგით ახალი სია.
# მთავარია, რომ თავდაპირველი სია არ უნდა შეცვალო.

# მაგალითები:
# reverse_list([1, 2, 3]) → [3, 2, 1]
# reverse_list(["a", "b", "c"]) → ["c", "b", "a"]

def greet(items):
    return items[::-1]
print(greet([1,2,3]))


# 3)ფუნქცია იღებს სტრინგს(s) და უნდა დააბრუნოს პირველი და ბოლო სიმბოლო ერთად (ერთ სტრინგში).
# თუ სტრინგი მხოლოდ ერთი სიმბოლოა, დააბრუნე ის ერთი სიმბოლო ორჯერ.

# მაგალითები:

# first_and_last("Python") → "Pn"   # პირველი: P, ბოლო: n
# first_and_last("a") → "aa"        # ერთი სიმბოლო ორჯერ
# first_and_last("Hi") → "Hi"       # პირველი: H, ბოლო: i

def first_and_last(s):
    if len(s) == 1:
        return s * 2
    else:
        return s[0] + s[-1]
print(first_and_last("Hello"))

# 4)ფუნქცია იღებს სიტყვების სიას (words) და აბრუნებს ერთ სტრიქონს, სადაც სიტყვები გაერთიანებულია დაშით (-).
# სიტყვებს შორის არ უნდა იყოს სხვა სიმბოლო ან space, მხოლოდ დეში.

# მაგალითები:


# join_with_dash(["apple", "banana", "cherry"]) → "apple-banana-cherry"
# join_with_dash(["one", "two"]) → "one-two"

def greet(words):
    return '-'.join(words)
print(greet(["malinki","banana"]))


# 5)
# ფუნქცია იღებს სტრინგს(text) და აბრუნებს იგივე სტრინგს, მაგრამ ყველა space წაშლილია.
# სხვა სიმბოლოები არ უნდა შეეცვალოს.

# მაგალითები:

# remove_spaces("Hello World") → "HelloWorld"
# remove_spaces("  Python is fun  ") → "Pythonisfun"
# remove_spaces("NoSpaces") → "NoSpaces"

def greet(text):
    return text.replace(" ", "")
print(greet("Hello World"))