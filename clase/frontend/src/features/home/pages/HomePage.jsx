import heroBg from "@/assets/images/imagen-hero.jpg"
import { products }  from "@/data/product/products"
import { Card } from '@/shared/components'


export default function HomePage (){

    // Encontrar una Card por ID
    const product = products.find(prod => prod.id === 1)

    return(
        <section
            className="relative min-h-screen w-full flex items-center justify-center text-black"
            style={
                {
                    backgroundImage: `url(${heroBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }
            }
        >
            <div className="relative z-10 text-center text-text-inverse">
                <h1 className="text-h1 font-bold">
                    Mis productos
                </h1>

                <div 
                className="
                    grid 
                    gap-8 
                    sm:grid-cols-2 
                    lg:grid-cols-3 
                    xl:grid-cols-4 
                    justify-items-center"
                >
                    {/* se renderiza todas las Cards */}

                    {/*{products.map((product) => (
                        <Card key={product.id} product={product}/>)
                        )} */}
                    {/* Se renderiza una Card */}
                    x

                </div>
            </div>
        </section>
    )
}