/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Card, Typography, Button } from "antd";
import { Fade, Zoom } from "react-awesome-reveal";
import Image from "next/image";

const { Title, Text } = Typography;

type TProps = {
  product: any;
  width?: string;
};

const ProductCard = ({ product, width = "300px" }: TProps) => {
  return (
    <Fade triggerOnce>
      <Card
        hoverable
        className="rounded-md overflow-hidden h-[400px] relative"
        style={{ width: width, borderRadius: 10, overflow: "hidden" }}
        cover={
          <Zoom>
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={300}
              height={200}
              className="w-full h-[200px]"
              style={{
                objectFit: "cover",
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            />
          </Zoom>
        }
      >
        <Fade>
          <Title level={4}>{product.title}</Title>
          <Text type="secondary">{product.description}</Text>
          <Title level={5} style={{ marginTop: 10 }}>
            ${product.price}
          </Title>
          {/* Full-width button without absolute positioning */}
          <Button type="primary" block style={{ marginTop: 15 }}>
            Add to Cart
          </Button>
        </Fade>
      </Card>
    </Fade>
  );
};

export default ProductCard;
