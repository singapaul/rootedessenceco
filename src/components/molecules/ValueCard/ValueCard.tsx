import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
 
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
type Props = {
    title: string,
    description: string,
};

const ValueCard = ({title,description }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
     
    </Card>
  );
};

export default ValueCard;
