export default async function Products({
    params,
}: { params: Promise<{ productId: string }> }) {

    const productId = (await params).productId;

    return (
        <main className="flex justify-center items-center gap-10 flex-col h-100">
            Welcome to products page. Product ID - {productId}

            <div>
                See All Reviews Below:
            </div>


            <div className="review">
                <h2>Reviews</h2>

                <div className="flex justify-center items-cente gap-10">
                    <div className="h-20 w-30 border p-4">
                        <a href={`${productId}/reviews/1`}>John Review</a>
                    </div>
                    <div className="h-20 w-30 border p-4">
                        <a href={`${productId}/reviews/2`}>Jaggi Review</a>
                    </div>
                    <div className="h-20 w-30 border p-4">
                        <a href={`${productId}/reviews/3`}>Shiva Review</a>
                    </div>
                </div>
            </div>

        </main>
    );
}