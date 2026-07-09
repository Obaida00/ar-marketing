import { CodeIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon, IconSvgElement } from '@hugeicons/react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@workspace/ui/components/card'
import React from 'react'

export default function ServiceShowcaseCard({ icon, title, description }: { icon: IconSvgElement, title: string, description: string }) {
    return (
        <Card className="bg-background/80 border ring-0 border-primary/70 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
            <CardHeader>
                <CardTitle>
                    <div className="w-15 h-15 rounded-xl bg-accent/40 border border-primary/80 flex items-center justify-center">
                        <HugeiconsIcon icon={icon} className="size-8 text-primary" strokeWidth={2} />
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <CardTitle className="font-thmanyah-heading text-xl">{title}</CardTitle>
            </CardContent>
            <CardFooter>
                <CardDescription className="font-thmanyah-subheading-sans">{description}</CardDescription>
            </CardFooter>
        </Card>
    )
}
