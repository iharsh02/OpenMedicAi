import { z }  from "zod";

export const createReportSchema = z.object({
    title : z.string().min(3 , "Report title must be atleast 3 characters"),
    description : z.string().min(5 , "Description must be atleast 10 characters").optional(),
    uploadedReports : z.array(z.string().uuid()),
})

export type createReportSchemaType = z.infer<typeof createReportSchema>

export const UploadReportSchema = z.object({
    name: z.string().min(3, "Report title must be atleast 3 characters"),
    file: z.object({
        fileName : z.string(),
        fileUrl : z.string().url(),
    })
})

export type UploadReportSchemaType = z.infer<typeof UploadReportSchema>