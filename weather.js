function myfunc()
{
    var a=document.getElementById('temp')
    var z=document.getElementById('myicon')
    var myweather=document.getElementById('weathr')
    var city=document.getElementById('City').value
    var mcity=document.getElementById('mycity')
  
   fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=42a2bb5d63367ae0c98f2f09670df9e5")
          .then(response => response.json())
          .then(data => {
             console.log(data)
            if(data.message=='city not found'){
                mcity.innerHTML=`<span>City not found</span>`
                return
            }
             a.innerHTML=`<span>${Math.round(data.main.temp)-273}<span>&degC</span></span>`
             mcity.innerHTML=`<span>${data.name}</span>`
            myweather.innerHTML=`<span>${data.weather[0].main}</span>`
             var weather=data.weather[0].main;
             if(weather=="Clear")
             {
                     z.innerHTML=`<i class="bi bi-brightness-high"></i>`;
             }
             else if(weather=="Clouds")
             {
                     z.innerHTML=`<i class="bi bi-cloud"></i>`;
             }
             else  if(weather=="Rain")
             {
                     z.innerHTML=`<i class="bi bi-cloud-rain"></i>`;
             }
             else if(weather=="Haze")
             {
                        z.innerHTML=`<i class="bi bi-cloud-haze2"></i>`;
             }
             else if(weather=="Thunderstrom")
             {
                        z.innerHTML=`<i class="bi bi-cloud-lightning-rain-fill"></i>`;
             }
             else if(weather=="Snow")
             {
                        z.innerHTML=`<i class="bi bi-cloud-snow"></i>`;
             }
             else if(weather=="Drizzle")
             {
                        z.innerHTML=`<i class="bi bi-cloud-drizzle"></i>`;
             }
             document.getElementById('City').value=" ";
            }
          );


}