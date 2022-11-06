

import { products } from '../dataCollection/products'
import ProductCard from './ProductCard'
import Button from '../Button'

export default function Product(){
    return(
        <>
        <section className="px-6 xl:px-[10%] ">
            <h2 className="font-montBold text-white">Our services</h2>
           {
           products.map((product, index) =>{
            return (
                <>
                 <ProductCard key={index} product={product} />
           
                </>
               
            )
           })
           }
               
            

           
            
        </section>
        </>
    )
}