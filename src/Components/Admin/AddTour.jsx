import React, { useState } from 'react';
import axios from 'axios';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './AddTour.css';
import { BASE_URL } from '../../Utils/config';

const AddTour = () => {
    const [tourLocationData, setTourLocationData] = useState({
        title: '',
        city: '',
        price: '',
        maxGroupSize: '',
        desc: '',
        photo: null, // Change to null since it's a file
    });

    const handleInputChange = (event) => {
        if (event.target.name === 'photo') {
            // If the input is a file, update the state with the file itself
            setTourLocationData({ ...tourLocationData, photo: event.target.files[0] });
        } else {
            // For other inputs, update the state normally
            const { name, value } = event.target;
            setTourLocationData({ ...tourLocationData, [name]: value });
        }
    };

    const handleAddTourLocation = async (event) => {
        event.preventDefault();
        try {
            // Create form data to append all fields, including the file
            const formData = new FormData();
            formData.append('title', tourLocationData.title);
            formData.append('city', tourLocationData.city);
            formData.append('price', tourLocationData.price);
            formData.append('maxGroupSize', tourLocationData.maxGroupSize);
            formData.append('desc', tourLocationData.desc);
            formData.append('photo', tourLocationData.photo);

            const response = await axios.post(`${BASE_URL}/tours`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data for file upload
                },
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
            });
            alert('Tour location added successfully:', response.data);
        } catch (error) {
            console.error('Error adding tour location:', error);
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
                                            <h3>Title</h3>
                                            <input type="text" name="title" placeholder="Title" value={tourLocationData.title} onChange={handleInputChange} />
                                        </label>
                                        <br />
                                        <label>
                                            <h5>City</h5>
                                            <input type="text" name="city" placeholder="City" value={tourLocationData.city} onChange={handleInputChange} />
                                        </label>
                                        <br />
                                        <label>
                                            <h5>Price</h5>
                                            <input type="number" name="price" placeholder="Price" value={tourLocationData.price} onChange={handleInputChange} />
                                        </label>
                                        <br />
                                        <label>
                                            <h5>Max. group size</h5>
                                            <input type="number" name="maxGroupSize" placeholder="Max Group Size" value={tourLocationData.maxGroupSize} onChange={handleInputChange} />
                                        </label>
                                        <br />
                                        <label>
                                            <h5>Description</h5>
                                            <textarea name="desc" placeholder="Description" value={tourLocationData.desc} onChange={handleInputChange}></textarea>
                                        </label>
                                        <br />
                                        <label>
                                            <h5>Photo</h5>
                                            <input type="file" name="photo" onChange={handleInputChange} />
                                        </label>
                                        <br />
                                        <Button className='tn btn primary__btn auth_btn' type='submit'>Add Location</Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AddTour;
