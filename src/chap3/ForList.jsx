import React, { Fragment } from 'react'
export default function ForList({src}){
  return (
    <dl>
      {
        src.map(elem => (
          <>
            <dt>
              <a href={`https://wngs.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
                {elem.title} ({elem.price}円)
              </a>
            </dt>
            <dd>
              {elem.summary}
            </dd>
          </>
        ))
      }
    </dl>
  )
}