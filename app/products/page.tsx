export default function Products() {
    return (
        <main>
            <div>Products Page</div>


            
            <div className="review">
                <h2>Products</h2>

                <div className="flex justify-center items-cente gap-10">
                    <div className="h-20 w-30 border p-4">
                        <a href="products/1">Product 1</a>
                    </div>
                    <div className="h-20 w-30 border p-4">
                        <a href="products/2">Product 2</a>
                    </div>
                    <div className="h-20 w-30 border p-4">
                        <a href="products/3">Product 3</a>
                    </div>
                </div>
            </div>
        </main>
    )
}