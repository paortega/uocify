Vue.filter("decimals", (value, decimals=2) => {
    return value.toFixed(decimals).toLocaleString();
  });
  
  Vue.filter("currency", (value) => {
    return value + " $";
  });