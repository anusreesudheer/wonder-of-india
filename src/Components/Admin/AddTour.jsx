import React, { useState } from 'react'
import axios from 'axios';
import { Col, Container, Row ,Button} from 'react-bootstrap';
import './AddTour.css'
import { BASE_URL } from '../../Utils/config';

const AddTour = () => {
    const [tourLocationData, setTourLocationData] = useState({
        title: '',
        city: '',
        price: '',
        maxGroupSize: '',
        desc: '',
        photo: null // Change to null initially
    });
    

   // const [enterImg,setEnterImg] = useState(null);

   const handleInputChange = (event) => {
    const { name, value, files } = event.target;
    // If it's a file input, set the file instead of the value
    const updatedValue = name === 'photo' ? files[0] : value;
    setTourLocationData({ ...tourLocationData, [name]: updatedValue });
};

const handleAddTourLocation = async (event) => {
    event.preventDefault();
    try {
        const formData = new FormData();
        // Append all form data to FormData
        for (const key in tourLocationData) {
            formData.append(key, tourLocationData[key]);
        }
        const response = await axios.post(`${BASE_URL}/tours`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log('Tour location added successfully:', response.data);
        // Reset form fields after successful submission
        setTourLocationData({
            title: '',
            city: '',
            price: '',
            maxGroupSize: '',
            desc: '',
            photo: null,
            featured: false
        });
        alert('Tour location added successfully:', response.data);
    } catch (error) {
       // console.error('Error adding tour location:', error);
    }
};


    return (
        <Container>
            <Row>
                <Col>
                    <div className="add_container d-flex justify-content-between">
                        <div className="add_box">

                            <div className="add-tour-location-tab">
                                <h2>Add Tour Location</h2>
                                <div className="mb-3">
                                    <form onSubmit={handleAddTourLocation}>
                                        <label>
                                            <h3>title</h3>
                                            <input type="text" name="title" placeholder="Title" value={tourLocationData.title} onChange={handleInputChange} />
                                        </label>
                                        <br/>
                                        <label>
                                            <h5>city</h5>
                                            <input type="text" name="city" placeholder="City" value={tourLocationData.city} onChange={handleInputChange} />
                                        </label>
                                        <br/>
                                        <label>
                                            <h5>price</h5>
                                            <input type="number" name="price" placeholder="Price" value={tourLocationData.price} onChange={handleInputChange} />
                                        </label>
                                        <br/>
                                        <label>
                                            <h5>Max. group size</h5>
                                            <input type="number" name="maxGroupSize" placeholder="Max Group Size" value={tourLocationData.maxGroupSize} onChange={handleInputChange} />
                                        </label>
                                        <br/>
                                        <label>
                                            <h5>Description</h5>
                                            <textarea name="desc" placeholder="Description" value={tourLocationData.desc} onChange={handleInputChange}></textarea>
                                        </label>
                                        <br />
                                        <label>
                                            <h5>Photo URL</h5>
                                            <input type="file" name="photo"   onChange={handleInputChange} />
                                        </label>
                                        <br />
                                        <Button className='tn btn primary__btn auth_btn ' type='submit'>Add Location</Button>
                                            {/* //<button type="submit">Add Location</button> */}
                                       
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AddTour