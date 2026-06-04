function Skill({ name, level }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span>{name}</span>
        <span className="text-gray-500">{level}</span>
      </div>

      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-[rgb(0,222,238)] rounded-full"
          style={{ width: level }}
        />
      </div>
    </div>
  );
}

export default Skill;