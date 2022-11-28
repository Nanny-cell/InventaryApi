import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Danitza:Danitza@inventario.ibdtaif.mongodb.net/inventario"
    );
    console.log("Base de datos conectada correctamente");
  } catch (error) {
    console.log(error);
    throw new Error("Error al inicar la Base de Datos");
  }
};
