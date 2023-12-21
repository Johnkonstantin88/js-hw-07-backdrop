function onEscClose(e) {
  console.log(e);
  if (e.code === "Escape") {
    this.close();
  }
}

export { onEscClose };
