import ScoreGauge from "~/Components/ScoreGauge";

const ScoreBadge = ({ score }: { score: number }) => {
  const badgeColor =
    score > 69
      ? "bg-badge-green"
      : score > 49
      ? "bg-badge-yellow"
      : "bg-badge-red";
  const textColor =
    score > 69
      ? "text-green-600"
      : score > 49
      ? "text-yellow-600"
      : "text-red-600";
  const badgeText =
    score > 69 ? "Strong" : score > 49 ? "Good Start" : "Needs Work";

  return (
    <div className={`score-badge ${badgeColor}` }>
      <p className={`text-xs ${textColor} font-semibold`}>{badgeText}</p>
    </div>
  );
};

const Category = ({ title, score }: { title: string; score: number }) => {
  const textColor =
    score > 69
      ? "text-green-600"
      : score > 49
      ? "text-yellow-600"
      : "text-red-600";

  return (
    <div className="resume-summary">
      <div className="category bg-gray-100 border-2 border-rose-950/20 rounded-xl p-4 flex flex-row items-center justify-between text-shadow-md text-sm ">
        <div className="flex flex-row gap-2 items-center justify-center">
          <p className="text-xl">{title}</p>
          <ScoreBadge score={score} />
        </div>
        <p className="text-xl ">
          <span className={textColor}>{score}</span>/100
        </p>
      </div>
    </div>
  );
};

const Summary = ({ feedback }: { feedback: Feedback }) => {
  return (
    <div className=" rounded-2xl shadow-md w-full bg-[linear-gradient(7deg,rgba(202,218,235,1)_0%,rgba(242,242,242,1)_100%)]">
      <div className="flex flex-row max-sm:flex-col  items-center p-4 gap-8">
        <ScoreGauge score={feedback.overallScore} />
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold border-b-2 ">Your Resume Score</h2>
          <p className="text-sm text-gray-500 border-b-2 border-rose-950/20 pb-2 max-w-md">
            This score is calculated based on the variables listed below.
          </p>
        </div>
      </div>
      <Category title="Tone & Style" score={feedback.toneAndStyle.score} />
      <Category title="Content" score={feedback.content.score} />
      <Category title="Structure" score={feedback.structure.score} />
      <Category title="Skills" score={feedback.skills.score} />
    </div>
  );
};

export default Summary;