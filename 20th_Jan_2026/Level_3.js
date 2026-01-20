//Print test case numbers from 1 to 5.
for(let tc=1;tc<=5;tc++)
{
    console.log(tc)
}

//Print all menu names stored as strings (simulate with numbers).
for(let menu=1;menu<=5;menu++)
{
    console.log("Menu "+menu)
}

//Print retry attempts from 1 to 3.
let retryAttempts = 0
let loggedIn = false
for (let i=1;i<=3;i++)
{
    retryAttempts++
if (loggedIn)
{
    console.log("Logged in successfully")
    break
}
else{
    console.log ("Attempt "+retryAttempts+" fail")
}
}

//Print numbers from 1 to 10 and mark Pass / Fail:
passCount=0
failCount=0
for(let number = 1;number<=10;number++)
{
    if (number<5)
    {
        passCount++
        console.log(number+" - Pass")
    }
    else{
        failCount++
        console.log(number+" - Fail")
    }
}

//Even → Pass
let evenNum = 10
if (evenNum%2 === 0)
{
    console.log("Pass")
}

//Odd → Fail
let oddNum = 9
if (oddNum%2 !== 0)
{
    console.log("Fail")
}

//Count how many numbers between 1 and 10 are Pass.
console.log("PassCount "+passCount)
console.log("FailCount "+failCount)

//Why? Playwright loops through buttons, rows, table data, retries.