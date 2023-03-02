import React from "react"
import DocumentCounter from "./counter/documents"
import TaskCounter from "./counter/tasks"
import Header from "./header"
import WorkSchedule from "./work_schedules"

export const Components = {
    header: <Header />,
    documentCounter: <DocumentCounter />,
    taskCounter: <TaskCounter />,
    workSchedule: <WorkSchedule />
}