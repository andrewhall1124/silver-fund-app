import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

export default function Home() {
  const data = [
    {
      ticker: 'VIRT',
      companyName: 'Virtu Financial',
      owners: ['Andrew', 'James', 'Dipesh'],
      shares: 2356,
      beta: .38,
      investmentDate: '2023-10-21',
      purchasePrice: 17.50,
      currentPrice: 17.38,
      returnToDate: 5.01,
    },
    {
      ticker: 'VIRT',
      companyName: 'Virtu Financial',
      owners: ['Andrew', 'James', 'Dipesh'],
      shares: 2356,
      beta: .38,
      investmentDate: '2023-10-21',
      purchasePrice: 17.50,
      currentPrice: 17.38,
      returnToDate: 5.01,
    },
    {
      ticker: 'VIRT',
      companyName: 'Virtu Financial',
      owners: ['Andrew', 'James', 'Dipesh'],
      shares: 2356,
      beta: .38,
      investmentDate: '2023-10-21',
      purchasePrice: 17.50,
      currentPrice: 17.38,
      returnToDate: 5.01,
    },
    {
      ticker: 'VIRT',
      companyName: 'Virtu Financial',
      owners: ['Andrew', 'James', 'Dipesh'],
      shares: 2356,
      beta: .38,
      investmentDate: '2023-10-21',
      purchasePrice: 17.50,
      currentPrice: 17.38,
      returnToDate: 5.01,
    },
    {
      ticker: 'VIRT',
      companyName: 'Virtu Financial',
      owners: ['Andrew', 'James', 'Dipesh'],
      shares: 2356,
      beta: .38,
      investmentDate: '2023-10-21',
      purchasePrice: 17.50,
      currentPrice: 17.38,
      returnToDate: 5.01,
    },
  ]

  return (
    <main className="px-24 py-8">
      <div>
        <div className="flex gap-8">
          <div className="text-3xl font-semibold">
            Active Holdings
          </div>
          <Link href="/add">
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
                <TableHead>Shares</TableHead>
                <TableHead>Beta</TableHead>
                <TableHead>Investment Date</TableHead>
                <TableHead>Purchase Price</TableHead>
                <TableHead>Current Price</TableHead>
                <TableHead>Return to Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((data, index)=>(
              <TableRow key={index}>
                <TableCell>{data.ticker}</TableCell>
                <TableCell>{data.companyName}</TableCell>
                <TableCell className='flex gap-2'>{data.owners.map((owner, index)=>(<div key={index}>{owner}</div>))}</TableCell>
                <TableCell>{data.shares}</TableCell>
                <TableCell>{data.beta}</TableCell>
                <TableCell>{data.investmentDate}</TableCell>
                <TableCell>${data.purchasePrice}</TableCell>
                <TableCell>${data.currentPrice}</TableCell>
                <TableCell>{data.returnToDate}%</TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
}
