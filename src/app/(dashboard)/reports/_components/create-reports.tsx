"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

export function GenerateReportDialog() {
  const [open, setOpen] = useState(false);

  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
      uploadedReports: [] as string[],
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Create Report</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="space-y-6">
          <div className="space-y-2">
            <DialogTitle className="text-xl font-semibold">Create New Report</DialogTitle>
            <p className="text-sm text-muted-foreground">
              Fill in the details below to create a new report.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              {/* Title Field */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Report Title</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., MRI Analysis Report" {...field} />
                    </FormControl>
                    <FormDescription>Give your report a clear, descriptive title.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Briefly describe the report..."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Provide additional details about this report (optional).
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full mt-4" disabled>
                Create Report
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}