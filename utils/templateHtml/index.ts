export const template = (body: { name: string; email: string; phone: string; coment: string; service: string; }) => {
    return `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Nuevo Mensaje de Contacto</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    color: #333;
                    line-height: 1.6;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    background-color: #f9f9f9;
                }
                h2 {
                    color: #0056b3;
                }
                ul {
                    list-style-type: none;
                    padding: 0;
                }
                li {
                    margin-bottom: 10px;
                }
                strong {
                    display: inline-block;
                    width: 100px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h2>Tienes un nuevo mensaje de contacto</h2>
                <ul>
                    <li><strong>Nombre:</strong> ${body.name}</li>
                    <li><strong>Email:</strong> ${body.email}</li>
                    <li><strong>Teléfono:</strong> ${body.phone}</li>
                    <li><strong>Comentario:</strong> ${body.coment}</li>
                    <li><strong>Servicio:</strong> ${body.service}</li>
                </ul>
            </div>
        </body>
        </html>
    `;
};
