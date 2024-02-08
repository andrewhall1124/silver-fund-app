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

export function AddPitchForm() {
  const [theses, setTheses] = useState([{
    placeholder: "Thesis 1",
    name: "thesis1",
    value: "",
    id: 1,
  }]);

  const formSchema = z.object({
    ticker: z.string().min(1,"Required").max(10),
    companyName: z.string().min(1,"Required"),
    thesis1: z.string(),
    thesis2: z.string(),
    thesis3: z.string(),
  })

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ticker: "",
      companyName: "",
      thesis1: "",
      thesis2: "",
      thesis3: "",
    },
  })

  const removeThesis = (id) =>{
    setTheses(
      theses.filter((thesis) => (thesis.id == id))
    )
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
            <InputField form={form} placeholder="Thesis 1" name="thesis1"/>
            <InputField form={form} placeholder="Thesis 2" name="thesis2"/>
            <InputField form={form} placeholder="Thesis 3" name="thesis3"/>
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}