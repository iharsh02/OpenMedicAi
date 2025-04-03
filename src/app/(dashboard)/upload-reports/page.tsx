import { UploadReportsDialog } from "./_components/upload-reports";

export default function ReportPage() {
    return (
      <div className="flex-1 flex flex-col h-full p-4">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-blue-500">Submit Medical Reports</h1>
            <p className="text-muted-foreground">Easily upload your medical documents</p>
          </div>
          <UploadReportsDialog />
        </div>
      </div>
    );
  }