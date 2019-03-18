class Weather {
    constructor(API_KEY) {
        this.API_KEY = API_KEY;
        // console.log("yesman");
        this.initialize();
    }

    initialize() {
        this.getMyLocation();
    }

    getMyLocation() {
        console.log("location");
        navigator.geolocation.getCurrentPosition(position => {
            // console.log("found you");
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;
            this.getWeather(lat, lng);
        }, err => {
            // console.log(err);
        });
    }

    getWeather(lat, lng) {
        // AJAX CALL / XHR
        // https://api.darksky.net/forecast/9a6385c22d3ee1583efe02d4dfdeffc0/37.8267,-122.4233?units=auto
        let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.API_KEY}/${lat},${lng}?units=auto`;
        fetch(url)
        .then(response => {
            return response.json();
        })
        .then(json => {
            // let temp = document.createElement("h1");
            // temp.innerHTML = json.currently.summary;
            // document.querySelector("body").append(temp);
            let temp = json.currently.temperature;
            let app = new Giphy(temp);
        });
    }
}

class Giphy {
    constructor(temp) {
        this.temp = temp;
        // console.log("Giphy");
        // console.log(temp);
        this.isItWarm(temp);
    }
    
    isItWarm(temp) {
        console.log(temp);
        
        if( temp > 15) {
            // console.log("warm");
            let heath = "hot";
            document.body.style.backgroundColor = "red";
           this.findGif(heath);
        } else {
            // console.log("cold");
            let heath = "cold";
            document.body.style.backgroundColor = "blue";
            this.findGif(heath);
        }
    }

    findGif(heath) {
        let url = `https://api.giphy.com/v1/stickers/search?api_key=vfNqkio9tS6Y1hKQeCfo6kgfPTquQZow&q=${heath}`;
        fetch(url)
        .then(response => {
            return response.json();
        })
        .then(json => {
            console.log("gif here");
            let random = Math.floor(Math.random() * 10);
            // let gif = json.data[random].id;
            let gif = json.data[random].embed_url;
            document.querySelector('.hotOrCold').innerHTML = heath;
            this.showGif(gif);    
            
            
        });
    }

    showGif(gif) {
        // console.log("yololaatstestap");
        console.log(gif);
        // let t = document.querySelector('.title');
        // console.log(t);
        // t.insertAdjacentHTML('afterend', `<iframe src="https://giphy.com/embed/${gif}" width="480" height="452" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`);
        // document.querySelector(".giphy-embed").src=link;
        document.querySelector('.giphy-embed').setAttribute('src',gif);
        
        
    }

}

let app = new Weather('9a6385c22d3ee1583efe02d4dfdeffc0');

//api key giphy: vfNqkio9tS6Y1hKQeCfo6kgfPTquQZow