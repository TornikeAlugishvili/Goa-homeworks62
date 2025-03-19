from turtle import *

# we want to paint a house

#step 1:draw  a square
speed(5)
width (7)
begin_fill()
color("brown")

begin_fill()
color("brown")

forward (200)
left(90)

forward (200)
left (90)


forward (200)
left(90)

forward (200)
left (90)
end_fill()   #end of square



#drawing a door
begin_fill()
forward(70)
color("yellow")
left(90)
forward(120)   #height of the door
right(90)
forward(60)
right(90)
forward(120)
end_fill()


penup()
goto(200, 200)
pendown()

color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

begin_fill()    #drawing the window 1
color("blue")

begin_fill()
left(30)
pendown()
forward(80)
left(90)
forward(60)
left(90)
forward(80)  #end of the window 1
end_fill()

right(90)      #drawing the window 2
forward(75)
begin_fill()
color("blue")
right(90)
forward(80)
left(90)
forward(60)   
left(90)
forward(80)
left(90)
forward(60)
end_fill()      #end of window 2

penup()
left(90)
forward(29)







exitonclick()