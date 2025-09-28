// components/FullPageLoader.jsx
export default function FullPageLoader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 via-white to-purple-200 z-50">
      {/* Fancy heading */}
      <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 text-transparent bg-clip-text animate-pulse mb-6">
        J Boost 🚀
      </h1>

      {/* Animated dots */}
      <div className="flex space-x-3">
        <span className="w-4 h-4 bg-purple-500 rounded-full animate-bounce"></span>
        <span className="w-4 h-4 bg-pink-500 rounded-full animate-bounce delay-150"></span>
        <span className="w-4 h-4 bg-indigo-500 rounded-full animate-bounce delay-300"></span>
      </div>
    </div>
  );
}
