export const dateFormatter = (date: string) => {
  const dateTime = new Date(date);

  return new Intl.DateTimeFormat("pt-BR").format(dateTime);
};

export const valueFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
});
