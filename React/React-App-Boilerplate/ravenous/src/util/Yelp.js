const apiKey = 'BYWzqrEw2C7q1Uh7Dr9GHZ6nGZBxXW7n3P53dKtFJSXQbPuyS1hsDSkLcegjXnhViE0De2sqI9Ekyyf_QCHUNR1KccjULzVIdgDy9effYIPPPK8SW5tL7JCt1hAPX3Yx';
const Yelp = {
    search: (term, location, sortBy) => {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
            headers:{
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipcode: business.location.zip_code,
                    category: business.categories,
                    rating: business.rating,
                    reviewCount: business.review_count
                })
            }
        });
    }
};
export default Yelp