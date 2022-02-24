const fs = require('fs');

class Contenedor {
  constructor() {
    this.filePath = "./products.txt";
  }
  async read() {
    try {
      const users = await fs.promises.readFile(this.filePath, "utf-8");
      return JSON.parse(users);
    } catch (err) {
      return [];
    }
  }
  async save(title, price, thumbnail) {
    try {
      const products = await this.read();
      const newProduct = {
        id: products.length + 1,
        title,
        price,
        thumbnail,
      };
      products.push(newProduct);
      await fs.promises.writeFile(
        this.filePath,
        JSON.stringify(products, null, 2)
      );
      return `Añadido ${title} a la lista de productos`;
    } 
    catch (err) {
      console.log("Algo salió mal", err);
    }
  }
  async delete() {
    await fs.promises.unlink(this.filePath);
    console.log('Eliminado')
  }
}
const main = async () => {
  const fileHandler = new Contenedor();
  console.log("Leer: ", await fileHandler.read());
  console.log(
    await fileHandler.save(
        "Nike Air Max",
        25000,
       "https://redsport.vteximg.com.br/arquivos/ids/1080717-1000-1000/ZAPATILLAS-NIKE-AIR-MAX-DIA-MUJER.jpg?v=637547099021500000"
    )
  );
  console.log(
    await fileHandler.save(
       "Nike Air 270",
       30000,
       "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4a6a9835-85b5-4ca2-9ed5-55caecd7de6a/air-max-270-zapatillas-nino-a-7CM2x4.png"
    )   
  );
  console.log("Leer: ", await fileHandler.read());
   setTimeout(async () => {
    await fileHandler.delete();
    console.log("Leer: ", await fileHandler.read());
  }, 3000)
};
main();