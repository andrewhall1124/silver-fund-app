"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"
import { InputField } from "../form-fields/input-field"
import { Minus, Plus } from "lucide-react"
import { Input } from "../ui/input"

export function AddPitchForm() {
  const [theses, setTheses] = useState([""]);

  const formSchema = z.object({
    ticker: z.string().min(1,"Required").max(10),
    companyName: z.string().min(1,"Required"),
  })

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ticker: "",
      companyName: "",
    },
  })

  const removeThesis = (index) =>{
    const newTheses = theses.filter((_, i) => i !== index);
    setTheses(newTheses);
  }
  
  const addThesis = () =>{
    setTheses([...theses,""]);
  }

  const handleThesisChange = (index, value) =>{
    const newTheses = [...theses];
    newTheses[index] = value;
    setTheses(newTheses);
  }
 
  function onSubmit(values) {
    const formData = {
      ...values,
      theses:theses.filter(thesis => thesis.trim() !== "") // Filter out empty theses
    };
    
    console.log(formData);
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
            <div className="flex gap-4">
              <div className="text-2xl font-semibold">Theses</div>
              <Button variant='outline' size='icon' type='button' onClick={addThesis}>
                <Plus/>
              </Button>
            </div>
            {theses.map((thesis, index) =>(
              <div className="flex gap-2" key={index}>
                <Input value={thesis} onChange={(e) => handleThesisChange(index, e.target.value)} form={form} placeholder={`Thesis ${index + 1}`}/>
                <Button variant='outline' size='icon' type='button' onClick={()=>removeThesis(index)}>
                  <Minus/>
                </Button>
              </div>
            ))}
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}