import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata =async ({ params }: Props): Promise<Metadata> => {
    const title=await new Promise(resolve=>{
        setTimeout(()=>{
            resolve(`Product ${params.productId}`)
        })
    });
  return {
    title: `${title}`,
  };
};

export default function PageDetails({ params }: Props) {
  return (
    <div>
      <h1>Product Details for {params.productId}!</h1>
    </div>
  );
}
