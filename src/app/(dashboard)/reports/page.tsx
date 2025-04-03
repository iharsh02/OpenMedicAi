import { GenerateReportDialog } from "./_components/create-reports";

export default function ReportPage() {
  return (
    <div className="flex-1 flex flex-col h-full p-4">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-blue-500">AI-Powered Report Summaries</h1>
          <p className="text-muted-foreground">Review and summarize reports with AI assistance</p>
        </div>
        <GenerateReportDialog />
      </div>
    </div>
  );
}