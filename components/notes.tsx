import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { getYear } from 'date-fns'


interface NotesProps {
    title: string
    description: string
    content: string
    footer: string
}

const notes: React.FC<NotesProps> = ({title, description, content, footer}: NotesProps) => {
  return (
    <Card className='border-none '>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
       {content} 
       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quo ad architecto optio molestiae impedit pariatur officia facere explicabo, doloribus libero nisi exercitationem dolorem? Eaque quisquam consequuntur mollitia impedit minima.
      </CardContent> 
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          {footer}
          NSMQ {getYear(Date())}
        </div> 
      </CardFooter>
    </Card>
  )
}

export default notes