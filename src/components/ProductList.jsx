
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addItem } from '../redux/CartSlice'

const plantsArray = {
  Indoor: [
    {
      id: 1,
      name: 'Snake Plant',
      cost: 15,
      image: 'https://cdn.mos.cms.futurecdn.net/FHwTzjwh5yHHPgSupKhavY.jpg'
    },
    {
      id: 2,
      name: 'Peace Lily',
      cost: 18,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC5LTLqCdtd0qE14bW_YhwlMpECj8xMcjIwNN6e70CyQ&s=10'
    },
    {
      id: 3,
      name: 'Monstera',
      cost: 25,
      image: 'https://thursd.com/storage/media/107000/A-monstera-plant-grown-in-an-indoor-jungle.jpg'
    },
    {
      id: 4,
      name: 'ZZ Plant',
      cost: 20,
      image: 'https://organicbazar.net/cdn/shop/files/zz_plant_green_plant_with_self_watering_pot_full_form_studio_best_indoor_plant_house_plants_office_plants_best_live_plants_foliage_plant_gardening_best_plants_organicbazar_1.jpg?v=1787029884&width=1946'
    },
    {
      id: 5,
      name: 'Pothos',
      cost: 12,
      image: 'https://media.houseandgarden.co.uk/photos/64bff5f4d6a55acd0397054e/1:1/w_1342,h_1342,c_limit/Screenshot%202023-07-25%20at%2017.17.10.png'
    },
    {
      id: 6,
      name: 'Rubber Plant',
      cost: 22,
      image: 'https://m.media-amazon.com/images/I/61qInVWOF5L._AC_UF1000,1000_QL80_.jpg'
    }
  ],

  Outdoor: [
    {
      id: 7,
      name: 'Rose Plant',
      cost: 14,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0p_0IQWJ6Ni1y-H9KQ8CspF5fr5J1iji-d8l_1X8jMptUFquSQo69MdzS&s=10'
    },
    {
      id: 8,
      name: 'Hibiscus',
      cost: 16,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdVdfz-hviOL2DJVYOAgAGkkbJFaoSYcFTbF9hPEnObg&s=10'
    },
    {
      id: 9,
      name: 'Lavender',
      cost: 17,
      image: 'https://m.media-amazon.com/images/I/51+XRzM8TAL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: 10,
      name: 'Jasmine',
      cost: 13,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZcIQmOIuVE_FRKm5GudGT4yKbKplrAJlMs8oTCoZ3pjACTnkb2_yOIM&s=10'
    },
    {
      id: 11,
      name: 'Marigold',
      cost: 10,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQspgT94jSwOWVGTZOkL6R1f9LSulxA4PYvyt4lEBZk8aeNIqn8WNYd50s&s=10'
    },
    {
      id: 12,
      name: 'Bougainvillea',
      cost: 19,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2S5yOeiMJO0CsEeUbZe767tsukqTOW9iuNCw_2YbJwA&s=10'
    }
  ],

  Succulents: [
    {
      id: 13,
      name: 'Aloe Vera',
      cost: 11,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_I5CwnXhCRvfAjtHX-AavrStqu_LPFi5XVjUuhxeHiQ&s=10'
    },
    {
      id: 14,
      name: 'Echeveria',
      cost: 9,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqzbT5Y8SDlUChAAsaKSaqRE0Vf6NSWlE6N5UO8_HqV3TyR_0W5QypmTQ&s=10'
    },
    {
      id: 15,
      name: 'Jade Plant',
      cost: 14,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDvUT9fNE1jwZDC9LYb_LZ04wjbkHbc9NSkmGHjxKIOg&s=10'
    },
    {
      id: 16,
      name: 'Haworthia',
      cost: 12,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOQUB9FEjyfGdXm9SthfL9MBAOn4v_0Xo3jRosoINAfg&s=10'
    },
    {
      id: 17,
      name: 'Cactus',
      cost: 8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRpYZubX5WNHkERov0c258JhM7lENOaabzQ2eVT4OkoQ&s=10'
    },
    {
      id: 18,
      name: 'Burro Tail',
      cost: 13,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB6seer6zo9vashzLxdvT12c1XxXxn3hU8pB6uS2BSEg&s=10'
    }
  ]
}

function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.items)

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  )

  const addedToCart = {}

  cartItems.forEach(item => {
    addedToCart[item.name] = true
  })

  return (
    <div className="shop-page">
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">
            Cart ({totalQuantity})
          </Link>
        </div>
      </nav>

      <h1 className="page-title">Our Beautiful Plants</h1>

      {Object.entries(plantsArray).map(([category, plants]) => (
        <section key={category} className="plant-category">
          <h2>{category} Plants</h2>

          <div className="product-list">
            {plants.map(plant => (
              <div className="plant-card" key={plant.id}>
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="plant-image"
                />

                <h3>{plant.name}</h3>

                <p className="plant-price">
                  Price: ${plant.cost}
                </p>

                <button
                  className="add-button"
                  disabled={Boolean(addedToCart[plant.name])}
                  onClick={() => dispatch(addItem(plant))}
                >
                  {addedToCart[plant.name]
                    ? 'Added to Cart'
                    : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export default ProductList
