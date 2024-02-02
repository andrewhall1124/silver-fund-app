'use client'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MoreVertical } from "lucide-react"

export default function Page(){
  const data = [
    {
      ticker: 'EA',
      companyName: 'Electronic Arts',
      owners: ['Andrew', 'Nick', 'Brandon'],
      theses:[
        'Video Game Portfolio',
        'Long Term Competitive Advantage'
      ],
      beta: .85,
      currentPrice: 135.21,
      targetPrice: 188.21,
      impliedUpside: 38.01,
      id: 12345,
    },
    {
      ticker: 'EA',
      companyName: 'Electronic Arts',
      owners: ['Andrew', 'Nick', 'Brandon'],
      theses:[
        'Video Game Portfolio',
        'Long Term Competitive Advantage'
      ],
      beta: .85,
      currentPrice: 135.21,
      targetPrice: 188.21,
      impliedUpside: 38.01,
      id: 12345,
    },
    {
      ticker: 'EA',
      companyName: 'Electronic Arts',
      owners: ['Andrew', 'Nick', 'Brandon'],
      theses:[
        'Video Game Portfolio',
        'Long Term Competitive Advantage'
      ],
      beta: .85,
      currentPrice: 135.21,
      targetPrice: 188.21,
      impliedUpside: 38.01,
      id: 12345,
    },
    {
      ticker: 'EA',
      companyName: 'Electronic Arts',
      owners: ['Andrew', 'Nick', 'Brandon'],
      theses:[
        'Video Game Portfolio',
        'Long Term Competitive Advantage'
      ],
      beta: .85,
      currentPrice: 135.21,
      targetPrice: 188.21,
      impliedUpside: 38.01,
      id: 12345,
    },
    {
      ticker: 'EA',
      companyName: 'Electronic Arts',
      owners: ['Andrew', 'Nick', 'Brandon'],
      theses:[
        'Video Game Portfolio',
        'Long Term Competitive Advantage'
      ],
      beta: .85,
      currentPrice: 135.21,
      targetPrice: 188.21,
      impliedUpside: 38.01,
      id: 12345,
    },
  ]
  return(
    <div className="py-8 px-24">
        <div className="flex gap-8">
          <div className="text-3xl font-semibold">
            Work in progress
          </div>
          <Link href="/wip/add">
            <Button>Add new</Button>
          </Link>
        </div>
      <div className="py-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Ticker</TableHead>
              <TableHead>Company Name</TableHead>
              <TableHead>Owners</TableHead>
              <TableHead>Beta</TableHead>
              <TableHead>Current Price</TableHead>
              <TableHead>Target Price</TableHead>
              <TableHead>Implied Upside</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((data, index)=>(
              <Link key={index} legacyBehavior href={`wip/${data.id}`}>
                <TableRow className="cursor-pointer">
                  <TableCell>{data.ticker}</TableCell>
                  <TableCell>{data.companyName}</TableCell>
                  <TableCell className='flex gap-2'>{data.owners.map((owner, index)=>(<div key={index}>{owner}</div>))}</TableCell>
                  <TableCell>{data.beta}</TableCell>
                  <TableCell>${data.currentPrice}</TableCell>
                  <TableCell>${data.targetPrice}</TableCell>
                  <TableCell>{data.impliedUpside}%</TableCell>
                </TableRow>
              </Link>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}