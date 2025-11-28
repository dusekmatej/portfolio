import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/articles')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex justify-center">
        <ul className="absolute top-40 text-3xl">
          <li className="m-5"><a className='' href="#">How to fake git commits.</a></li>
          <li className="m-5"><a className='' href="#">Article</a></li>
        </ul>
    </div>
  );
}