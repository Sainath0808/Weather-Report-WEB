const form = document.getElementById("form");
const latitudeInput = document.getElementById("latitude")
const longitudeInput= document.getElementById("longitude");
const resultContainer= document.getElementById("result");
const aqiResult=document.getElementById("aqi")
const coResult=document.getElementById("co")
const no2Result=document.getElementById("no2")
const o3Result=document.getElementById("o3")
const pm2Result=document.getElementById("pm2")
const pm10Result=document.getElementById("pm10")
const so2Result=document.getElementById("so2")

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const latitude= latitudeInput.value;
    const longitude = longitudeInput.value;
    //const url = `https://air-quality.p.rapidapi.com/current/airquality?lon=${longitude}&lat=${latitude}`;
    const url=`https://air-quality.p.rapidapi.com/forecast/airquality?lat=${latitude}&lon=${longitude}`;

    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'd1c2509622mshc190c7058a0847ap11a9acjsn1ca39fdbcc31',
    //         'X-RapidAPI-Host': 'air-quality.p.rapidapi.com'
    //     }
    // };

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd1c2509622mshc190c7058a0847ap11a9acjsn1ca39fdbcc31',
            'X-RapidAPI-Host': 'air-quality.p.rapidapi.com'
        }
    };

fetch(url,options)
    .then(response=>response.json())
    .then(result=>{
        let readings=result.data[0];
        console.log(readings);
        aqiResult.textContent=readings.aqi;
        coResult.textContent=readings.co;
        no2Result.textContent=readings.no2;
        pm2Result.textContent=readings.pm2;
        o3Result.textContent=readings.o3;
        pm10Result.textContent=readings.pm10;
        so2Result.textContent=readings.so2;
        resultContainer.style.display='flex';
    })
} );

