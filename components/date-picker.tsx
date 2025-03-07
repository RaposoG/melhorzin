"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function DatePicker() {
  const [currentDate, setCurrentDate] = useState(new Date())

  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ]

  const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay()
  }

  const prevMonth = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      newDate.setMonth(prev.getMonth() - 1)
      return newDate
    })
  }

  const nextMonth = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      newDate.setMonth(prev.getMonth() + 1)
      return newDate
    })
  }

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  const today = new Date()

  const daysInMonth = getDaysInMonth(year, month)
  const firstDayOfMonth = getFirstDayOfMonth(year, month)

  const days = []
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null)
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i)
  }

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <button onClick={prevMonth} className="p-1 rounded-full hover:bg-slate-100">
          <ChevronLeft className="h-5 w-5 text-slate-600" />
        </button>

        <h3 className="font-medium text-slate-800">
          {monthNames[month]} {year}
        </h3>

        <button onClick={nextMonth} className="p-1 rounded-full hover:bg-slate-100">
          <ChevronRight className="h-5 w-5 text-slate-600" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-xs font-medium text-slate-500 py-1">
            {day}
          </div>
        ))}

        {days.map((day, index) => {
          const isToday = day === today.getDate() && month === today.getMonth() && year === today.getFullYear()

          return (
            <div key={index} className="aspect-square">
              {day ? (
                <button
                  className={`w-full h-full flex items-center justify-center text-sm rounded-full hover:bg-blue-100 ${
                    isToday ? "bg-blue-500 text-white hover:bg-blue-600" : "text-slate-700"
                  }`}
                >
                  {day}
                </button>
              ) : (
                <div></div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

