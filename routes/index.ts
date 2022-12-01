const fs = require("fs")

module.exports = (app : any) => {
  fs.readdirSync(__dirname)
    .filter((filename : string) => filename !== "index.ts" && filename.endsWith(".ts"))
    .forEach((filename : any) => {
      console.log(filename)
      require(`./${filename}`).forEach((r : any) => {
        app[r.method](r.url, r.func)
      })
    })
}