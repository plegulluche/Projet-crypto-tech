const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, 'Please state your firstname'],
    trim: true,
  },
  lastname: {
    type: String,
    required: [true, 'Please state your lastname'],
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Please provide your email'],
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minLength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords are not the same !',
    },
  },
  passwordChangedAt: {
    type: Date,
  },
  passwordResetToken: String,
  passwordResetExpires: Date,
});

userSchema.pre('save', async function (next) {
  //Only run this function if password was actually modified
  if (!this.isModified('password')) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete the passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

// INSTANCE METHOD (available on all documents of a collection)
// CHECK IF A GIVEN PASSWORD IS THE SAME STORED IN THE DOCUMENT
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

// INSTANCE METHOD
// CHECK IF THE PASSWORD HAS CHANGED AFTER THE JWT TOKEN WAS ISSUED
userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return JWTTimestamp < changedTimestamp;
  }
  // FALSE MEANS NOT CHANGED
  return false;
};

// INSTANCE METHOD
//
userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  console.log(
    `RESET TOKEN : ${resetToken}, passResetToken : ${this.passwordResetToken}`
  );

  this.passwordResetExpires = Date.now() + 10 * 6000;

  return resetToken;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
