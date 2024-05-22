import React from "react";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  Card,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
type Props = {
    image: any;
    title: string;
    subtitle: string;
    slug: string
};

export const ProductCard = ({image, title, subtitle, slug}: Props) => {
 
 
  return (
    <Card className="w-full max-w-sm">
      <div className="aspect-w-4 aspect-h-5 relative">
        <Image
          alt={`Product image of ${title}`}
          className="object-cover rounded-t-lg"
          height={500}
          src={image}
          style={{
            aspectRatio: "400/500",
            objectFit: "cover",
          }}
          width={400}
        />
      </div>
      <CardHeader className="grid gap-1 p-4">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link href={`products/${slug}`}>
        <Button className="bg-green-900">Learn more</Button>
        </Link>
      </CardContent>
    </Card>
  );
};

 
