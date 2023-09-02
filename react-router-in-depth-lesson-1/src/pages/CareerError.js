import { Link, useRouteError } from "react-router-dom"


export default function CareerError() {
const error = useRouteError()
  return (
    <div className="careers-error">
      <h1>Error!</h1>
      <div>{error.message}</div>
      <Link to="/">Back to the Homepage</Link>
    </div>
  );
}
