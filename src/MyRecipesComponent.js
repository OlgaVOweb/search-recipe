import accept from './accept.png'

function MyRecipesComponents({label, image, calories, ingredients}) {
    return (
        <div className="box">
        <div className="container">
            <h2>{label}</h2>
        </div>
        <div className="container">
            <img className='imgRecipe' src={image} alt="recipe"/>
        </div>
        <ul className="container list">
            {ingredients.map((ingredient, index) => (
                <li key={index}>
                    <img src={accept} alt="accept" className='icon'/>
                {ingredient}</li>
            ))}
        </ul>
        <div className="container cal">
        <p>{calories.toFixed()} calories</p>
        </div>
    </div>)
}

export default MyRecipesComponents;