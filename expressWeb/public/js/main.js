console.log("start");
const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const type = document.getElementById("type");
const datahide = document.querySelector('.middle_layer');
const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerText = `please write the name of the city you want to search `;
        datahide.classList.add('data_hide');
    }else{
        try{
            console.log("inside try");
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=4b9ff7a12e392fff873bb9796d827b99`;
        
        console.log("before url data fetch");
        const response =await fetch(url);
        console.log(response);
        console.log("after url data fetch");
        const data = await response.json();
        console.log("after arrData");
        console.log(data);
        const arrData = [data];
        
        city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
        temp_real_val.innerText = arrData[0].main.temp;
        temp_status.innerText = arrData[0].weather[0].main;
        type.innerText = arrData[0].weather[0].description;
        console.log(arrData[0].name);
        console.log(arrData[0].main.temp);
        console.log(arrData[0].weather[0].main);

        const tempMood = arrData[0].weather[0].main;

        //condition to check sunny or cloudy
        if(tempMood == "Clear") {
            temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
        } else if (tempMood == "Clouds") {
            temp_status.innerHTML = 
            "<i class='fas fa-cloud' style='color: #f1f2f6'></i>";
        }else if (tempMood == 'Rain') {
            temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
        } else {
            temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
        }

        datahide.classList.remove('data_hide');
    
    }catch{
            city_name.innerText = `please write the name of the city Properly `;
            datahide.classList.add('data_hide');
            }
        }

    }
submitBtn.addEventListener('click',getInfo);

