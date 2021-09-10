

 const createTags = (tags) => {
  
  let arraySplit = tags.split(" ")
  let arrayTags = arraySplit.filter(tag => { return tag.length > 0 })
  
 return arrayTags
}

module.exports ={createTags}
