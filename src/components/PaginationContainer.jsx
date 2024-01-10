import React, { useEffect } from 'react'
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'
const PaginationContainer = () => {
  const { meta } = useLoaderData()
  const { pageCount, page } = meta.pagination
  const { search, pathname } = useLocation()
  const navigate = useNavigate()
  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1
  })

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search)
    searchParams.set('page', pageNumber)
    console.log(pathname)
    console.log(`${pathname}?${searchParams.toString()}`)
    navigate(`${pathname}?${searchParams.toString()}`)
  }

  if (pageCount < 2) return null

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => handlePageChange(page - 1)}
        >
          Prev
        </button>
        {pages.map((pageNumber) => {
          console.log(page)
          return (
            <button
              key={pageNumber}
              className={`btn btn-xs sm:btn-md border-none join-item ${
                pageNumber === page ? 'bg-base-300 border-base-300' : ''
              }`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          )
        })}
        <button
          className="btn btn-xs sm:btn-md border-none join-item"
          onClick={() => handlePageChange(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default PaginationContainer
