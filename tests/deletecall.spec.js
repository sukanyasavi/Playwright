import{test,expect}from'@playwright/test';
test('Delete example',async({request})=>{

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
    console.log(newbookingresponsejson);

    const deleteresponse=await request.delete("https://restful-booker.herokuapp.com/booking/"+bookingID,{headers:{"Content-Type":"application/json",
            "Cookie":"token="+authtoken}});
            console.log(deleteresponse.status());
            expect(deleteresponse.status()).toBe(201);
            console.log(deleteresponse.statusText());
            expect(deleteresponse.statusText()).toBe("Created");
            console.log("*******************");

            const getresponse=await request.get("https://restful-booker.herokuapp.com/booking/"+bookingID)
            console.log(getresponse.status());
            expect(getresponse.status()).toBe(404);
            console.log(getresponse.statusText());
            expect(getresponse.statusText()).toBe("Not Found");


});