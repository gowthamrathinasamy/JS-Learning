//Print all numbers between 1 to 50 that are divisible by 5.
console.log("Print all numbers between 1 to 50 that are divisible by 5.")
for (let num = 1; num <=50 ; num++)
{
    if (num%5 == 0)
    {
        console.log (num)
    }
}

//Count how many even numbers are between 1 and 20.
console.log("Count how many even numbers are between 1 and 20.")
let count=0
for (let num =1 ; num<=20; num++)
{
    if (num%2 ===0)
    {
        count++
    }
}
    console.log(count)

//Print numbers from 1 to 30:
console.log("Print numbers from 1 to 30")
for (let num =1; num<=30; num++)
{
    console.log(num)
}

//Print "Even" if number is even
console.log("Print 'Even' if number is even")
for(let i=1;i<=10;i++)
{
    if(i%2===0)
    {
        console.log("Even numbers are " +i)
    }
  
}
//Print "Odd" if number is odd
console.log("Print 'Odd' if number is even")
for(let i=1;i<=10;i++)
{
    if(i%2!==0)
    {
        console.log("Odd numbers are ", +i)
    }
}
//Check each number from 1 to 10 and print whether it is greater than 5.
console.log("Check each number from 1 to 10 and print whether it is greater than 5")
for (let num=1;num<=10;num++)
{
    if (num<5)
    {
        console.log("Number "+num+" is not greater than 5")
    }
    else{
        console.log("Number "+num+" is greater than 5")
    }
}
//Print numbers from 1 to 100, but print “Large” if the number is greater than 50.
console.log("Print numbers from 1 to 100, but print “Large” if the number is greater than 50")
for(let num=1;num<=100;num++)
{
    if (num>50)
    {
        console.log("Large " +num)
    }
    else
    {
        console.log(num)
    }
}