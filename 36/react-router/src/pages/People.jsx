import { useParams } from 'react-router-dom';

function People() {
  const { id } = useParams()

  return (
    <div>
      <h1>People</h1>
      <p>This is People page</p>
      <p>And this is the page for ID : {id}</p>
    </div>
  )
}

export default People