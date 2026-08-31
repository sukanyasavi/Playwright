import{test,expect}from'@playwright/test';
test('put example',async({request})=>{

    const authdata={

        "username": "admin", 
        "password": "password123"

    }
   const response=await  request.post("https://restful-booker.herokuapp.com/auth",{headers:{"Content-Type":"application/json"},data:authdata});

const respdata=await response.json();
const authtoken=respdata.token;
console.log("Auth token is: " + authtoken);

    const newbookingData = {
        "firstname": "John",
        "lastname": "doe",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": "Breakfast"
    };

    const newbookingresponse = await request.post("https://restful-booker.herokuapp.com/booking", {
        headers: { "Content-Type": "application/json" },
        data: newbookingData
    });
const newbookingresponsejson=await newbookingresponse.json();
    
    
    
    const bookingID=newbookingresponsejson.bookingid;
    console.log("Booking ID is: " + bookingID);

     

     const updatedbookingData = {
        "firstname": "Sukanya",
        "lastname": "hs",
        "totalprice": 222,
        "depositpaid": false,
        "bookingdates": {
            "checkin": "2018-03-01",
            "checkout": "2019-03-01"
        },
        "additionalneeds": "lunch"
    }
    const updatedresponse=await request.put("https://restful-booker.herokuapp.com/booking/"+bookingID,
        {
            headers:{"Content-Type":"application/json", "Accept":"application/json",
            "Cookie":"token="+authtoken},
            data:updatedbookingData})

            const updatedresponsejson=await updatedresponse.json();
            console.log(updatedresponsejson)
           

        
});