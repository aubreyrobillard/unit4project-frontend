import { Link, useLoaderData } from "react-router-dom";
import { Form } from "react-router-dom";


const Show = (props) => {
    const post = useLoaderData()
    if(post.spayed === true){
        post.spayed = "Y"
    }else {
        post.spayed = "N"
    }
    
    if(post.microchipped === true){
        post.microchipped = "Y"
    }else {
        post.microchipped = "N"
    }

    const cakeIcon = <img src='https://i.pinimg.com/originals/3f/2f/48/3f2f48437d350bff3effd49a9d8bc351.png' alt="birthday cake"/>

    return <div className="showPage">
        {/* MAIN SHOW CARD */}
        <div className="basicInfo">
            <div className="profilePhoto">
                <img src={post.photo} alt={post.name}/>
            </div>
            <h1>{post.name}</h1>
            <h2>{cakeIcon} {post.birthday}</h2>
            <h2>Sex: {post.sex}</h2>
            <h2>Breed: {post.breed}</h2>
            <h2>Color: {post.color}</h2>
            <h2>Spayed/Neutured: {post.spayed}</h2>
            <br/>
            <h2>Microchipped: {post.microchipped}</h2>
        </div>
        
        {/* EDIT BUTTON */}
        <Link to='/update/:id'>
            <button>Edit</button>
        </Link>
        
        {/* DELETE BUTTON */}
        <Form method="POST" action={`/delete/${post.id}`}>
            <button>Delete</button>
        </Form>
        <div className="food">
            <h1>Food</h1>
            <h3>Brand: {post.foodBrand}</h3>
            <h3>Name: {post.foodName}</h3>
            <h3>Amount: {post.foodAmount}</h3>
            <h3>Frequency: {post.foodFrequency}</h3>
        </div>

        <div className="medication">
            <h1>Medication</h1>
            <h3>Name: {post.medicationName}</h3>
            <h3>Dosage: {post.medicationDosage}</h3>
            <h3>Frequency: {post.medicationFrequency}</h3>
        </div>

        <div className="vet">
            <h1>Vet</h1>
            <h3>Name: {post.vetName}</h3>
            <h3>Location: {post.vetLocation}</h3>
            <h3># {post.vetPhone}</h3>
            <h3>{post.vetWebsite}</h3>
            
        </div>

    </div>
}

export default Show;

