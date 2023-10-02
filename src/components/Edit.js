import { Form } from "react-router-dom";
import { redirect } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const Edit = (params) => {

    const post = useLoaderData();
    const id = post.id
    
    return (
    
        <div className="edit">
            <Form method="POST" action={`/update/${id}`}>
                <h1>Edit {post.name}</h1>
                <input type="text" name="photo" defaultValue={post.photo} placeholder="Photo URL"/>
                <input type="text" name="name" defaultValue={post.name} placeholder="Name"/>
                <input type="text" name="birthday" defaultValue={post.birthday} placeholder="Pet's Birthday"/>
                <input type="text" name="sex" defaultValue={post.sex} placeholder="Male/Female"/>
                <input type="text" name="breed" defaultValue={post.breed} placeholder="Breed"/>
                <input type="text" name="color" defaultValue={post.color} placeholder="Color"/>
                <input type="checkbox" name="spayed" id="spayed"/>
                    <label for="spayed">Spayed?</label>
                <input type="checkbox" name="microchipped" id="microchipped"/>
                    <label for="microchipped">Microchipped?</label>
                <input type="text" name="foodBrand" defaultValue={post.foodBrand} placeholder="Brand of Food"/>
                <input type="text" name="foodName" defaultValue={post.foodName} placeholder="Name of Food"/>
                <input type="text" name="foodAmount" defaultValue={post.foodAmount} placeholder="Amount Given"/>
                <input type="text" name="foodFrequency" defaultValue={post.foodFrequency} placeholder="How often to feed"/>
                <input type="text" name="medicationName" defaultValue={post.medicationName} placeholder="Medication Name"/>
                <input type="text" name="medicationDosage" defaultValue={post.medicationDosage} placeholder="Medication Dosage"/>
                <input type="text" name="medicationFrequency" defaultValue={post.medicationFrequency} placeholder="Medication Frequency"/>
                <input type="text" name="vetName" defaultValue={post.vetName} placeholder="Name of Vet"/>
                <input type="text" name="vetLocation" defaultValue={post.vetLocation} placeholder="Vet Address"/>
                <input type="text" name="vetPhone" defaultValue={post.vetPhone} placeholder="Phone Number"/>
                <input type="text" name="vetWebsite" defaultValue={post.vetWebsite} placeholder="Website URL"/>
                <input type="submit"/>
            </Form>
        
            <button onClick={() => {return redirect(`/post/${id}`)}}>Cancel</button>

        </div>

    )
}

export default Edit;