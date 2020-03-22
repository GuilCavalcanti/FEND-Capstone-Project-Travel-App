export function handleSubmit(event) {
    event.preventDefault()

    let inputs = {
       name: document.getElementById('destination').value,
       dates: {
            depart: new Date(document.getElementById("departing").value).getTime(),
            retur: new Date(document.getElementById("returning").value).getTime(),
            today: new Date().getTime()
       }
    }

    console.log(inputs);

    if (inputs.name == "" || isNaN(inputs.dates.depart) || isNaN(inputs.dates.retur)) {
        
        alert("Please fill out all fields");
    } else {

        let postForm = async(url, data) => {
            let result = await fetch(url, {
                method: "POST",
                credentials: 'same-origin',
                headers: {
                    "Content-Type": "application/json",
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });
            let myData = await result.json();
            document.getElementById("city").src = await myData.img;
            document.getElementById("city").style.visibility = "visible";
            document.querySelector(".result-headers").style.visibility = "visible";
            document.getElementById("countDown").textContent = myData.dates.timeLeft;
            document.getElementById("duration").textContent = myData.dates.duration;
            document.getElementById("weather-sum").textContent = myData.weather.weatherSum;
            document.getElementById("weather-temp").textContent = `${myData.weather.weatherTemp}°C`;
            console.log(myData.img);
        }
        postForm('http://localhost:8081/api', inputs);
    }
}

