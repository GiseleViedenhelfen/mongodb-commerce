db.produtos.find(
  {
    $and:
    [
    { vendidos: { $ne: 50 } },
    { tags: { $exists: false } },
    ],
  },
  {
    _id: 0,
    ingredientes: 0,
    tags: 0,
    valoresNutricionais: 0,
    descricao: 0,
    curtidas: 0,
  },
);