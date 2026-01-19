//Print numbers from 1 to 10 using a for loop.
console.log("1 to 10 using a for loop")
for (let count=1;count<=10;count=count+1)
        {
            console.log(count)
        }

// Print numbers from 10 to 1.
console.log("10 to 1 using a for loop")
for (let count=10;count>=0;count=count-1)
{
    console.log(count)
}

//Print even numbers from 1 to 20.
console.log("Print even numbers from 1 to 20.")
for(let num=1;num<=20;num=num+1)
{
   
    if(num%2==0)
    {
        console.log(num)
    }
}

//Print the multiplication table of 5.
{
    let table=5
    for(let i=1;i<=10;i=i+1)
    {
        console.log(table +" x "+ i + " = " + (table*i));
    }
}
