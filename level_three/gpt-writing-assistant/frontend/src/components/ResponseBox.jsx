function ResponseBox({ response }) {
  if (!response) return null

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow mt-4">
      <h2 className="font-semibold mb-2">✏️ Result</h2>
      <pre className="whitespace-pre-wrap">{response}</pre>
    </div>
  )
}

export default ResponseBox
