# Toy Robot

## Steps to run the project on your local machine

Clone the repository into your machine by running the following command:

`git clone https://github.com/vipul022/toy-robot.git`


In your project directory, you can run :

`yarn install`

This command will install all the dependencies for the project.

To run the app in the development mode, run the following command:

`yarn start`

This will open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Run the following command to run all the unit tests:

`yarn test`

## Tech Stack
###### Front-end
- React 
- TypeScript
###### Testing:

- Jest
- React testing library (RTL)

## Test data


###### 1. User Input:  
1,0,NORTH

click PLACE  

###### Output: 
Your robot has been successfully placed on table at 1, 0 facing towards NORTH
 
###### 2.User Input: 
0,0,NORTH

click PLACE

click MOVE

click REPORT

###### Output:
The current position of your robot is 0, 1, NORTH

###### 3.User Input:
0,0,NORTH

click PLACE

click LEFT

click REPORT
###### Output:
The current position of your robot is 0, 0, WEST

###### 4.User Input:
1,2,EAST

click PLACE

click MOVE

click MOVE

click LEFT

click MOVE

click REPORT

###### Output:
The current position of your robot is 3, 3, NORTH

###### 5.User Input:
1,1,WEST

click MOVE

###### Output:
Please place your robot safely on the table first
###### 6.User Input:
1,1

click PLACE
###### Output:
Please select the direction in which you want the robot to face
###### 7.User Input:
6,4,WEST

click PLACE
###### Output:
Please enter valid coordinates (0 - 5) to place your robot safely on table
###### 8.User Input:
5,4,EAST

click PLACE

click MOVE
###### Output:
Sorry! you can't move further otherwise your robot will fall down from the table

## Purpose

The purpose of this app is to complete a coding challenge. The complete description of the app is given below:

The application is a simulation of a toy robot moving on a square
tabletop, of dimensions 5 units x 5 units.

There are no other obstructions on the table surface.

The robot is free to roam around the surface of the table, but must be
prevented from falling to destruction.  Any movement that would result
in the robot falling from the table must be prevented, however further
valid movement commands must still be allowed.

Create an application that can read in commands of the following form -

    PLACE X,Y,F
    MOVE
    LEFT
    RIGHT
    REPORT

Where PLACE will put the toy robot on the table in position X,Y and
facing NORTH, SOUTH, EAST or WEST.  The origin (0,0) can be considered to
be the SOUTH WEST most corner.

It is required that the first command to the robot is a PLACE command,
after that, any sequence of commands may be issued, in any order, including
another PLACE command.  The application should discard all commands in
the sequence until a valid PLACE command has been executed.

Where MOVE will move the toy robot one unit forward in the direction
it is currently facing.

Where LEFT and RIGHT will rotate the robot 90 degrees in the specified
direction without changing the position of the robot.

Where REPORT will announce the X,Y and F of the robot.  This can be
in any form, but standard output is sufficient.

A robot that is not on the table can choose the ignore the MOVE, LEFT,
RIGHT and REPORT commands.

Input can be from a file, or from standard input, as the developer chooses.

Provide test data to exercise the application.

 ##  Constraints:

The toy robot must not fall off the table during movement.  This also
includes the initial placement of the toy robot.  Any move that would cause
the robot to fall must be ignored.

```
The End 🌱
```

























