"use client"

import { Field } from "@workspace/ui/components/field"
import { Checkbox } from "@workspace/ui/components/checkbox"
import React, { useEffect, useMemo } from "react"
import { Label } from "@workspace/ui/components/label"
import { PortfolioItem } from "@/data/types"
import { portfolioData } from "@/data/portfolio-data"
import PortfolioItemCard from "./portfolio-item-card"

export default function PortfolioClient() {
  const [items, setFilteredItems] = React.useState<PortfolioItem[]>([])
  const [filters, setFilters] = React.useState({
    Development: false,
    Photography: false,
    Design: false,
    Vfx: false,
    Marketing: false,
  })
  useEffect(() => {
    const initData = async () => {
      await setFilteredItems(portfolioData)
    }
    initData()
  }, [])
  const filtered = useMemo(() => {
    const activeFilters = Object.keys(filters).filter(
      (key) => filters[key as keyof typeof filters]
    )
    if (activeFilters.length === 0) {
      return items
    }
    const filteredItems = items.filter((item) =>
      activeFilters.includes(item.itemCategory)
    )
    return filteredItems
  }, [items, filters])
  return (
    <div className="grid gap-6 md:grid-cols-[260px_minmax(0,1fr)]">
      <div className="flex flex-col shadow-xl shadow-black/10  max-h-100 sticky top-30 z-10 rounded-2xl border border-border/60 bg-card/70 p-6 backdrop-blur-xl *:font-thmanyah-subheading-sans">
        <p className="mb-5 text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          الفئات
        </p>
        <div className="flex md:flex-col sm:flex-row gap-4 ">
          <div>
            <Field orientation={"horizontal"}>
              <Checkbox
                value="Development"
                onCheckedChange={(value) => {
                  setFilters({ ...filters, Development: value })
                }}
                id="development-filter-checkbox"
                name="filter-checkbox"
              />
              <Label htmlFor="development-filter-checkbox">
                البرمجة والتطوير
              </Label>
            </Field>
          </div>
          <div className="flex items-center gap-4">
            <Field orientation={"horizontal"}>
              <Checkbox
                value="Photography"
                onCheckedChange={(value) => {
                  setFilters({ ...filters, Photography: value })
                }}
                id="photography-filter-checkbox"
                name="filter-checkbox"
              />
              <Label htmlFor="photography-filter-checkbox">التصوير</Label>
            </Field>
          </div>
          <div className="flex items-center gap-4">
            <Field orientation={"horizontal"}>
              <Checkbox
                value="Design"
                onCheckedChange={(value) => {
                  setFilters({ ...filters, Design: value })
                }}
                id="design-filter-checkbox"
                name="filter-checkbox"
              />
              <Label htmlFor="design-filter-checkbox">التصميم الغرافيكي</Label>
            </Field>
          </div>
          <div className="flex items-center gap-4">
            <Field orientation={"horizontal"}>
              <Checkbox
                value="Vfx"
                id="vfx-filter-checkbox"
                name="filter-checkbox"
                onCheckedChange={(value) => {
                  setFilters({ ...filters, Vfx: value })
                }}
              />
              <Label htmlFor="vfx-filter-checkbox">التأثيرات البصرية</Label>
            </Field>
          </div>
          <div className="flex items-center gap-4">
            <Field orientation={"horizontal"}>
              <Checkbox
                value="Marketing"
                id="marketing-filter-checkbox"
                name="filter-checkbox"
                onCheckedChange={(value) => {
                  setFilters({ ...filters, Marketing: value })
                }}
              />
              <Label htmlFor="marketing-filter-checkbox">التسويق</Label>
            </Field>
          </div>
        </div>
      </div>
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {filtered.map((item) => (
            <PortfolioItemCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="flex min-h-60 items-center justify-center rounded-2xl border border-dashed border-border/60 bg-card/40 p-8 text-center text-muted-foreground">
          لا توجد أعمال لعرضها
        </div>
      )}
    </div>
  )
}
