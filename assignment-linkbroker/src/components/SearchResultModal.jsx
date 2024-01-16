import SearchResult from "./SearchResult"

const SearchResultModal = ({results,closeModal}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center ">
      <div className="bg-white p-8 rounded-lg">
        <h2>Search Results:</h2>
        <SearchResult results={results} />
        <button className="mt-4 p-2 bg-blue-500 text-white rounded-md" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  )
}

export default SearchResultModal
