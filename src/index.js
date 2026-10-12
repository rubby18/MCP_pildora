import { McpServer } from "@modelcontextprotocol/server";
import { serveStdio } from "@modelcontextprotocol/server/stdio";
import * as z from "zod/v4";

// Productos ficticios: en un proyecto real vendrían de una API o base de datos.
const products = [
  { id: "kb-01", name: "Teclado mecánico", category: "teclado", price: 79.99, rating: 4.7 },
  { id: "kb-02", name: "Teclado inalámbrico", category: "teclado", price: 49.99, rating: 4.2 },
  { id: "ms-01", name: "Ratón ergonómico", category: "raton", price: 29.99, rating: 4.5 },
  { id: "mn-01", name: "Monitor 27 pulgadas", category: "monitor", price: 189.99, rating: 4.6 }
];

  // TOOL 1: buscar productos por texto y precio máximo.
serveStdio(()=>{
  const server = new McpServer({name:"tienda-demo",version:"1.0.0"});

  server.registerTool(
    "search_products",
    {
      description:"Busca productos por texto opcional y precio maximo opcional",
      inputSchema: z.object({
        query:z.string().optional().describe("Texto a buscar"),
        maxPrice:z.number().positive().optional()
      })
    },
    async ({query,maxPrice})=>{
      const results=products.filter((product)=>{
        const matchesQuery=
        !query||
        product.name.includes(query)||
        product.category.includes(query)

        const matchesPrice = maxPrice===undefined||product.price <=maxPrice;
        return matchesQuery && matchesPrice
      });
      return {
        content:[{type:"text",text:JSON.stringify(results,null,2)}]
      };
    }
  );
  return server
})
