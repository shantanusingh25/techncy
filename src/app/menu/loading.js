// app/loading.tsx
export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 text-white">
      <div className="animate-spin h-12 w-12 rounded-full border-4 border-white border-t-transparent" />
    </div>
  );
}
