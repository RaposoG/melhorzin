"use client"

import { useState } from 'react'
import { DockIcon } from "@/components/magicui/dock"
import { Pen } from "lucide-react"
import { ResumeModal } from '@/components/ResumeModal'

export function EditButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>
        <DockIcon className="bg-red-500 text-primary-foreground cursor-pointer">
          <Pen className="size-5" />
        </DockIcon>
      </button>
      <ResumeModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </>
  )
}