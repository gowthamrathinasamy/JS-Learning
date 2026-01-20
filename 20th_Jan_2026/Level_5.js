//Simulate element visibility using a variable:
let element = true
//If visible → "Click element"
if(element)
    {
        console.log("Click Element")
    }
//Else → "Wait for element"
else{
    console.log("Wait for element")
}
//Simulate form validation:
//If username empty → "Enter username"
let userName=null
if(userName===null)
{
    console.log("Enter Username")
}
//Simulate pagination:
//Loop pages 1 to 5 and print "Checking page X"
for(let page=1;page<=5;page++)
{
    
        console.log("Checking page "+page)
    
}

//Simulate search result validation:
//If resultCount > 0 → "Results found"
let resultCount=1
if(resultCount>0)
{
    console.log("Results Found")
}
//Simulate login attempt:
//Loop 3 times and print "Trying login attempt X"
for(let loginAttempt =1;loginAttempt<=3;loginAttempt++)
{
   console.log("Trying login attempt "+loginAttempt)
    
}