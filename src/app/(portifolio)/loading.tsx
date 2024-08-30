export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="flex space-x-2">
        <div className="w-2 h-12 bg-orange animate-bounce"></div>
        <div className="w-2 h-16 bg-orange animate-bounce delay-150"></div>
        <div className="w-2 h-20 bg-orange animate-bounce delay-300"></div>
        <div className="w-2 h-24 bg-orange animate-bounce delay-450"></div>
        <div className="w-2 h-28 bg-orange animate-bounce delay-600"></div>
      </div>
    </div>
  );
}
