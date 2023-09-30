import { redirect } from "react-router-dom";
import URL from "./databaseUrl";

export const createAction = async ({request}) => {
    const formData = await request.formData()

    const newPetter = {
        photo: formData.get('photo'),
        name: formData.get('name'),
        birthday: formData.get('birthday'),
        sex: formData.get('sex'),
        breed: formData.get('breed'),
        color: formData.get('color'),
        spayed: formData.get('spayed'),
        microchipped: formData.get('microchipped'),
        foodBrand: formData.get('foodBrand'),
        foodName: formData.get('foodName'),
        foodAmount: formData.get('foodAmount'),
        foodFrequency: formData.get('foodFrequency'),
        medicationName: formData.get('medicationName'),
        medicationDosage: formData.get('medicationDosage'),
        medicationFrequency: formData.get('medicationFrequency'),
        vetName: formData.get('vetName'),
        vetLocation: formData.get('vetLocation'),
        vetPhone: formData.get('vetPhone'),
        vetWebsite: formData.get('vetWebsite')
    }

    await fetch(URL, {
        method: 'post',
        headers: { 'Content-Type': 'applicaton/json'},
        body: JSON.stringify(newPetter)
    })

    return redirect('/')
}

export const updateAction = async ({request, params}) => {
    const formData = await request.formData()

    const id = params.id

    const updatedPetter = {
        photo: formData.get('photo'),
        name: formData.get('name'),
        birthday: formData.get('birthday'),
        sex: formData.get('sex'),
        breed: formData.get('breed'),
        color: formData.get('color'),
        spayed: formData.get('spayed'),
        microchipped: formData.get('microchipped'),
        foodBrand: formData.get('foodBrand'),
        foodName: formData.get('foodName'),
        foodAmount: formData.get('foodAmount'),
        foodFrequency: formData.get('foodFrequency'),
        medicationName: formData.get('medicationName'),
        medicationDosage: formData.get('medicationDosage'),
        medicationFrequency: formData.get('medicationFrequency'),
        vetName: formData.get('vetName'),
        vetLocation: formData.get('vetLocation'),
        vetPhone: formData.get('vetPhone'),
        vetWebsite: formData.get('vetWebsite')
    }

    await fetch(URL + `${id}`, {
        method: 'put',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(updatedPetter)
    })

    return redirect(`/post/${id}`)
}

export const deleteAction = async ({params}) => {
    const id = params.id
    await fetch(URL + `${id}`, {
        method: 'delete',
    })

    return redirect('/')
}