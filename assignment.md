# Practice Assignment For The Week

NB: Apart from the deployment assignment. Make sure to connect your javascript files an HTML to continue.

## Deployment And Project Setup

1. Setup your fylo, insure and one of the header projects properly on the github and to netlify/vercel.
2. Share the github link of said project properly showing everything we discussed in class concerning how to setup your projects to show professionalizism

## Datatypes Practice Questions

1. Declare a variable named _challenge_ and assign it to an initial value `Pluralcode February Cohort Javascript Classes`.
2. Output the string above on the browser display using _alert()_
3. Using console.log() print out the following statement:
   `The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`
4. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
5. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
6. Concatenate the following strings `My name is` and `web dev`
7. Create variables `name`,`age`,`shortDescription` and `favWebDevTopic` and use concatenation to turn the values in this variable to a full sentence. Use the _alert()_ to print it to screen.

## Conditionals Practice Questions

1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

   ```sh
   Enter your age: 30
   You are old enough to drive.

   Enter your age:15
   You are left with 3 years to drive.
   ```

2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

   ```sh
   Enter your age: 30
   You are 5 years older than me.
   ```

3. If a is greater than b return 'a is greater than b' else 'a is less than b'.

   - using if else

   ```js
   let a = 4;
   let b = 3;
   ```

   ```sh
     4 is greater than 3
   ```

4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

   ```sh
   Enter a number: 2
   2 is an even number

   Enter a number: 9
   9 is is an odd number.
   ```

5. Write a code which can give grades to students according to their scores:

   - 80-100, A
   - 70-89, B
   - 60-69, C
   - 50-59, D
   - 0-49, F

6. Check if the season is Autumn, Winter, Spring or Summer.
   If the user input is :

   - September, October or November, the season is Autumn.
   - December, January or February, the season is Winter.
   - March, April or May, the season is Spring
   - June, July or August, the season is Summer

7. Check if a day is weekend day or a working day. Your script will take day as an input.

```sh
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
```

## Operators Practice Questions

1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
2. Check if type of '10' is equal to 10
3. Check if parseInt('9.8') is equal to 10
4. Boolean value is either true or false.
   Write three JavaScript statement which provide truthy value.
   Write three JavaScript statement which provide falsy value.
5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
   4 > 3
   4 >= 3
   4 < 3
   4 <= 3
   4 == 4
   4 === 4
   4 != 4
   4 !== 4
   4 != '4'
   4 == '4'
   4 === '4'
6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
   4 > 3 && 10 < 12
   4 > 3 && 10 > 12
   4 > 3 || 10 < 12
   4 > 3 || 10 > 12
   !(4 > 3)
   !(4 < 3)
   !(false)
   !(4 > 3 && 10 < 12)
   !(4 > 3 && 10 > 12)
   !(4 === '4')
7. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
   Enter base: 20
   Enter height: 10
   The area of the triangle is 100
8. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
   Enter side a: 5
   Enter side b: 4
   Enter side c: 3
   The perimeter of the triangle is 12
9. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
10. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
11. Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
    Enter hours: 40
    Enter rate per hour: 28
    Your weekly earning is 1120
