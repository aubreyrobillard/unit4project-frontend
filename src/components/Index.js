import { useLoaderData, Form } from "react-router-dom";
import Post from "./Post";

const Index = (props) => {
    const petters = useLoaderData()
    
     
    return <>
        <div className="create">
            <h1>Add a Petter</h1>
            <Form method='post' action='/create'>
            <input type="text" name="photo" placeholder="Photo URL"/>
                <input type="text" name="name" placeholder="Name"/>
                <input type="text" name="birthday" placeholder="Pet's Birthday"/>
                <input type="text" name="sex" placeholder="Male/Female"/>
                <input type="text" name="breed" placeholder="Breed"/>
                <input type="text" name="color" placeholder="Color"/>
                <input type="checkbox" name="spayed" id="spayed"/>
                    <label for="spayed">Spayed?</label>
                <input type="checkbox" name="microchipped" id="microchipped"/>
                    <label for="microchipped">Microchipped?</label>
                <input type="text" name="foodBrand" placeholder="Brand of Food"/>
                <input type="text" name="foodName" placeholder="Name of Food"/>
                <input type="text" name="foodAmount" placeholder="Amount Given"/>
                <input type="text" name="foodFrequency" placeholder="How often to feed"/>
                <input type="text" name="medicationName" placeholder="Medication Name"/>
                <input type="text" name="medicationDosage" placeholder="Medication Dosage"/>
                <input type="text" name="medicationFrequency" placeholder="Medication Frequency"/>
                <input type="text" name="vetName" placeholder="Name of Vet"/>
                <input type="text" name="vetLocation" placeholder="Vet Address"/>
                <input type="text" name="vetPhone" placeholder="Phone Number"/>
                <input type="text" name="vetWebsite" placeholder="Website URL"/>
                <input type="submit"/>
            </Form>
        </div>
    
        {petters.map((petter) => <Post post={petter} key={petter.id}/> )};
    </> 
    
};

export default Index;