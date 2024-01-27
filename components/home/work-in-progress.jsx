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
import { Button } from "../ui/button"
import Link from "next/link"
import { MoreVertical } from "lucide-react"

export default function WorkInProgress(){
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
    <div className="py-12">
      <div className="text-3xl font-semibold">
        Work in progress
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
            {data.map((data)=>(
              <Link legacyBehavior href={`pitch/${data.id}`}>
                <TableRow>
                  <TableCell>{data.ticker}</TableCell>
                  <TableCell>{data.companyName}</TableCell>
                  <TableCell className='flex gap-2'>{data.owners.map((owner)=>(<div>{owner}</div>))}</TableCell>
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