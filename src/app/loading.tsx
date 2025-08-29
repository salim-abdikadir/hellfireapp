import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[80vh] space-y-6 animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center shadow-lg animate-bounce-slow">
          <span className="sr-only">Loading...</span>
          <span className="animate-spin">
            <Loader size={32} className="text-blue-500" />
          </span>
        </div>
        <div className="w-64 space-y-3">
          <div className="h-6 rounded bg-gray-200 dark:bg-gray-800 animate-pulse" />
          <div className="h-4 rounded bg-gray-200 dark:bg-gray-800 animate-pulse w-3/4" />
          <div className="h-4 rounded bg-gray-200 dark:bg-gray-800 animate-pulse w-1/2" />
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slo{
          animation: bounce-slow 1.6s infinite;
        }
      `}</style>
    </>
  );
};

export default Loading;
