"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils";
import { productsArray } from "@/lib/assets/copy/products";
import { toast } from '@/components/ui/use-toast';
const formSchema = z.object({
  name: z.string().min(4),
  businessName: z.string().min(2).max(50),
  industry: z.string().min(3),
  emailAddress: z.string().min(1).email(),
  product: z.string({
    required_error: "Please select a product",
  }),
  message: z.string().min(20),
});

export const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

  });

  const products = productsArray.map((product) => {
    return {
      label: product.name,
      value: product.name,
    };
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const { businessName, emailAddress, industry, message, name, product } = values;

    try {
      const res = await fetch("http://localhost:3000/api/email", {
        method: "POST",
        body: JSON.stringify({
          businessName,
          emailAddress,
          industry,
          message,
          name,
          product
        }),
        headers: {
          "content-type": "application/json",
        },
      });

      const body = await res.json();

      if (res.ok) {
        toast({
          title: "Enquiry sent",
          description: "a member of our dedicated team will be in contact with you soon",
          className: "bg-lime-300"
        })
        form.reset({
          businessName: "",
          emailAddress: "", 
          industry: "",
          message: "",
          name: "", 
          product: ""
        })
      } else {
        toast({
          title: "Error",
          description: "contact form not sent",
          className: "bg-red-500 text-white"
        })
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
         
        <FormField
          control={form.control}
          name="businessName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Business name</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="industry"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Industry</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="emailAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email address</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
             <FormField
          control={form.control}
          name="product"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a product" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {
                    products.map((product, index) => {
                      return (
                        <SelectItem key={index} value={product.value}>{product.label}</SelectItem>
                      )
                    })
                  }
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your message</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder="Your message here..." />
              </FormControl>
              {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full self-center" type="submit">
          Submit
        </Button>
      </form>

    </Form>
  );
};
