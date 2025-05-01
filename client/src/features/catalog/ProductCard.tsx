import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Product } from "../../models/product"

type Props ={
    product:Product
}



export default function ProductCard({product}:Props) {
  return (
    <Card
    sx={{
        width:280,
        borderRadius:2,
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between'
    }}
    elevation={3}
    >
    <CardMedia 
    sx={{height:240,backgroundSize:"cover"}}
    image={product.pictureUrl}
    title={product.name}
    />
    <CardContent>
        <Typography sx={{textTransform:'uppercase'}} gutterBottom variant="subtitle2">
        {product.name}

        </Typography>
        <Typography sx={{color:'secondary.main'}} variant="h6" > 
            ${(product.price/100).toFixed(2)}
        </Typography>
    </CardContent>
    <CardActions
    sx={{justifyContent:'space-between'}}
    >
        <Button>Add to cart</Button>
        <Button>View</Button>


    </CardActions>

    </Card>
  )
}