import { Navigation } from "@/components/navigation";
import { FilterBar } from "@/components/filter-bar";
import { SummaryStats } from "@/components/summary-stats";
import { TrafficTrendChart } from "@/components/traffic-trend-chart";
import { TrafficDonutCharts } from "@/components/traffic-donut-charts";
import { TopSourceTables } from "@/components/top-source-tables";
import { DistributionSection } from "@/components/distribution-section";

export default function SummaryPage() {
  return (
    <div>
      <Navigation />
      <div className="container mx-auto p-4">
        <FilterBar />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <SummaryStats />
          </div>
          <div className="md:col-span-2">
            <TrafficTrendChart />
          </div>
        </div>
        <TrafficDonutCharts />
        <TopSourceTables />
        <DistributionSection />
      </div>
    </div>
  );
}
