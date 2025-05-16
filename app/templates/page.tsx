"use client"

import { useState } from "react"
import Link from "next/link"


import { Card, CardBody, CardFooter, Button, Input, Select, SelectItem, Chip } from "@nextui-org/react"
import { Search, Filter, Eye } from "lucide-react"

import { Header } from '../landing-page/partial/Header';

import { templates } from "@/lib/template-data"

export default function TemplatesPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [categoryFilter, setCategoryFilter] = useState("all")

    const filteredTemplates = templates.filter((template) => {
        const matchesSearch =
            template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            template.description.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = categoryFilter === "all" || template.category === categoryFilter

        return matchesSearch && matchesCategory
    })

    const categories = ["all", ...Array.from(new Set(templates.map((template) => template.category)))]

    return (
        <div>
            <Header />
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col items-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Template Gallery</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 text-center max-w-3xl">
                        Choose from our collection of professionally designed templates to jumpstart your website
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="flex-1">
                        <Input
                            placeholder="Search templates..."
                            startContent={<Search size={18} />}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full"
                        />
                    </div>
                    <div className="w-full md:w-64">
                        <Select
                            placeholder="Filter by category"
                            startContent={<Filter size={18} />}
                            selectedKeys={[categoryFilter]}
                            onChange={(e) => setCategoryFilter(e.target.value)}
                        >
                            {categories.map((category) => (
                                <SelectItem key={category} value={category}>
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </SelectItem>
                            ))}
                        </Select>
                    </div>
                </div>

                {filteredTemplates.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-xl text-gray-500 dark:text-gray-400">No templates found matching your criteria.</p>
                        <Button
                            color="primary"
                            variant="light"
                            className="mt-4"
                            onClick={() => {
                                setSearchQuery("")
                                setCategoryFilter("all")
                            }}
                        >
                            Clear Filters
                        </Button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredTemplates.map((template) => (
                            <Card key={template.id} className="border border-gray-200 dark:border-gray-800">
                                <CardBody className="p-0 overflow-hidden">
                                    <div className="relative aspect-[16/9] bg-gray-100 dark:bg-gray-800">
                                        <img
                                            src={template.previewImage || "/placeholder.svg"}
                                            alt={template.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </CardBody>
                                <CardFooter className="flex flex-col items-start">
                                    <div className="flex justify-between w-full mb-2">
                                        <h3 className="text-lg font-semibold">{template.name}</h3>
                                        <Chip size="sm" color="primary" variant="flat">
                                            {template.category}
                                        </Chip>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{template.description}</p>
                                    <div className="flex justify-between w-full">
                                        <Link href={`/templates/${template.id}`}>
                                            <Button color="default" variant="light">
                                                View Details
                                            </Button>
                                        </Link>
                                        <Link href={`/templates/preview/${template.id}`}>
                                            <Button color="primary" startContent={<Eye size={16} />}>
                                                Preview Template
                                            </Button>
                                        </Link>
                                    </div>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
