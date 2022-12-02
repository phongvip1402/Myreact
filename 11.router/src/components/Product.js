import React from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom';

export default function Product() {

    const navigate = useNavigate();
    // const {categoryId} = useParams();

    const {state} = useLocation();
    console.log(state);
    return (
        <div>
            <h3>Id selected {state.category}</h3>
            <button onClick={e =>navigate(-1) }>Back</button>
        </div>
    )
}
