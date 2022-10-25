export default function RepositoryItem (props) {
  return (
    <li>
      {/*  eslint-disable-next-line react/prop-types */}
      <strong>{props.repository ?? 'Default'}</strong>
      <p>Form in React</p>
      <a href="">Acessar repositorio</a>
    </li>
  )
}
