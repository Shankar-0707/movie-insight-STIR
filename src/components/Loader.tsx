export default function Loader() {
  return (
    <div className="mt-10 w-full max-w-5xl space-y-6 animate-pulse">

      <div className="h-8 bg-zinc-800 rounded w-1/2"></div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="h-96 bg-zinc-800 rounded-xl"></div>
        <div className="space-y-4">
          <div className="h-6 bg-zinc-800 rounded w-3/4"></div>
          <div className="h-6 bg-zinc-800 rounded w-1/2"></div>
          <div className="h-24 bg-zinc-800 rounded"></div>
        </div>
      </div>

      <div className="h-32 bg-zinc-800 rounded-xl"></div>
    </div>
  );
}