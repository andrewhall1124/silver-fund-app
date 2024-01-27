import ActiveHoldings from "@/components/home/active-holdings";
import WorkInProgress from "@/components/home/work-in-progress";

export default function Home() {
  return (
    <main className="px-24 py-4">
      <ActiveHoldings/>
      <WorkInProgress/>
    </main>
  );
}
