//Print the square of numbers from 1 to 10.
console.log("Print the square of numbers from 1 to 10.")
for(let i=1;i<=10;i++)
{
    console.log("Square of a number "+i+" is "+ (i*i))
}


//Print only numbers that are greater than 25 from 1 to 50.
console.log("Print only numbers that are greater than 25 from 1 to 50.")
for(let i=1; i<=50; i++)
{
    if (i>25)
    {
        console.log(i)
    }
}

//Find the largest number among three numbers using if-else.
console.log("Find the largest number among three numbers using if-else.")
let a= 10;
let b= 15;
let c= 15;
if (a>b && a>c)
{
        console.log ("A is Greater")
    }
if (b>c && b>a)
    {
        console.log ("B is Greater")
    }

if (c>a && c<b)
{
        console.log("C is Greater")
}
else{
    console.log("One or more numbers are same")
}

//Print numbers from 1 to 20 except multiples of 3.
console.log("Print numbers from 1 to 20 except multiples of 3.")
for(let num = 1; num<=20; num++)
{
    if (num%3 !== 0)
    {
        console.log("num "+num)
    }
}

//Check whether a given year is a leap year (basic logic).
console.log("Check whether a given year is a leap year (basic logic).")
let Year = 2000
if ((Year%4 === 0 && Year%100 !== 0) || Year%400 === 0)
{
    console.log("The Given Year "+Year+" is leap year")
}
else{
    console.log("The Given Year "+Year+" is not a leap year")
}