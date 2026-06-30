export default function ForItem({book}){
  return (
    <>
      <dt>
        <a href={`https://wngs.msn.to/books/${book.isbn}/${book.isbn}.jpg`}>
          {book.title} ({book.price}円)
        </a>
      </dt>
      <dd>
        {book.summary}
      </dd>
    </>
  )
}