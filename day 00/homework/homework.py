from turtle import *

#we want to paint a house:

#step 1: positioning
title("Drawing a House")

shape("turtle")
width(7)
speed(3)
bgcolor("Light blue")
pencolor("green")
penup()
right(180)
forward(190)
right(180)
pendown()
forward(400)
right(180)
forward(100)
#step 2: drawing a square

begin_fill()
color("pink")
pencolor("purple")
right(90)
forward(220)
left(90)
forward(220)
left(90)
forward(220)
end_fill()
left(90)
penup()
forward(70)
left(90)
pendown()

#step 3: drawing a door
begin_fill()
color("brown")
pencolor("black")
forward(110)
right(90)
forward(60)
right(90)
forward(110)
end_fill()

#step 4: positioning to floor
penup()
left(90)
forward(89)
left(90)
forward(220)
left(30)

#step5: drawing a floor

begin_fill()
color("blue")
pencolor("black")
pendown()
forward(180)
left(110)
forward(198)
end_fill()

#step6: positioning to window 1

left(35)
penup()
forward(50)
left(90)
begin_fill()
color("Light blue")
pencolor("blue")
forward(20)
width(4)
pendown()
forward(30)
right(90)

forward(30)
right(90)

forward(30)
right(90)

forward(30)
right(90)
end_fill()


#step7: positioning to window 2

penup()
forward(190)
right(180)


begin_fill()
color("Light blue")
pencolor("blue")
forward(30)
right(90)
pendown()

forward(30)
right(90)

forward(30)
right(90)

forward(30)
right(90)
forward(10)
end_fill()
exitonclick()