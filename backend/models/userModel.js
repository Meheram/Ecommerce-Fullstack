// import mongoose from 'mongoose';
// import bcrypt from 'bcryptjs';

//  const userSchema =new mongoose.Schema(
// 	{
// 		name:{
// 			type:String,
// 			requried:[true, "Name is required"]
// 		},
// 		email:{
// 			type:String,
// 			required:[true, "Email is required"],
// 			unique:true,
// 			lowercase:true,
// 			trim:true
// 		},
// 		password:{
// 			type:String,
// 			requried:[true, "Password is required"],
// 			minlength:[8,'Password must be atleast 8 characters']
// 		},
// 		cartItems:[
// 			{
// 				quantity:{
// 					type:Number,
// 					default:1
// 				},
// 				product:{
// 					type:mongoose.Schema.Types.ObjectId,
// 					ref:"Product"
// 				}
// 			}
// 		],
// 		role:{
// 			type:String,
// 			enum:["customer","admin"],
// 			default:"customer"
// 		}
// 	},
// 	 {
// 		timestamps:true
// 	 }

//  )

//  userSchema.pre("save", async function (next){
// 	if(!this.isModified("password")) return;

// 	try{
// 		const salt= await bcrypt.genSalt(12);
// 		this.password=await bcrypt.hash(this.password,salt);

// 	}catch(error){
// 		console.error("Error hashing password:",error);
// 		throw(error);
	    
// 	}
//  })

//  userSchema.methods.comparePassword=async function(password){
// 	return await bcrypt.compare(password,this.password);

//  }

//  const User=mongoose.model("User",userSchema);
//  export default User;




import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Name is required"],
		},
		email: {
			type: String,
			required: [true, "Email is required"],
			unique: true,
			lowercase: true,
			trim: true,
		},
		password: {
			type: String,
			required: [true, "Password is required"],
			minlength: [6, "Password must be at least 6 characters long"],
		},
		cartItems: [
			{
				quantity: {
					type: Number,
					default: 1,
				},
				product: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "Product",
				},
			},
		],
		role: {
			type: String,
			enum: ["customer", "admin"],
			default: "customer",
		},
	},
	{
		timestamps: true,
	}
);

// Pre-save hook to hash password before saving to database
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return;

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  } catch (error) {
    console.error("Error hashing password:", error);
    throw error; // throw به جای next(error)
  }
});


userSchema.methods.comparePassword = async function (password) {
	return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
