import { Navigation } from "@/components/navigation";
import { FilterBar } from "@/components/filter-bar";
import { InvalidTrafficAnalysis } from "@/components/invalid-traffic-analysis";
import { ComplianceIssues } from "@/components/compliance-issues";
import { LowIntentUser } from "@/components/low-intent-user";

export default function AnalysisPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      <div className="container mx-auto p-4">
        <FilterBar />
        <div className="grid grid-cols-1 gap-4 mt-4">
          <InvalidTrafficAnalysis />
          <ComplianceIssues />
          <LowIntentUser />
        </div>
      </div>
    </div>
  );
} 