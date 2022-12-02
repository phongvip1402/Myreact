import React from 'react'
import { useNavigate } from 'react-router-dom';

function Category() {
    const navigate = useNavigate();
    const sendDataToProduct = e => {
        // navigate(`/product/${e.target.value}`)
        navigate('/product',{state: {category: e.target.value}} )
    }
    return (
        <div>
            <h2>Select a Category:</h2>
            <select defaultValue='default' onChange={sendDataToProduct}>
                <option value='default' disabled hidden >Choose your car</option>
                <option value="Honda">Honda</option>
                <option value="Suzuki">Suzuki</option>
                <option value="Yamaha">Yamaha</option>
            </select>
        </div>
    );
}

export default Category