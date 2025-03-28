correct_answer = True or False
incorrect_answer= False and True
print(correct_answer)
print(incorrect_answer)



print(True and False or False or True and False) #ეს კოდი გამოიტანს False-ს

#--------------------------------------------------------------------------------

print(False or True and False or True) # true
print(False and True or True and False or True) #true
print((True and False) or (False or True and True)) #true
print(True and True or False and False or True) #true
print((False or True) and (True or False and True)) #true
print(False and True or False or False and True)#false
print(True and False or False and True or False)#false
print((False or False) and (True and False))#false
print(True and False and True or False)#false
print((False or False) and (False or True and False))#false