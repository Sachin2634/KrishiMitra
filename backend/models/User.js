const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  name:        { type: String, required: true },
  email:       { type: String, required: true, unique: true },
  password:    { type: String, required: true },
  role:        { type: String, enum: ['farmer','consumer'], required: true },
}, { timestamps: true });

UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

UserSchema.methods.matchPassword = function(plain) {
  return bcrypt.compare(plain, this.password);
};

module.exports = mongoose.model('User', UserSchema);
