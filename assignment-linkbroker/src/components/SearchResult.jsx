
const SearchResult = ({results}) => {
  return (
    <div className="w-screen h-[300px] overflow-y-hidden relative">
      <h2>Search Results:</h2>
      <div className="grid grid-cols-5 gap-4">
        {results.map((result) => (
          <div key={result.id}>
            <img src={result.webformatURL} alt={result.tags} />
            <p>{result.tags}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchResult
