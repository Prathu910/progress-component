import { useState } from "react";

function ProgressBar() {
  const [duration, setDuration] = useState<number>(1);
  const [progress, setProgress] = useState<number>(0);

  const getColors = () => {
    const number = Number(progress.toFixed());

    if (number > 0 && number <= 20) {
      return 'bg-red-300'
    } else if (number > 20 && number <= 40) {
      return 'bg-orange-300'
    } else if (number > 40 && number <= 60) {
      return 'bg-yellow-300'
    } else if (number > 60 && number <= 80) {
      return 'bg-lime-300'
    } else {
      return 'bg-green-300'
    }
  }

  const handleStartProgress = () => {
    const increamentBy: number = (0.1 * 100) / duration;
    const totalIncrements: number = duration / 0.1;

    if (progress >= 100) setProgress(0);

    for (let i = 0; i < totalIncrements; i++) {
      setTimeout(() => {
        setProgress((prev) => prev + increamentBy);
      }, i * 100);
    }
  };

  return (
    <div>
      <div className="space-y-4 max-w-[500px]">
        <div className="flex gap-4 w-full">
          <input
            className="border border-black py-2 px-4 rounded-lg bg-gray-200 disabled:text-gray-400 disabled:border-gray-400"
            type="number"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            disabled={progress >= 100 ? false : progress !== 0 ? true : false}
            min={1}
          />
          <button
            className="!bg-red-400 text-white font-semibold disabled:!bg-gray-300"
            disabled={progress >= 100 ? false : progress !== 0 ? true : false}
            onClick={handleStartProgress}
          >
            Start
          </button>
        </div>
        <div className="w-full h-[30px] border border-gray-400 rounded-full relative">
          <div
            className={`h-full ${getColors()} rounded-full transition-all duration-100`}
            style={{ width: `${progress}%` }}
          ></div>
          <span className="absolute text-sm font-bold top-1 left-[50%]">
            {progress.toFixed()}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
