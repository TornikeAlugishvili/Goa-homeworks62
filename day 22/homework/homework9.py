pincode = int(input("Enter your Pincode: "))
Real_pincode = 9877
attempts = 0


while pincode != Real_pincode:
    pincode = int(input("Enter your Pincode: "))
    attempts += 1
if pincode == Real_pincode:
    print(attempts)