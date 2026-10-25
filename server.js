const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const restaurants = [
  {
    id: 1,
    name: "Al Baik",
    address: "Road 3803, Manama",
    isOpen: true,
    phone: "+973 1700 0000"
  },
  {
    id: 2,
    name: "Haji's Traditional Cafe",
    address: "Bab Al Bahrain, Manama",
    isOpen: false,
    phone: "+973 1721 0407"
  },
  {
    id: 3,
    name: "Al Jabriya Turkish Restaurant",
    address: "Jabriya, Capital Governorate",
    isOpen: true,
    phone: "+973 1769 0000"
  }
];

app.get('/', (req, res) => {
  res.render('homepage');
});

app.get('/restaurants', (req, res) => {
  res.render('all-restaurants', { restaurants: restaurants });
});

app.get('/restaurants/:id', (req, res) => {
  const restaurantId = Number(req.params.id);
  const foundRestaurant = restaurants.find(r => r.id === restaurantId);

  res.render('restaurant-details', { restaurant: foundRestaurant });
});





app.use(express.static('public')); 









 
 
 




app.listen(3000,()=>{
    console.log("Listening on port " + 3000)
}) 


