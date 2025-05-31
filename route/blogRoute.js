const { getBlog, postBlog, putBlog, deleteBlog } = require("../controller/blogCon")
const isAdmin = require("../middleware/admin")

const route = require("express").Router()

route.get('/', getBlog)
route.post('/', isAdmin, postBlog)
route.put('/:id', isAdmin, putBlog)
route.delete("/:id", isAdmin, deleteBlog)


module.exports = route