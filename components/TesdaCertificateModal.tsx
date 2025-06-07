"use client"
import React, { useState } from "react"
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

interface TesdaCertificateModalProps {
  open: boolean
  onClose: () => void
}

const TesdaCertificateModal: React.FC<TesdaCertificateModalProps> = ({ open, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState('Plumbing');

  const categories = ['Plumbing', 'Photovoltaic Systems', 'Technical Drafting'];

  return (
    <Sheet open={open} onOpenChange={(openState) => !openState && onClose()}>
      <SheetContent side="bottom" className="h-1/2">
        <SheetHeader>
          <SheetTitle>Select TESDA Certificates</SheetTitle>
          <SheetDescription>
            {/* Add any description or instructions here */}
          </SheetDescription>
        </SheetHeader>
        <div className="flex border-b">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 -mb-px font-semibold ${selectedCategory === category ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'
                }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-4">
          {/* Placeholder for certification cards based on selectedCategory */}
          <p>Certifications for {selectedCategory} will be displayed here.</p>
        </div>

        <div className="mt-6 flex justify-end space-x-2">
          <Button variant="ghost" onClick={onClose}>RESET</Button>
          <Button className="bg-green-500 text-white" onClick={onClose}>APPLY</Button>
        </div>
        <SheetClose className="mt-4">Close</SheetClose>
      </SheetContent>
    </Sheet>
  )
}

export default TesdaCertificateModal
