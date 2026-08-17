import { motion } from "framer-motion";
import { useRef } from "react";
import ProductCard from "./ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FeaturedProducts = ({ featuredProducts }) => {
	const scrollRef = useRef(null);

	if (!featuredProducts || featuredProducts.length === 0) return null;

	const scrollLeft = () => {
		if (scrollRef.current) {
			scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
		}
	};

	const scrollRight = () => {
		if (scrollRef.current) {
			scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
		}
	};

	return (
		<div className="relative py-12">
			{/* عنوان وسط */}
			<h2 className="text-3xl font-bold text-emerald-400 mb-6 text-center">
				Featured Products
			</h2>

			<div className="relative flex items-center justify-center gap-4">
				{/* دکمه چپ */}
				<button
					onClick={scrollLeft}
					className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 z-10"
				>
					<ChevronLeft size={24} />
				</button>

				{/* کارت‌ها */}
				<div
					ref={scrollRef}
					className="flex gap-6 overflow-x-auto [scrollbar-width:none]"
					>
					{featuredProducts.map((product) => (
						<motion.div
							key={product._id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="w-64 flex-shrink-0 flex items-center justify-center"
						>
							{/* پس‌زمینه دقیق کارت */}
							<div className="w-full bg-gray-900 rounded-lg p-4 flex flex-col items-center justify-center">
								<ProductCard product={product} />
							</div>
						</motion.div>
					))}
				</div>

				{/* دکمه راست */}
				<button
					onClick={scrollRight}
					className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 bg-gray-500 text-white rounded-full hover:bg-gray-600 z-10"
				>
					<ChevronRight size={24} />
				</button>
			</div>
		</div>
	);
};

export default FeaturedProducts;
