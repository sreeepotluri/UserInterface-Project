const brands = [
    {
        id: 123,
        title: "Adidas"
    },
    {
        id: 456,
        title: "puma"
    },
    {
        id: 789,
        title: "Reebok"
    }
]

function Brands() {
    return (
        <div>
            <h2>Preferred Brands</h2>
            <ul>
                {
                   brands.map((brand) => 
                   <li key={brand.id}> {brand.title} </li>
                   )
                }
            </ul>
        </div>
    );
}

export default Brands;