export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[85vh] 2xl::h-[70vh] w-full max-w-[1000px] bg-gradient-to-br from-cyan-950/20 to-cyan-950/40 rounded-xl overflow-hidden border-[1.5px] border-cyan-300/40 text-cyan-300 flex flex-col items-center backdrop-blur-xl">
      {children}
    </div>
  );
};
