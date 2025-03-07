"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, Check } from "lucide-react"

interface CalendarGroup {
  name: string
  items: string[]
}

interface CalendarsProps {
  calendars: CalendarGroup[]
}

export function Calendars({ calendars }: CalendarsProps) {
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>(
    Object.fromEntries(calendars.map((cal) => [cal.name, true])),
  )

  const [selectedCalendars, setSelectedCalendars] = useState<Record<string, boolean>>(
    Object.fromEntries(calendars.flatMap((group) => group.items.map((item) => [item, true]))),
  )

  const toggleGroup = (groupName: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupName]: !prev[groupName],
    }))
  }

  const toggleCalendar = (calendarName: string) => {
    setSelectedCalendars((prev) => ({
      ...prev,
      [calendarName]: !prev[calendarName],
    }))
  }

  return (
    <div className="space-y-4">
      <h3 className="font-medium text-sm text-slate-800 px-2">Calendários</h3>

      {calendars.map((group) => (
        <div key={group.name} className="space-y-1">
          <button
            onClick={() => toggleGroup(group.name)}
            className="flex items-center w-full text-sm text-slate-700 hover:text-slate-900 px-2 py-1 rounded-md hover:bg-slate-100"
          >
            {expandedGroups[group.name] ? (
              <ChevronDown className="h-4 w-4 mr-1 text-slate-500" />
            ) : (
              <ChevronRight className="h-4 w-4 mr-1 text-slate-500" />
            )}
            <span>{group.name}</span>
          </button>

          {expandedGroups[group.name] && (
            <div className="ml-6 space-y-1">
              {group.items.map((item) => (
                <button
                  key={item}
                  onClick={() => toggleCalendar(item)}
                  className="flex items-center w-full text-sm text-slate-700 hover:text-slate-900 px-2 py-1 rounded-md hover:bg-slate-100"
                >
                  <div
                    className={`h-4 w-4 mr-2 rounded-sm flex items-center justify-center ${
                      selectedCalendars[item] ? "bg-blue-500" : "border border-slate-300"
                    }`}
                  >
                    {selectedCalendars[item] && <Check className="h-3 w-3 text-white" />}
                  </div>
                  <span>{item}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

