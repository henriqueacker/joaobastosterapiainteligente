export default function Title({ titulo }) {
    return (
      <div className="mb-3">
        <h2 className="text-4xl font-semibold">{titulo}</h2>
        <div className="w-12 h-0.5 bg-lime-500 rounded-full mt-1" />
      </div>
    );
  }