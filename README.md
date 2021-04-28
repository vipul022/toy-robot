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

1. 
###### User Input:  
1

0

NORTH

PLACE  

###### Output: 
Your robot has been successfully placed on table at 1, 0 facing towards NORTH

2. 
###### User Input: 
0

0 

NORTH

PLACE

MOVE

REPORT

###### Output:
The current position of your robot is 0, 1, NORTH

3.
###### User Input:
0

0

NORTH

PLACE

LEFT

REPORT
###### Output:
The current position of your robot is 0, 0, WEST

4.
###### User Input:
1

2

EAST

PLACE

MOVE

MOVE

LEFT

MOVE

REPORT

###### Output:
The current position of your robot is 3, 3, NORTH

5.

###### User Input:
1

1

WEST

MOVE

###### Output:
Please place your robot safely on the table first

6.

###### User Input:

1

1

PLACE

###### Output:
Please select the direction in which you want the robot to face

7.

###### User Input:

6

4

WEST

PLACE

###### Output:
Please enter valid coordinates (0 - 5) to place your robot safely on table

8.

###### User Input:

5

4

EAST

PLACE

MOVE

###### Output:
Sorry! you can't move further otherwise your robot will fall down from the table



























