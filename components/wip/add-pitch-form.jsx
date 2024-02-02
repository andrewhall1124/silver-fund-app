"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"
import { InputField } from "../form-fields/input-field"
import { Plus } from "lucide-react"
import { InputArrayField } from "../form-fields/input-array-field"

export function AddPitchForm() {
  const [theses, setTheses] = useState([{
    placeholder: "Thesis 1",
    name: "thesis1",
    value: "",
  }]);

  const formSchema = z.object({
    ticker: z.string().min(1).max(10),
    companyName: z.string(),
    thesis1: z.string(),
  })

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ticker: "",
      companyName: "",
      thesis1: "",
    },
  })

  const addThesis = () =>{
    setTheses([...theses, {
      placeholder: `Thesis ${theses.length + 1}`,
      name: `thesis${theses.length + 1}`,
      value: "",
    }])
  }
 
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return(
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="flex flex-col gap-2">
              <div className="text-2xl font-semibold">Ticker</div>
              <InputField form={form} name="ticker" placeholder="Ticker"/>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-2xl font-semibold">Company Name</div>
              <InputField form={form} name="companyName" placeholder="Company Name"/>
            </div>
          </div>
          <div className="flex flex-col gap-2">
              <div className="text-2xl font-semibold">Theses</div>
                {theses.map((thesis,index)=>(
                  <InputArrayField key={index} form={form} name={thesis.name} placeholder={thesis.placeholder}/>
                ))}
                <Button type='button' variant="outline" size="icon" onClick={addThesis}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}