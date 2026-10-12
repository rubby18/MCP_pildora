# Demo educativa: MCP para una tienda

Servidor MCP con dos herramientas:
- `search_products`: busca por texto y/o precio máximo.

Los productos son ficticios y están en memoria. El proyecto publica herramientas MCP, pero no incluye un modelo de IA ni una base de datos.

## Requisitos

Node.js 20 o superior recomendado y npm.

## Instalar y ejecutar

```bash
npm install
npm start
```

El servidor utiliza `stdio`, por lo que puede parecer que no ocurre nada en la terminal: espera mensajes de un cliente MCP.

## Probar con MCP Inspector

En otra terminal, desde esta carpeta:

```bash
npx @modelcontextprotocol/inspector node src/index.js
```

Abre la URL local que indique Inspector, conecta con el servidor y prueba las herramientas.

Ejemplo para `search_products`:

```json
{
  "query": "teclado",
  "maxPrice": 80
}
```

## Qué significa cada parte

- `McpServer`: crea el servidor MCP.
- `registerTool`: registra una herramienta que el cliente puede descubrir.
- `description`: explica la función de la herramienta.
- `inputSchema`: define y valida sus argumentos.
- La función `async`: contiene la lógica que se ejecuta al llamar la herramienta.
- `content`: devuelve el resultado.
- `serveStdio`: permite comunicarse con el cliente MCP por entrada/salida estándar.

## Limitaciones y seguridad

- Los datos son de ejemplo y se reinician al volver a arrancar.
- No hay autenticación porque solo se consultan datos ficticios.
- En producción valida entradas y controla permisos; las operaciones sensibles necesitan protecciones adicionales.
- Esta demo demuestra MCP, no la API WebMCP del navegador. Antes de una demo WebMCP, comprueba el soporte real del navegador y la especificación vigente.

## Recursos

- MCP TypeScript SDK: https://ts.sdk.modelcontextprotocol.io/v2/
- MCP Inspector: https://github.com/modelcontextprotocol/inspector
- MCP: https://modelcontextprotocol.io/
