import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useGlobalContext } from "../Contexts/GlobalContext"
import ProductsList from "../components/ProductList"

export default function ProductsPage() {
    const { data } = useGlobalContext()
    return (
        <>
         <ProductsList  data={data}></ProductsList>
        </>
    )
}