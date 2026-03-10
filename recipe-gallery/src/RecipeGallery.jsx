
function RecipeGallery() {
    // Normal Tests Cases - display a list of recipes with their titles, images, and ingredients
// Edge case 1 const recipes
// Edge case 2 empty Ingredients ingredients: []
// Edge case 3 missing image image: ""
    const recipes = [
    {
        id: 1,
        title: "Spaghetti Carbonara",
        ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"],
        image: "https://images.unsplash.com/photo-1588013273468-315fd88ea34c"
    },
    {
        id: 2,
        title: "Chicken Salad",
        ingredients: ["Chicken", "Lettuce", "Tomatoes", "Dressing"],
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
    },
    {
        id: 3,
        title: "Pancakes",
        ingredients: ["Flour", "Eggs", "Milk", "Sugar"],
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93"
    }
];

return (
    <div className="gallery">
        {recipes.map((recipe) => (
        <div key={recipe.id} className="card">
            <h2>{recipe.title}</h2>
            
            <img src={recipe.image} alt={recipe.title} width="200" />
            
            <h4>Ingredients:</h4>
            <ul>
            {recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>

        </div>
    ))}
    </div>
    );
}

export default RecipeGallery;