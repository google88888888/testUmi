export const dva = {
  config: {
    onError (err) {
      err.preventDefault()
      console.error(err.message)
    }
  }
}

export const render = (oldRender) => {
  oldRender()
}
