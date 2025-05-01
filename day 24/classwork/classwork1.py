password = "secretword"   #იქმნება ცვლადი
guess = input()        #ვქმნით ინფუთ ცვლადს რომ მომხმარებელმა შემოიტანოს password
while guess != password:       #სანამ guess არ უდრის პაროლს
    guess = input()        #გვეკითხება თავიდან
print("Acess granted")      #და თუ პაროლი სწორად შევიყვვანეთ მაშინ დაწერს : Acess granted