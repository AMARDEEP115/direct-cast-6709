//CategoriesToBag
import React from 'react'

function ShopBycategory(props) {
    const { url, id } = props
    return (
        <>
            <div>
                <img src={url} style={{ width: "100%" }} alt="noimg" />

            </div></>

    )
}

export default ShopBycategory;