import React from 'react'
import Image from "react-bootstrap/Image";




const BannerImg = () => {
    return (
        <div className='container mt-4' style={{ display: "flex", justifyContent: "space-between" }}>

                            <Image
                            src=
                            "https://img.freepik.com/premium-vector/7-july-shopping-day-flash-sale-design-with-3d-77-number-podium-falling-confetti_1314-3476.jpg"
                            rounded />
                      <Image
                            src=
                            "https://img.freepik.com/premium-vector/7-july-shopping-day-flash-sale-design-with-3d-77-number-podium-falling-confetti_1314-3476.jpg"
                            rounded />
                      
        </div>
    )
}

export default BannerImg;