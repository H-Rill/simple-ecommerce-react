import React, { useState } from "react";

const AddProduct = ({addProduct}) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImageUrl] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            title: title,
            description: description,
            price: price,
            image: image
        };

        addProduct(newProduct);

        setTitle('');
        setDescription('');
        setPrice('');
        setImageUrl('');
    };

  return (
    <div className="container my-5">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label >Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Title"
            onChange={(p) => setTitle(p.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="Description"
            onChange={(p) => setDescription(p.target.value)}
          />
        </div>
        <div className="form-group">
          <label >Price</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter price"
            onChange={(p) => setPrice(p.target.value)}
          />
        </div>
        <div className="form-group">
          <label >Image url</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter image url"
            onChange={(p) => setImageUrl(p.target.value)}
          />
        </div>
        <div className="form-check">
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
