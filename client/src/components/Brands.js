const user = {
    id: 5555,
    username: "sreeepotluri"
}

const Brands = (props) => {
    return (
        <div>
            <h2 className="text-center"> {user.username}'s Preferred Brands</h2>
            <ul>
                {
                   props.brands.map((brand) => 
                   <li key={brand.id}> {brand.title} </li>
                   )
                }
            </ul>
        </div>
    );
}

export default Brands;