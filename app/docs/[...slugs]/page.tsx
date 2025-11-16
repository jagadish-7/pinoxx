export default async function Slugs({
    params,
}: { params: Promise<{ slugs: string[] }>
}) {


    const {slugs} = await params;

    if(slugs?.length === 2) {
        return (
            <main>
                Welcome to docs page slug - {slugs[0]} and {slugs[1]}
            </main>
        )
    } else if(slugs?.length === 1) {
        return (
            <main className="flex justify-center items-center gap-10 flex-col h-100">
                Welcome to Docs Page. Slug - {slugs[0]}
            </main>
        )
    }



    return (
        <main className="flex justify-center items-center gap-10 flex-col h-100">
            Welcome to Docs Page default page
        </main>
    );
}