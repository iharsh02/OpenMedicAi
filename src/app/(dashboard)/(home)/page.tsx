import Greeting from "./_component/greeting";
export default function HomePage() {
  return (
    <div className="flex-1 flex flex-col h-full p-4">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <Greeting />
        </div>
      </div>
    </div>
  );
}
