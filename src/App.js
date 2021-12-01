import React from "react";
import TestimonialSection from "./UI/Layout/TestimonialSection/TestimonialSection";
import BootcampImage from "./components/BootcampImage/BootcampImage";
import BootcampText from "./components/BootcampText/BootcampText";
import CartProvider from "./store/ContextProvider";

const App = () => {
  return (
    <CartProvider>
      <TestimonialSection>
        <BootcampImage />
        <BootcampText />
      </TestimonialSection>
    </CartProvider>
  );
}

export default App;
