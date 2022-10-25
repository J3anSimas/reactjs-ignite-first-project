import RepositoryItem from './RepositoryItem'
import '../styles/repositories.scss'

function RepositoryList () {
  return (
    <section className="repository-list">
      <h1>Lista de Repositorios</h1>

      <ul>
        <RepositoryItem repository="unform1" />
        <RepositoryItem repository="unform2" />
        <RepositoryItem repository="unform3" />
        <RepositoryItem repository="unform4" />
        <RepositoryItem repository="unform5" />
        <RepositoryItem />
      </ul>
    </section>
  )
}

export default RepositoryList
