import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex h-[100vh] flex-col items-center justify-center gap-4 text-center">
      <h2 className="text-2xl font-bold">404 Not Found</h2>
      <p>Could not find requested resource</p>
      <Link
        href="/"
        className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Return Home
      </Link>
    </div>
  );
}
