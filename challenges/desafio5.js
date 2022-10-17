db.produtos.find({ $or: [{ vendidos: 85 }, { curtidas: 36 }] },
  {
    _id: 0,
    ingredientes: 0,
    tags: 0,
    valoresNutricionais: 0,
    descricao: 0,
  });