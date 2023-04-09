import React from 'react'
import {useNavigate} from 'react-router-dom';
import Card from './Card';
import { data } from './Data';



function Procedures() {
    const navigate = useNavigate();

    const goToCarddetails=(item)=>{
        navigate('/CardDetails',{state:{item}});
          }

    return (
        <div className="content">

            <h1 className="heading">Procedures</h1>


            {/* Treatment block container start */}
            <div className="treatmentContainer">
                {
                    data.map((item, k) => {
                        return (


                           <div onClick={()=>{goToCarddetails(item)}}>
                                <Card item={item} key={k} />
                            </div>


                        )
                    })
                }
                {/* Jsondata mapping end */}
            </div>
            {/* Treatment block container end */}
        </div>
    )
}

export default Procedures;
