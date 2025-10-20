try:
    name = int(input('Enter a numebr'))
except ValueError:
    raise Exception('you are stupid?')
finally:
    print('end of programm')