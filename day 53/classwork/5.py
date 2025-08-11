# 1)is_palindrome(s)
# ფუნქცია იღებს ერთ სიტყვას (s) და უნდა შეამოწმოს, არის თუ არა ეს სიტყვა პალინდრომი.
# პალინდრომი — ეს არის სიტყვა, რომელიც მარცხნიდანაც და მარჯვნიდანაც ერთნაირად იკითხება.
# უნდა იგნორო დიდი და პატარა ასოების განსხვავება.
# თუ სიტყვა პალინდრომია, დააბრუნე True, თუ არა — False.

# მაგალითები:

# is_palindrome("Level") → True     # ერთი და იგივე ორივე მხრიდან
# is_palindrome("Python") → False   # განსხვავებულია
# is_palindrome("Madam") → True     # იგნორით case

def greet(s):
    s = s.lower()
    return s == s[::-1]
print(greet("Level"))

# 2) sum_even(nums)
# ფუნქცია იღებს მთელი რიცხვების სიას (nums) და უნდა იპოვოს ყველა ლუწი რიცხვის ჯამი.
# ლუწი რიცხვი — ეს არის რიცხვი, რომელიც იყოფა 2-ზე ნაშთის გარეშე (მაგ: 2, 4, 6, 8).
# თუ სიაში არცერთი ლუწი რიცხვი არ არის, დააბრუნე 0.

# მაგალითები:

# sum_even([1, 2, 3, 4, 5]) → 6     # 2 + 4 = 6
# sum_even([7, 9, 11]) → 0          # ლუწი არაა
# sum_even([10, -2, 3]) → 8         # 10 + (-2) = 8

def greet(nums):
    return sum(nums for nums in nums if nums % 2 == 0)

# 3)
# 3) replace_vowels(s, char)
# ფუნქცია იღებს სტრიქონს (s) და სიმბოლოს (char).
# უნდა ჩაანაცვლოს ყველა ხმოვანი ასო (a, e, i, o, u) იგივე სიმბოლოთი, რასაც მეორე არგუმენტში მივცემთ.
# უნდა იგნორო დიდი და პატარა ასოების განსხვავება, მაგრამ შეცვლისას უნდა შენარჩუნდეს ის სიმბოლო, რაც ჩვენ მივეცით, ზუსტად იმ ფორმით.

# მაგალითები:

# replace_vowels("Hello", "*") → "H*ll*"
# replace_vowels("Python", "-") → "Pyth-n"
# replace_vowels("AEIOU", "?") → "?????"

def replace_vowels(s, char):
    vowels = "aeiouAEIOU"
    return ''.join(char if c in vowels else c for c in s)
print(replace_vowels("hello", "*"))