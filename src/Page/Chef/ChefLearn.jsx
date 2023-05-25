import React from "react";

const ChefLearn = () => {
  return (
    <div className="my-5">
      <h2 className="text-4xl text-center font-bold mb-4"> Popular Recipes</h2>
      <div
        className="h-64 mb-4 rounded-lg w-full"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2019/09/ranna-wordpress-theme-radiustheme.com-4-530x338.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="max-w-screen-lg mx-auto px-4 py-8 text-white text-center">
          <h2 className="md:text-4xl text-xl font-bold mb-4">
            Kale Quinoa and Avocado Salad with Lemon Dijon vuna
          </h2>
          <p className="text-lg mb-4">
            The doner is a Turkish creation of meat, often lamb, but not
            necessarily so, that is
          </p>
          <button className="bg-white text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-200">
            Learn More
          </button>
        </div>
      </div>
      <div
        className="h-64 mb-4 rounded-lg w-full"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2019/09/ranna_wordpress_theme_radiustheme.com_1-530x338.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="max-w-screen-lg mx-auto px-4 py-8 text-white text-center">
          <h2 className="md:text-4xl text-xl font-bold mb-4">
            Apple Salad with Lemon rice and cooked vegetables
          </h2>
          <p className="text-lg mb-4">
            The doner is a Turkish creation of meat, often lamb, but not
            necessarily so, that is
          </p>
          <button className="bg-white text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-200">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefLearn;
