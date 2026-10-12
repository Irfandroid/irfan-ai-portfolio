import Link from "next/link";

export default function NotFound() {
  return <main className="not-found shell"><p className="eyebrow">404 / NOT FOUND</p><h1>I could not find this page.</h1><Link className="button button-primary" href="/">Return home</Link></main>;
}
