const ComingSoonPage = ({ name = "page" }: { name: string }) => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div>
        <div>{name} page is</div>
        <div className="text-6xl font-semibold">Coming Soon!</div>
      </div>
    </div>
  );
};

export default ComingSoonPage