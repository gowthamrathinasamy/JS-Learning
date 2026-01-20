//If isLoggedIn is true, print "Login successful", else "Login failed".
let isLoggedIn= true
if(isLoggedIn)
{
console.log("Login Successful")
}
else
{
    console.log("Login failed")
}
//If errorMessage exists, print "Show error", else "Continue".
let errorMessage = true
if (errorMessage)

    {
        console.log("Show error")
    }
    else
    {
        console.log("continue")
    }

//If pageTitle is "Dashboard", print "Correct page".
let pageTitle="Dashboard"
if(pageTitle==="Dashboard")
{
    console.log("Correct Page")

}

//Check if itemsCount is 0 → print "No data found".
let itemsCount=0
if(itemsCount===0)
{
    console.log("No Data Found")
}

//Check if statusCode is 200 → print "API Success" else "API Failed".
let statusCode = 200
if (statusCode===200)
{
    console.log("API Success")
}
else
{
    console.log("API Failed")
}

//Why? Used when checking page loads, error messages, API responses.