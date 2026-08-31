import{test,expect}from'@playwright/test';
test('post request with token',async({request})=>{

    const authdata={

        "username": "admin", 
        "password": "password123"

    }
   const response=await  request.post("https://restful-booker.herokuapp.com/auth",{headers:{"Content-Type":"application/json"},data:authdata});
console.log(response.status());
const respdata=await response.json();
console.log(respdata);
expect(respdata.token).not.toBeNull();
});

test('post request with booking id', async ({ request }) => {
    const bookingData = {
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

    const response = await request.post("https://restful-booker.herokuapp.com/booking", {
        headers: { "Content-Type": "application/json" },
        data: bookingData
    });
const respData=await response.json();
    console.log(response.status());
    console.log(await response.json());
    expect(respData.bookingid).not.toBeNull();
    expect(respData.booking).toEqual(bookingData);
    expect(response.status()).toBe(200);
    console.log("Booking ID is: " + respData.bookingid);
});