// Foursquare API Info
const clientId = 'ALTDCQWOGRCAWF5ZKEGPL5NPTY03ESIDZXDJXOBNJJNHDDOX';
const clientSecret = 'X0XJMJO3H5TFUP11NOBPNZURRI2ISFZP3DZ1PFFFGC2PFW3H';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';

// OpenWeather Info
const openWeatherKey = '34da6fdf81e59bcfaabd4dda3371258d';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:
const getVenues = async () => {
    const city = $input.val();
    const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20200616`;
    try {
        const response = await fetch(urlToFetch,);
        if (response.ok) {
            // console.log(response);
            const jsonResponse = await response.json();
            // console.log(jsonResponse);
            const venues = jsonResponse.response.groups[0].items.map(venue => venue.venue);
            // console.log(venues);
            return venues;
        }
    } catch (error) {
        console.log(error);
    }
}

const getForecast = async () => {
    const urlToFetch = `${weatherUrl}?q=${$input.val()}&APPID=${openWeatherKey}`;
    try {

    } catch (error) {
        console.log(error);
    }
}


// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    // Add your code here:

    let venueContent = '';
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (day) => {
  // Add your code here:
  
	let weatherContent = '';
  $weatherDiv.append(weatherContent);
}

const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues()
  getForecast()
  return false;
}

$submit.click(executeSearch)