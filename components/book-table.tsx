import BookTableForm from "@/components/form/book-table-form";

const BookTable = () => {
    return (
        <section className={"bg-slate-600/80"}>
            <div className={"w-vw py-10 px-6 text-center"}>
                <p
                    className={"text-base font-bold tracking-wider uppercase text-white"}
                >
                    your table
                </p>
                <h2
                    className={"mt-3 text-3xl capitalize font-bold tracking-wide text-white lg:text-6xl"}
                >

                    book a table
                </h2>
                <p
                    className={"mt-3 text-white/50"}
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam blanditiis deserunt ea
                    ex ipsam ipsum iusto molestias numquam officiis optio quae quisquam rerum tempora, tenetur totam
                    ullam vel voluptatem.
                </p>
            </div>
            <BookTableForm/>
        </section>
    );
};

export default BookTable;