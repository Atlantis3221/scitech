export const findById = (arr, _id) => arr.find((el => el._id === _id))

Array.prototype.findById = function(_id) {
	return findById(this, _id)
}