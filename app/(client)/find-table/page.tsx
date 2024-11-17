type PageProps = {
    searchParams: Promise<{ person: string; date: string; time: string }>
}
const FindTablePage = async ({searchParams}: PageProps) => {
    const params = await searchParams;
    console.log(params);

    return (
        <div>
            FindTablePage
        </div>
    );
};

export default FindTablePage;