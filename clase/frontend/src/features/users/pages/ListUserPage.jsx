    import DataTable from "@/shared/components/DataTable"
    import {UserColumns}  from "@/features/users"
    import { users } from "@/data/user/users"
    import { useState } from "react"
    import ReportConfigModal from "../reports/components/ReportConfigModal"
    import { Button } from "../../../shared/components"


    export default function ListUserPage() {

            const [ IsReportModalOpen, setIsReportModalOpen] = useState(false)
    return (
        <div className="p-6">

        <h1 className="text-xl font-semibold mb-4">
            Usuarios
        </h1>

            <Button
                variant= "primary"
                onClick = {() => setIsReportModalOpen(true)}
            >generar reporte</Button>

        <DataTable
            data={users}
            columns={UserColumns}
        />

           <ReportConfigModal
                isOpen = {IsReportModalOpen}
                onClose = {() => setIsReportModalOpen(false)}
            ></ReportConfigModal>

        </div>
    )
    }

