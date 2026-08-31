import { useParams } from "react-router-dom"

const books = [
    { id: 1, title: "ვეფხისტყაოსანი", author: "შოთა რუსთაველი", year: 1200, rating: 5.0 },
    { id: 2, title: "დათა თუთაშხია", author: "ჭაბუა ამირეჯიბი", year: 1975, rating: 4.9 },
    { id: 3, title: "სამანიშვილის დედინაცვალი", author: "დავით კლდიაშვილი", year: 1897, rating: 4.7 }
];

const UseParams = () => {
    const { book_id } = useParams()
    const books_info = books.find((item) => {
        return item.id == Number(book_id)
    })
    console.log(books_info)
    return (
        <>
            <h1>{books_info.id} </h1>
            <h1>{books_info.title} </h1>
            <h1>{books_info.author} </h1>
            <h1>{books_info.year} </h1>
            <h1>{books_info.rating} </h1>
        </>
    )
}

export default UseParams